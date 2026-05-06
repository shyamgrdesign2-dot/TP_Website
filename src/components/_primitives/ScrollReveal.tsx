"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type Variant = "fade-up" | "fade-in" | "scale-in" | "slide-left" | "slide-right";

type Props = {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "li" | "span";
  style?: CSSProperties;
};

// IntersectionObserver wrapper. Adds `.is-visible` to the wrapped element
// once it scrolls into the viewport, triggering the matching `.reveal-*`
// CSS transition defined in globals.css.
export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  threshold = 0.15,
  once = false,
  className = "",
  as: Tag = "div",
  style,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            if (once) obs.unobserve(e.target);
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, once]);

  const cls = `reveal-${variant} ${visible ? "is-visible" : ""} ${className}`.trim();
  const mergedStyle: CSSProperties = { transitionDelay: `${delay}ms`, ...style };

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={cls}
      style={mergedStyle}
    >
      {children}
    </Tag>
  );
}
