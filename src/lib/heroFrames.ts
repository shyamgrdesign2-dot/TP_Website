// Shared, module-singleton loader for the hero walkthrough frame sequence.
// We scrub the clinic walkthrough by drawing pre-decoded image frames onto a
// canvas instead of seeking a <video>. iOS WebKit (which backs every browser
// on iOS, including Chrome and Brave) will not repaint a paused video that is
// scrubbed via currentTime, so a frame sequence is the only way to get smooth
// scroll-scrubbing on every device. The Preloader warms this cache before the
// site is revealed; ImmersiveScrollVideo reads the same cached promise.

export const HERO_FRAME_COUNT = 120;
// Seconds the original 10s clip spans, used to map scroll progress to a frame.
export const HERO_FRAME_DURATION = 10;

export function heroFrameUrl(i: number): string {
  const n = String(i + 1).padStart(4, "0");
  return `/hero-frames/frame-${n}.webp`;
}

type ProgressFn = (loaded: number, total: number) => void;

let cached: Promise<HTMLImageElement[]> | null = null;

export function preloadHeroFrames(onProgress?: ProgressFn): Promise<HTMLImageElement[]> {
  if (cached) {
    if (onProgress) {
      cached
        .then(() => onProgress(HERO_FRAME_COUNT, HERO_FRAME_COUNT))
        .catch(() => {});
    }
    return cached;
  }

  cached = new Promise((resolve) => {
    const images: HTMLImageElement[] = new Array(HERO_FRAME_COUNT);
    let loaded = 0;
    const settle = () => {
      loaded += 1;
      onProgress?.(loaded, HERO_FRAME_COUNT);
      if (loaded === HERO_FRAME_COUNT) resolve(images);
    };
    for (let i = 0; i < HERO_FRAME_COUNT; i++) {
      const img = new Image();
      img.decoding = "async";
      // Count a missing frame as settled so a single 404 can't stall the page.
      img.onload = settle;
      img.onerror = settle;
      img.src = heroFrameUrl(i);
      images[i] = img;
    }
  });
  return cached;
}
