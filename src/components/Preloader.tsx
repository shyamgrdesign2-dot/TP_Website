"use client";

import { useEffect, useState } from "react";

// Full-page brand preloader. On the first visit of a tab session it
// covers the page, streams the hero walkthrough video (the heaviest
// asset) to a real byte-progress bar, waits for fonts, then fades out.
// Repeat navigations in the same session skip it. A hard safety cap
// guarantees the site is never gated for longer than `MAX_WAIT_MS`.
const MAX_WAIT_MS = 7000;
// Keep the curtain up for at least this long even on instant (cached)
// loads, so it reads as an intentional intro rather than a flash.
const MIN_SHOW_MS = 700;
const SESSION_KEY = "tp_preloaded";
const VIDEO_DESKTOP = "/hospital-walkthrough.mp4";
const VIDEO_MOBILE = "/hospital-walkthrough-mobile.mp4";
const POSTER = "/hospital-walkthrough-poster.webp";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let cancelled = false;

    // Repeat visit in this tab session: skip the curtain entirely.
    if (sessionStorage.getItem(SESSION_KEY)) {
      const id = window.setTimeout(() => {
        if (!cancelled) setVisible(false);
      }, 0);
      return () => {
        cancelled = true;
        window.clearTimeout(id);
      };
    }

    document.body.style.overflow = "hidden";
    const startedAt = Date.now();

    const finish = () => {
      if (cancelled) return;
      const wait = Math.max(0, MIN_SHOW_MS - (Date.now() - startedAt));
      window.setTimeout(() => {
        if (cancelled) return;
        sessionStorage.setItem(SESSION_KEY, "1");
        setProgress(100);
        setLeaving(true);
        window.setTimeout(() => {
          if (!cancelled) setVisible(false);
        }, 560);
      }, wait);
    };

    const safety = window.setTimeout(finish, MAX_WAIT_MS);

    const videoSrc =
      window.matchMedia("(max-width: 639px)").matches
        ? VIDEO_MOBILE
        : VIDEO_DESKTOP;

    async function preload() {
      // Poster + fonts kick off immediately; the video stream drives the bar.
      const posterImg = new Image();
      posterImg.src = POSTER;
      const fontsReady =
        "fonts" in document ? document.fonts.ready : Promise.resolve();

      try {
        const res = await fetch(videoSrc);
        const total = Number(res.headers.get("Content-Length")) || 0;
        const reader = res.body?.getReader();
        if (reader && total > 0) {
          let received = 0;
          for (;;) {
            const { done, value } = await reader.read();
            if (done || cancelled) break;
            received += value?.length ?? 0;
            // Video download fills the bar to 92%; fonts cover the rest.
            setProgress(Math.min(92, Math.round((received / total) * 92)));
          }
        } else {
          // No stream/length available, just await the response.
          await res.arrayBuffer().catch(() => {});
          setProgress(92);
        }
      } catch {
        setProgress(92);
      }

      await fontsReady.catch(() => {});
      finish();
    }

    preload();

    return () => {
      cancelled = true;
      window.clearTimeout(safety);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!visible) document.body.style.overflow = "";
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
      style={{
        background:
          "radial-gradient(120% 120% at 50% 35%, #F6F2FE 0%, #EDE7FB 55%, #E6DEF8 100%)",
        opacity: leaving ? 0 : 1,
        transition: "opacity 520ms ease",
        pointerEvents: leaving ? "none" : "auto",
      }}
    >
      <div className="flex flex-col items-center gap-7 px-6">
        <img
          src="/tatvapractice-logo.svg"
          alt="TatvaPractice"
          width={180}
          height={40}
          className="h-8 w-auto sm:h-9"
          style={{ animation: "tp-preload-pulse 1.6s ease-in-out infinite" }}
        />

        <div
          className="relative h-[3px] w-[200px] overflow-hidden rounded-full"
          style={{ background: "rgba(75,74,213,0.16)" }}
        >
          <div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, #4B4AD5 0%, #27276F 100%)",
              transition: "width 240ms ease",
            }}
          />
        </div>
      </div>
    </div>
  );
}
