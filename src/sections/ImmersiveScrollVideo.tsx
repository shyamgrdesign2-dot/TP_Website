"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Calendar1,
  Chart1,
  ClipboardText,
  DocumentFavorite,
  Global,
  SecurityShield,
  StethoscopePro,
} from "tp_icon/bulk";
import AnimatedGrid from "@/components/AnimatedGrid";
import {
  HERO_FRAME_COUNT,
  HERO_FRAME_DURATION,
  preloadHeroFrames,
} from "@/lib/heroFrames";
import {
  useIsMobile,
  usePrefersReducedMotion,
  useScrollProgress,
} from "@/hooks/use-scroll-progress";

// First frame, shown as a still behind the canvas until the sequence is ready.
const VIDEO_POSTER = "/hospital-walkthrough-poster.webp";

/* "AI" as normal (semibold) text, inheriting the surrounding colour. */
function Ai() {
  return <span style={{ fontWeight: 600 }}>AI</span>;
}

/* Reused EMR-section bulk icons, rendered white for the dark video overlay. */
function PointIcon({ children }: { children: ReactNode }) {
  return (
    <span
      className="grid shrink-0 place-items-center rounded-[9px] text-white"
      style={{
        width: 32,
        height: 32,
        background: "linear-gradient(135deg, #4B4AD5 0%, #27276F 100%)",
        boxShadow: "0 5px 14px rgba(39,39,111,0.4), inset 0 1px 0 rgba(255,255,255,0.25)",
      }}
    >
      {children}
    </span>
  );
}

/* --------------------------- frame-sequence draw -------------------------- */
const HERO_FRAME_LAST = HERO_FRAME_COUNT - 1;

/** Map a frame time (seconds) to the nearest frame index. */
function timeToIndex(time: number) {
  const t = Math.min(1, Math.max(0, time / HERO_FRAME_DURATION));
  return Math.round(t * HERO_FRAME_LAST);
}

/** Draw an image onto the canvas with object-fit: cover semantics. */
function paintFrame(
  canvas: HTMLCanvasElement | null,
  img: HTMLImageElement | undefined,
) {
  if (!canvas || !img) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const cw = canvas.width;
  const ch = canvas.height;
  const iw = img.naturalWidth;
  const ih = img.naturalHeight;
  if (!cw || !ch || !iw || !ih) return;
  const scale = Math.max(cw / iw, ch / ih);
  const dw = iw * scale;
  const dh = ih * scale;
  ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
}

/* ------------------------------ math helpers ----------------------------- */
function clamp01(t: number) {
  return Math.min(1, Math.max(0, t));
}
function smooth(t: number) {
  const x = clamp01(t);
  return x * x * (3 - 2 * x);
}
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}
/** Eased 0→1 as p moves across [a,b]. */
function seg(p: number, a: number, b: number) {
  return smooth((p - a) / (b - a));
}

/* Intro (heading split + zoom) occupies the first slice of the runway. */
const INTRO_END = 0.12;

/* Snap-and-hold scroll -> video-time mapping. The video PARKS at three exact
   seconds (control points [progress, second] for the 10s walkthrough) across
   long flat holds, with short eased ramps that smoothly tween between them.
   So you scroll, the frame holds, you scroll more, it glides to the next
   second and holds again. */
const SNAP_PATIENT = 2;
// Reception + cabin snaps differ by breakpoint (mobile framing reads better a
// touch earlier than desktop).
const SNAP_RECEPTION_DESKTOP = 5.5;
const SNAP_RECEPTION_MOBILE = 5;
const SNAP_DOCTOR_DESKTOP = 9.5;
const SNAP_DOCTOR_MOBILE = 8.3;

function videoKeys(mobile: boolean): [number, number][] {
  const rec = mobile ? SNAP_RECEPTION_MOBILE : SNAP_RECEPTION_DESKTOP;
  const doc = mobile ? SNAP_DOCTOR_MOBILE : SNAP_DOCTOR_DESKTOP;
  return [
    [INTRO_END, SNAP_PATIENT], // snap 1: waiting room
    [0.34, SNAP_PATIENT], //       hold (long)
    [0.42, rec], //                ease -> reception
    [0.66, rec], //          snap 2: reception (long hold)
    [0.74, doc], //                ease -> cabin
    [1.0, doc], //           snap 3: doctor's cabin (long hold)
  ];
}

/** Eased piecewise video time (seconds, scaled to the real duration). Flat
 *  segments hold a frame; sloped segments ease smoothly between snaps. */
function videoTimeAt(p: number, dur: number, mobile: boolean) {
  const keys = videoKeys(mobile);
  const scale = (s: number) => (s / 10) * dur;
  if (p <= keys[0][0]) return scale(keys[0][1]);
  for (let i = 0; i < keys.length - 1; i++) {
    const [pa, sa] = keys[i];
    const [pb, sb] = keys[i + 1];
    if (p <= pb) return scale(lerp(sa, sb, smooth((p - pa) / (pb - pa))));
  }
  return scale(keys[keys.length - 1][1]);
}

type Point = { icon: ReactNode; text: ReactNode };
type Station = {
  side: "left" | "right";
  enter: [number, number];
  exit: [number, number];
  eyebrow: string;
  titleLines: [string, string];
  subtitle: ReactNode;
  points: Point[];
};

const ic = {
  calendar: <Calendar1 width={16} height={16} />,
  clipboard: <ClipboardText width={16} height={16} />,
  doc: <DocumentFavorite width={16} height={16} />,
  chart: <Chart1 width={16} height={16} />,
  globe: <Global width={16} height={16} />,
  steth: <StethoscopePro width={16} height={16} />,
  shield: <SecurityShield width={16} height={16} />,
};

const STATIONS: Station[] = [
  {
    // Parked at 2s (waiting room); exits as the video eases toward reception.
    side: "left",
    enter: [0.14, 0.2],
    exit: [0.35, 0.41],
    eyebrow: "Patient",
    titleLines: ["The visit begins", "before they arrive"],
    subtitle: <>Agentic <Ai /> gets every patient ready before they walk in.</>,
    points: [
      { icon: ic.calendar, text: <>Smart <Ai /> <strong>appointment booking</strong></> },
      { icon: ic.clipboard, text: <><strong>Symptoms &amp; history</strong> collected by our <Ai /> agent</> },
      { icon: ic.globe, text: <>Smart reminders <strong>24h &amp; 2h</strong> before the visit</> },
      { icon: ic.doc, text: <>One-tap <strong>reschedule &amp; rebook</strong></> },
      { icon: ic.steth, text: <><strong>Patient app</strong>: visits, Rx &amp; labs on one timeline</> },
    ],
  },
  {
    // Parked at 4.5s (reception); exits as the video eases toward the cabin.
    side: "left",
    enter: [0.43, 0.49],
    exit: [0.67, 0.73],
    eyebrow: "Front desk",
    titleLines: ["Front desk,", "fully under control"],
    subtitle: <>An <Ai /> receptionist agent runs the whole front desk.</>,
    points: [
      { icon: ic.calendar, text: <>Complete <strong>appointment management</strong>: slots, walk-ins &amp; live queue</> },
      { icon: ic.steth, text: <>Smart <strong>check-in</strong>: symptoms, history &amp; vitals</> },
      { icon: ic.chart, text: <>Smart scheduling + <strong>no-show recovery</strong></> },
      { icon: ic.globe, text: <><strong>WhatsApp</strong> reminders &amp; reschedules</> },
      { icon: ic.doc, text: <>Billing: <strong>GST invoices</strong>, reconciliation &amp; more</> },
    ],
  },
  {
    // Parked at the cabin; holds to the end. Reads on the LEFT like the
    // other touchpoints for consistency.
    side: "left",
    enter: [0.75, 0.81],
    exit: [1.05, 1.1],
    eyebrow: "Consultation",
    titleLines: ["The doctor speaks,", "the EMR writes itself"],
    subtitle: <><Ai /> sits in on every consult, taking notes, structuring the Rx, and handling the paperwork so you focus on the patient.</>,
    points: [
      { icon: ic.clipboard, text: <>Audit-ready Rx in <strong>30s</strong>, by dictation, ambient or SnapRx</> },
      { icon: ic.globe, text: <><strong>9 Indian languages</strong> supported</> },
      { icon: ic.steth, text: <><strong>Customisable Rx</strong> across 25+ specialties</> },
      { icon: ic.chart, text: <>Built-in <strong>practice analytics</strong> &amp; recall</> },
      { icon: ic.doc, text: <>Built-in <strong>video consults</strong>, ABDM-linked</> },
    ],
  },
];

export default function ImmersiveScrollVideo() {
  const runwayRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[] | null>(null);
  const frameIndexRef = useRef(-1);
  const targetRef = useRef(0);
  const displayRef = useRef(0);
  const progress = useScrollProgress(runwayRef);
  const isMobile = useIsMobile();
  const reduced = usePrefersReducedMotion();
  const [framesReady, setFramesReady] = useState(false);

  // Load the frame sequence (shared cache, already warmed by the Preloader),
  // size the canvas to its box in device pixels, and keep it sized on resize.
  // Drawing a pre-decoded image is what makes scrubbing smooth on iOS, where
  // seeking a paused <video> via currentTime simply won't repaint.
  useEffect(() => {
    let alive = true;

    const resize = () => {
      const cv = canvasRef.current;
      if (!cv) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
      const bw = Math.round(cv.clientWidth * dpr);
      const bh = Math.round(cv.clientHeight * dpr);
      if (cv.width !== bw || cv.height !== bh) {
        cv.width = bw;
        cv.height = bh;
      }
      const imgs = imagesRef.current;
      const idx = frameIndexRef.current;
      if (imgs && idx >= 0) paintFrame(cv, imgs[idx]);
    };

    resize();
    window.addEventListener("resize", resize);

    preloadHeroFrames().then((imgs) => {
      if (!alive) return;
      imagesRef.current = imgs;
      if (frameIndexRef.current < 0) frameIndexRef.current = 0;
      setFramesReady(true);
      resize();
    });

    return () => {
      alive = false;
      window.removeEventListener("resize", resize);
    };
  }, []);

  // Scroll sets a TARGET frame time; the rAF loop glides toward it. Reduced
  // motion paints the mapped frame directly with no animation.
  useEffect(() => {
    const t = videoTimeAt(progress, HERO_FRAME_DURATION, isMobile);
    targetRef.current = t;
    if (reduced) {
      displayRef.current = t;
      const imgs = imagesRef.current;
      if (imgs) {
        const idx = timeToIndex(t);
        frameIndexRef.current = idx;
        paintFrame(canvasRef.current, imgs[idx]);
      }
    }
  }, [progress, reduced, isMobile]);

  // Glide the frame time toward the target every animation frame, eased and
  // speed-capped, so the walkthrough flows through the in-between frames
  // smoothly instead of snapping the whole delta at once. Only repaints when
  // the rounded frame index actually changes.
  useEffect(() => {
    if (reduced) return;
    const MAX_STEP = HERO_FRAME_DURATION * 0.005; // ~0.05s per tick for a 10s clip
    let raf = 0;
    const tick = () => {
      const imgs = imagesRef.current;
      if (imgs) {
        const target = targetRef.current;
        const cur = displayRef.current;
        const diff = target - cur;
        let next: number;
        if (Math.abs(diff) < 0.012) {
          next = target;
        } else {
          let step = diff * 0.12; // ease (slows near the snap)
          if (step > MAX_STEP) step = MAX_STEP;
          else if (step < -MAX_STEP) step = -MAX_STEP;
          next = cur + step;
        }
        displayRef.current = next;
        const idx = timeToIndex(next);
        if (idx !== frameIndexRef.current) {
          frameIndexRef.current = idx;
          paintFrame(canvasRef.current, imgs[idx]);
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  const p = progress;
  // Intro: title slides right + subtitle slides left, both fade; the framed
  // video zooms from a centred "iPad" to full-bleed.
  const introOut = seg(p, 0.02, INTRO_END);
  const titleX = lerp(0, 120, introOut);
  const subX = lerp(0, -120, introOut);
  const introOpacity = 1 - introOut;
  const zoom = seg(p, 0, INTRO_END);
  // Mobile starts the framed video larger so the intro copy fits inside it.
  const frameScale = lerp(isMobile ? 0.84 : 0.62, 1, zoom);
  const frameRadius = lerp(isMobile ? 22 : 30, 0, zoom);
  const bezelOpacity = 1 - zoom;

  // Which station's data is showing (the key remounts the panel so its cards
  // re-animate in, one by one, the moment you arrive — no extra scroll needed).
  const activeStation = p < INTRO_END ? -1 : p < 0.42 ? 0 : p < 0.74 ? 1 : 2;

  // Background fade snaps ON the instant a station becomes active (one scroll),
  // rather than ramping in over extra scroll. A CSS opacity transition smooths
  // the on/off. Patient + Front desk read on the left; Consultation on the
  // right (on mobile every station reads on the left).
  // All three touchpoints now read on the left, so the left wash carries
  // every active station.
  const leftFadeOn = activeStation >= 0;

  // Short runway so a small scroll flips between states quickly instead of
  // dragging through screens of scrolling for each room.
  const runwayHeight = reduced ? "auto" : isMobile ? "200vh" : "240vh";

  return (
    <section
      ref={runwayRef}
      id="clinic-walkthrough"
      className="relative w-full"
      style={{ height: runwayHeight }}
      aria-label="A patient's journey through the clinic"
    >
      <div
        data-navbar-dark
        className="bg-navy-radial sticky top-0 flex h-[100dvh] w-full items-center justify-center overflow-hidden"
      >
        {/* Blue-gradient backdrop with animated grids in the corners (shows
            during the intro before the video zooms to full-bleed). */}
        <CornerGrids />

        {/* Video, framed during intro as a realistic tablet, then full-bleed.
            The bezel is layered: a dark screen border, a brushed-metal rim, an
            inner screen highlight, and a soft cast shadow, all fading as it
            zooms to full-bleed. */}
        <div
          className="absolute z-[1]"
          style={{
            inset: 0,
            transform: `scale(${frameScale})`,
            borderRadius: frameRadius,
            overflow: "hidden",
            willChange: "transform",
            boxShadow:
              bezelOpacity > 0.02
                ? [
                    `0 0 0 ${lerp(0, 13, bezelOpacity)}px #0c0c14`, // black bezel
                    `0 0 0 ${lerp(0, 15, bezelOpacity)}px #2a2d3a`, // dark rim
                    `0 0 0 ${lerp(0, 16.5, bezelOpacity)}px #5a5f70`, // metallic edge
                    `inset 0 0 0 1px rgba(255,255,255,${0.10 * bezelOpacity})`, // screen highlight
                    `0 ${lerp(0, 50, bezelOpacity)}px ${lerp(0, 110, bezelOpacity)}px rgba(10,10,40,${0.55 * bezelOpacity})`, // cast shadow
                  ].join(", ")
                : "none",
          }}
        >
          {/* Poster still behind the canvas until the frame sequence paints. */}
          <div
            aria-hidden
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${VIDEO_POSTER}')`,
              opacity: framesReady ? 0 : 1,
              transition: "opacity 300ms ease",
            }}
          />
          <canvas
            ref={canvasRef}
            role="img"
            aria-label="A walkthrough of a clinic powered by TatvaPractice"
            className="relative block h-full w-full"
          />
          {/* slight darken for text legibility */}
          <div className="pointer-events-none absolute inset-0" style={{ background: "rgba(7,6,18,0.18)" }} />
        </div>

        {/* Dark wash behind the station copy. Desktop uses a left 62% fade;
            mobile uses a stronger full-width wash so the overlaid text stays
            legible across the whole card width. */}
        {isMobile ? (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              opacity: leftFadeOn ? 1 : 0,
              transition: "opacity 320ms cubic-bezier(0.22,1,0.36,1)",
              background:
                "linear-gradient(to right, rgba(3,2,10,0.94) 0%, rgba(3,2,10,0.82) 52%, rgba(3,2,10,0.42) 100%)",
            }}
          />
        ) : (
          <SideGradient side="left" opacity={leftFadeOn ? 1 : 0} />
        )}

        {/* Bottom dark fade + animated grid across every touchpoint */}
        <BottomFadeGrid />

        {/* Subtle dark wash behind the intro copy so the heading + subtext
            stay legible over the bright video. Fades out as you scroll in. */}
        {introOpacity > 0.01 ? (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-[19]"
            style={{
              opacity: introOpacity,
              background:
                "radial-gradient(ellipse 64% 52% at 50% 46%, rgba(4,3,16,0.62) 0%, rgba(4,3,16,0.34) 46%, transparent 76%)",
            }}
          />
        ) : null}

        {/* Intro heading (splits away on first scroll) */}
        <div
          className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center"
          style={{ opacity: introOpacity }}
        >
          <h2
            className="font-extrabold text-white [text-wrap:balance]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(38px, 9vw, 68px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: "min(88vw, 42rem)",
              transform: `translateX(${titleX}px)`,
              textShadow: "0 4px 30px rgba(0,0,0,0.6)",
            }}
          >
            AI-powered practice management.
          </h2>
          <p
            className="mt-4 text-white/90"
            style={{
              fontSize: "clamp(16px, 1.9vw, 22px)",
              lineHeight: 1.6,
              maxWidth: "min(84vw, 40rem)",
              transform: `translateX(${subX}px)`,
              textShadow: "0 2px 14px rgba(0,0,0,0.55)",
            }}
          >
            One AI-first EMR that runs your whole clinic, from the front desk to
            the consult room.
          </p>
        </div>

        {/* Active station's data, tucked to the left edge. Keyed by index so
            it remounts and re-runs the staggered card reveal on arrival. */}
        <div className="absolute inset-0 z-20">
          {activeStation >= 0 ? (
            <StationPanel
              key={activeStation}
              station={STATIONS[activeStation]}
              animate={!reduced}
              forceLeft={isMobile}
            />
          ) : null}
        </div>

      </div>
    </section>
  );
}

/* ------------------------------- gradients ------------------------------- */

function SideGradient({ side, opacity }: { side: "left" | "right"; opacity: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-y-0 z-10"
      style={{
        [side]: 0,
        width: "62%",
        opacity,
        background:
          side === "left"
            ? "linear-gradient(to right, rgba(5,4,12,0.96) 0%, rgba(5,4,12,0.78) 38%, rgba(5,4,12,0) 100%)"
            : "linear-gradient(to left, rgba(5,4,12,0.96) 0%, rgba(5,4,12,0.78) 38%, rgba(5,4,12,0) 100%)",
        transition: "opacity 320ms cubic-bezier(0.22,1,0.36,1)",
      } as React.CSSProperties}
    />
  );
}

/* ------------------------------ station panel ---------------------------- */

function StationPanel({
  station,
  animate,
  forceLeft,
}: {
  station: Station;
  animate: boolean;
  forceLeft: boolean;
}) {
  // The frame is positioned by `side` (consultation sits on the right), but
  // the content is ALWAYS left-aligned (icon-left, text-left) — never mirrored.
  // On mobile every station is positioned left.
  const onRight = station.side === "right" && !forceLeft;
  const revealClass = onRight ? "vrx-card-in-right" : "vrx-card-in";
  const reveal = (i: number) =>
    animate
      ? { className: revealClass, style: { animationDelay: `${i * 90}ms` } as React.CSSProperties }
      : { className: "", style: undefined };
  const head = reveal(0);

  return (
    <div
      className={`absolute top-1/2 flex w-[min(86vw,380px)] -translate-y-1/2 flex-col items-start text-left ${
        onRight ? "right-0" : "left-0"
      }`}
      style={onRight ? { paddingRight: 24 } : { paddingLeft: 24 }}
    >
      <div className={`flex flex-col items-start ${head.className}`} style={head.style}>
        <span
          className="mb-3 inline-block w-fit rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]"
          style={{
            color: "#E4E0FF",
            background: "rgba(75,74,213,0.28)",
            border: "1px solid rgba(155,150,255,0.35)",
            backdropFilter: "blur(6px)",
          }}
        >
          {station.eyebrow}
        </span>
        <h3
          className="font-extrabold text-white"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(24px, 2.9vw, 40px)",
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            textShadow: "0 4px 24px rgba(0,0,0,0.45)",
          }}
        >
          {station.titleLines[0]}
          <br />
          {station.titleLines[1]}
        </h3>
        <p
          className="mt-2.5 text-white/75"
          style={{ fontSize: "clamp(13px, 1.05vw, 16px)", lineHeight: 1.5 }}
        >
          {station.subtitle}
        </p>
      </div>

      <ul className="mt-4 flex w-full flex-col gap-2">
        {station.points.map((pt, i) => {
          const r = reveal(i + 1);
          return (
            <li
              key={i}
              className={`flex items-center gap-3 rounded-[12px] px-3 py-2 ${r.className}`}
              style={{
                ...(r.style ?? {}),
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
            >
              <PointIcon>{pt.icon}</PointIcon>
              <span
                className="text-white/90 [&_strong]:font-semibold [&_strong]:text-white"
                style={{ fontSize: "clamp(13px, 1vw, 15px)", lineHeight: 1.3 }}
              >
                {pt.text}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* Bottom band: a dark linear fade across the full width for text legibility.
   The animated grids live in the single CornerGrids layer, not here. */
function BottomFadeGrid() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 z-[6]"
      style={{ height: "clamp(150px, 24vh, 280px)" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(5,4,12,0.9) 0%, rgba(5,4,12,0.55) 44%, rgba(5,4,12,0) 100%)",
        }}
      />
    </div>
  );
}

/* Single animated-grid layer tucked into all four corners. It sits ABOVE the
   video so the same one layer reads during the intro backdrop AND while the
   walkthrough plays (no second stacked layer). Kept small + subtle. */
function CornerGrids() {
  const box = "clamp(140px, 18vw, 280px)";
  const mask = "radial-gradient(125% 125% at 0% 0%, black 0%, rgba(0,0,0,0.5) 42%, transparent 72%)";
  const corners: { pos: React.CSSProperties; flip: string }[] = [
    { pos: { top: 0, left: 0 }, flip: "none" },
    { pos: { top: 0, right: 0 }, flip: "scaleX(-1)" },
    { pos: { bottom: 0, left: 0 }, flip: "scaleY(-1)" },
    { pos: { bottom: 0, right: 0 }, flip: "scale(-1, -1)" },
  ];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-[11]">
      {corners.map((c, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            width: box,
            height: box,
            ...c.pos,
            transform: c.flip,
            opacity: 0.5,
            WebkitMaskImage: mask,
            maskImage: mask,
          }}
        >
          <AnimatedGrid className="h-full w-full" />
        </div>
      ))}
    </div>
  );
}
