"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const POOL = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

type DecryptedTextProps = {
  text: string;
  speed?: number;
  maxIterations?: number;
  className?: string;
  animateOn?: "hover" | "view";
  /** Wait before starting the scramble (e.g. after card scroll-reveal). */
  delayMs?: number;
};

function scrambleLine(target: string, revealed: number) {
  return target
    .split("")
    .map((ch, i) => {
      if (ch === " " || ch === "\n") return ch;
      if (i < revealed) return ch;
      return POOL[Math.floor(Math.random() * POOL.length)];
    })
    .join("");
}

export default function DecryptedText({
  text,
  speed = 42,
  maxIterations = 14,
  className = "",
  animateOn = "view",
  delayMs = 0,
}: DecryptedTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const played = useRef(false);
  const [output, setOutput] = useState(text);

  const play = useCallback(() => {
    let frame = 0;
    const id = window.setInterval(() => {
      frame += 1;
      const revealed = Math.floor((frame / maxIterations) * text.length);
      setOutput(scrambleLine(text, revealed));
      if (frame >= maxIterations) {
        setOutput(text);
        window.clearInterval(id);
      }
    }, speed);
    return () => window.clearInterval(id);
  }, [maxIterations, speed, text]);

  useEffect(() => {
    if (animateOn !== "view") return;
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || played.current) return;
        played.current = true;
        const start = () => {
          setOutput(scrambleLine(text, 0));
          play();
        };
        if (delayMs > 0) {
          window.setTimeout(start, delayMs);
        } else {
          start();
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -24px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [animateOn, delayMs, play, text]);

  return (
    <span
      ref={ref}
      className={className}
      onMouseEnter={
        animateOn === "hover"
          ? () => {
              setOutput(scrambleLine(text, 0));
              play();
            }
          : undefined
      }
    >
      {output}
    </span>
  );
}
