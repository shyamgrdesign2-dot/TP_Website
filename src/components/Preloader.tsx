"use client";

import { useEffect, useState } from "react";
import { preloadHeroFrames } from "@/lib/heroFrames";

// Full-page brand preloader. On the first visit of a tab session it
// covers the page, downloads the hero walkthrough frame sequence (the
// heaviest asset) to a real progress bar, waits for fonts, then fades
// out. Repeat navigations in the same session skip it. A hard safety
// cap guarantees the site is never gated for longer than `MAX_WAIT_MS`.
const MAX_WAIT_MS = 9000;
// Keep the curtain up for at least this long even on instant (cached)
// loads, so it reads as an intentional intro rather than a flash.
const MIN_SHOW_MS = 700;
const SESSION_KEY = "tp_preloaded";
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

    async function preload() {
      // Poster + fonts kick off immediately; the full frame-sequence download
      // (decoded and cached for instant scrubbing) drives the bar.
      const posterImg = new Image();
      posterImg.src = POSTER;
      const fontsReady =
        "fonts" in document ? document.fonts.ready : Promise.resolve();

      try {
        await preloadHeroFrames((loaded, total) => {
          if (cancelled || total <= 0) return;
          // Frames fill the bar to 92%; fonts cover the rest.
          setProgress(Math.min(92, Math.round((loaded / total) * 92)));
        });
      } catch {
        // Failure: don't gate the site, fall through to fonts/finish.
      }
      setProgress((p) => Math.max(p, 92));

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

        {/* Circular progress: a spinning track plus an arc that fills with the
            real download percentage, and the live number in the centre. */}
        <div className="relative grid h-12 w-12 place-items-center">
          <svg
            className="h-12 w-12 -rotate-90"
            viewBox="0 0 44 44"
            aria-hidden
          >
            <circle cx="22" cy="22" r="18" fill="none" stroke="rgba(75,74,213,0.16)" strokeWidth="3" />
            <circle
              cx="22"
              cy="22"
              r="18"
              fill="none"
              stroke="#4B4AD5"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 18}
              strokeDashoffset={2 * Math.PI * 18 * (1 - progress / 100)}
              style={{ transition: "stroke-dashoffset 240ms ease" }}
            />
          </svg>
          <span
            className="absolute text-[11px] font-semibold tabular-nums text-[#4B4AD5]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {Math.round(progress)}
          </span>
        </div>
      </div>
    </div>
  );
}
