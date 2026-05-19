"use client";

import Lottie from "lottie-react";
import animation from "../../public/scroll-arrow.json";

export default function ScrollArrow() {
  return (
    <Lottie
      animationData={animation}
      loop
      autoplay
      style={{ width: 36, height: 36 }}
      aria-hidden
    />
  );
}
