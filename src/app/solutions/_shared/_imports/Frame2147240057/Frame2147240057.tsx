// Verbatim Figma export for the Solutions hero card (1040×420) — kept
// in sync with the original Figma "Frame2147240057" composition that
// Clinics + Hospitals share. The only changes from the raw export are:
//   • Image asset path renamed to a stable filename.
//   • The text block + the right-hand image are sourced from props so
//     this one component powers both /solutions/clinics and
//     /solutions/hospitals (and any future Solutions subpage).
//   • The card never scales itself — its parent (`tab-widget-fit` in
//     SolutionHero) handles uniform downscale.
import Image from "next/image";
import svgPaths from "./svg-o7nvvhkyvk";
import defaultHero from "./hero-image.png";

export type SolutionsHeroFrameContent = {
  /** Eyebrow pill copy (e.g. "For Independent Doctors & Clinics"). */
  eyebrowLabel?: string;
  /** Two-line headline. */
  headlineLines?: [string, string];
  /** 2–3 line subhead. */
  subhead?: string;
  /** Right-hand image inside the narrow inset card. */
  mainImage?: { src: string; alt: string };
};

function DivRelative() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[420px] left-1/2 top-1/2 w-[1040px]" data-name="div.relative">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1040 420">
        <g id="div.relative">
          <g clipPath="url(#clip0_11_34)">
            <rect fill="var(--fill-0, white)" height="420" rx="32" width="1040" />
            <g id="Vector" opacity="0.5">
              <path d={svgPaths.p3e8eb480} fill="url(#paint0_radial_11_34)" />
              <path d={svgPaths.pbd1db00} fill="url(#paint1_radial_11_34)" />
              <path d={svgPaths.p2bf80b00} fill="url(#paint2_radial_11_34)" />
              <path d={svgPaths.p2d2f8b00} fill="url(#paint3_radial_11_34)" />
              <path d={svgPaths.p3a9d7640} fill="url(#paint4_radial_11_34)" />
              <path d={svgPaths.p1b9d4080} fill="url(#paint5_radial_11_34)" />
              <path d={svgPaths.p3b262c00} fill="url(#paint6_radial_11_34)" />
              <path d={svgPaths.p33d9340} fill="url(#paint7_radial_11_34)" />
              <path d={svgPaths.p3659c700} fill="url(#paint8_radial_11_34)" />
              <path d={svgPaths.p3f378200} fill="url(#paint9_radial_11_34)" />
              <path d={svgPaths.p34a22a00} fill="url(#paint10_radial_11_34)" />
              <path d={svgPaths.p6315df0} fill="url(#paint11_radial_11_34)" />
              <path d={svgPaths.p9fb0f80} fill="url(#paint12_radial_11_34)" />
              <path d={svgPaths.p214d7700} fill="url(#paint13_radial_11_34)" />
              <path d={svgPaths.pb487480} fill="url(#paint14_radial_11_34)" />
              <path d={svgPaths.p6dfb600} fill="url(#paint15_radial_11_34)" />
              <path d={svgPaths.p3116fb00} fill="url(#paint16_radial_11_34)" />
              <path d={svgPaths.p27cdd980} fill="url(#paint17_radial_11_34)" />
              <path d={svgPaths.pfa53700} fill="url(#paint18_radial_11_34)" />
              <path d={svgPaths.p1c3ab6f2} fill="url(#paint19_radial_11_34)" />
              <path d={svgPaths.p9b954c0} fill="url(#paint20_radial_11_34)" />
              <path d={svgPaths.p237ecf00} fill="url(#paint21_radial_11_34)" />
              <path d={svgPaths.p3765b880} fill="url(#paint22_radial_11_34)" />
              <path d={svgPaths.p1eaef700} fill="url(#paint23_radial_11_34)" />
              <path d={svgPaths.pef87580} fill="url(#paint24_radial_11_34)" />
              <path d={svgPaths.p3296f600} fill="url(#paint25_radial_11_34)" />
              <path d={svgPaths.p3ee55400} fill="url(#paint26_radial_11_34)" />
              <path d={svgPaths.p1a637e00} fill="url(#paint27_radial_11_34)" />
              <path d={svgPaths.p173a5580} fill="url(#paint28_radial_11_34)" />
              <path d={svgPaths.p2671b400} fill="url(#paint29_radial_11_34)" />
              <path d={svgPaths.p7ebeb00} fill="url(#paint30_radial_11_34)" />
              <path d={svgPaths.p3da8e00} fill="url(#paint31_radial_11_34)" />
              <path d={svgPaths.pab59640} fill="url(#paint32_radial_11_34)" />
              <path d={svgPaths.p317d4600} fill="url(#paint33_radial_11_34)" />
              <path d={svgPaths.p11ee5580} fill="url(#paint34_radial_11_34)" />
              <path d={svgPaths.p1fb1b080} fill="url(#paint35_radial_11_34)" />
              <path d={svgPaths.p27d0dc00} fill="url(#paint36_radial_11_34)" />
              <path d={svgPaths.p12582480} fill="url(#paint37_radial_11_34)" />
              <path d={svgPaths.pa091c00} fill="url(#paint38_radial_11_34)" />
              <path d={svgPaths.p37978380} fill="url(#paint39_radial_11_34)" />
              <path d={svgPaths.p8160100} fill="url(#paint40_radial_11_34)" />
              <path d={svgPaths.p84ee5c0} fill="url(#paint41_radial_11_34)" />
              <path d={svgPaths.p3ba24500} fill="url(#paint42_radial_11_34)" />
              <path d={svgPaths.p37486e00} fill="url(#paint43_radial_11_34)" />
              <path d={svgPaths.pcdf4a00} fill="url(#paint44_radial_11_34)" />
              <path d={svgPaths.p8a89ff2} fill="url(#paint45_radial_11_34)" />
              <path d={svgPaths.p5c2d300} fill="url(#paint46_radial_11_34)" />
              <path d={svgPaths.p3e2259f0} fill="url(#paint47_radial_11_34)" />
              <path d={svgPaths.p3174d300} fill="url(#paint48_radial_11_34)" />
              <path d={svgPaths.p1f999000} fill="url(#paint49_radial_11_34)" />
              <path d={svgPaths.p2d1e9800} fill="url(#paint50_radial_11_34)" />
              <path d={svgPaths.p1fee0500} fill="url(#paint51_radial_11_34)" />
              <path d={svgPaths.p209b1f2} fill="url(#paint52_radial_11_34)" />
              <path d={svgPaths.p5b49100} fill="url(#paint53_radial_11_34)" />
              <path d={svgPaths.p19998100} fill="url(#paint54_radial_11_34)" />
              <path d={svgPaths.p2aeb4d00} fill="url(#paint55_radial_11_34)" />
              <path d={svgPaths.p3ac12372} fill="url(#paint56_radial_11_34)" />
              <path d={svgPaths.p9009b80} fill="url(#paint57_radial_11_34)" />
              <path d={svgPaths.paef9e00} fill="url(#paint58_radial_11_34)" />
              <path d={svgPaths.p2c70ab00} fill="url(#paint59_radial_11_34)" />
              <path d={svgPaths.pc722700} fill="url(#paint60_radial_11_34)" />
              <path d={svgPaths.p171ad700} fill="url(#paint61_radial_11_34)" />
              <path d={svgPaths.p203925f0} fill="url(#paint62_radial_11_34)" />
              <path d={svgPaths.p9076c80} fill="url(#paint63_radial_11_34)" />
              <path d={svgPaths.p1ead9a00} fill="url(#paint64_radial_11_34)" />
              <path d={svgPaths.p10446480} fill="url(#paint65_radial_11_34)" />
              <path d={svgPaths.p2a7a3600} fill="url(#paint66_radial_11_34)" />
              <path d={svgPaths.p29045270} fill="url(#paint67_radial_11_34)" />
              <path d={svgPaths.p29fdc380} fill="url(#paint68_radial_11_34)" />
              <path d={svgPaths.p367c1700} fill="url(#paint69_radial_11_34)" />
              <path d={svgPaths.p39214600} fill="url(#paint70_radial_11_34)" />
              <path d={svgPaths.p2cdc3740} fill="url(#paint71_radial_11_34)" />
              <path d={svgPaths.p2f6dca00} fill="url(#paint72_radial_11_34)" />
              <path d={svgPaths.p21b1cb80} fill="url(#paint73_radial_11_34)" />
              <path d={svgPaths.p1030b600} fill="url(#paint74_radial_11_34)" />
              <path d={svgPaths.p3c25db00} fill="url(#paint75_radial_11_34)" />
              <path d={svgPaths.p25a3f500} fill="url(#paint76_radial_11_34)" />
              <path d={svgPaths.p193d6180} fill="url(#paint77_radial_11_34)" />
              <path d={svgPaths.p190c1680} fill="url(#paint78_radial_11_34)" />
              <path d={svgPaths.p34247c00} fill="url(#paint79_radial_11_34)" />
              <path d={svgPaths.p3779d700} fill="url(#paint80_radial_11_34)" />
              <path d={svgPaths.p2d6e2d00} fill="url(#paint81_radial_11_34)" />
              <path d={svgPaths.p21026a00} fill="url(#paint82_radial_11_34)" />
              <path d={svgPaths.p2ea4b180} fill="url(#paint83_radial_11_34)" />
              <path d={svgPaths.p71fb500} fill="url(#paint84_radial_11_34)" />
              <path d={svgPaths.p3843f80} fill="url(#paint85_radial_11_34)" />
              <path d={svgPaths.p3dd7fcc0} fill="url(#paint86_radial_11_34)" />
              <path d={svgPaths.p3e862700} fill="url(#paint87_radial_11_34)" />
              <path d={svgPaths.p2095900} fill="url(#paint88_radial_11_34)" />
              <path d={svgPaths.pdee9c00} fill="url(#paint89_radial_11_34)" />
              <path d={svgPaths.p98f1880} fill="url(#paint90_radial_11_34)" />
              <path d={svgPaths.pd67200} fill="url(#paint91_radial_11_34)" />
              <path d={svgPaths.p278a2f80} fill="url(#paint92_radial_11_34)" />
              <path d={svgPaths.p17aba000} fill="url(#paint93_radial_11_34)" />
              <path d={svgPaths.p21180100} fill="url(#paint94_radial_11_34)" />
              <path d={svgPaths.p2c656dd0} fill="url(#paint95_radial_11_34)" />
              <path d={svgPaths.p1ae0c200} fill="url(#paint96_radial_11_34)" />
              <path d={svgPaths.p298e9b00} fill="url(#paint97_radial_11_34)" />
              <path d={svgPaths.pbb3a80} fill="url(#paint98_radial_11_34)" />
              <path d={svgPaths.p19281380} fill="url(#paint99_radial_11_34)" />
              <path d={svgPaths.p1cbd9800} fill="url(#paint100_radial_11_34)" />
              <path d={svgPaths.p3620f600} fill="url(#paint101_radial_11_34)" />
              <path d={svgPaths.p25bd5980} fill="url(#paint102_radial_11_34)" />
              <path d={svgPaths.p2eebf1f0} fill="url(#paint103_radial_11_34)" />
              <path d={svgPaths.p297c4d00} fill="url(#paint104_radial_11_34)" />
              <path d={svgPaths.pec47a80} fill="url(#paint105_radial_11_34)" />
              <path d={svgPaths.p2c9dcc80} fill="url(#paint106_radial_11_34)" />
              <path d={svgPaths.p19185e00} fill="url(#paint107_radial_11_34)" />
              <path d={svgPaths.p297cc900} fill="url(#paint108_radial_11_34)" />
              <path d={svgPaths.p13ff9c80} fill="url(#paint109_radial_11_34)" />
              <path d={svgPaths.p384fe700} fill="url(#paint110_radial_11_34)" />
              <path d={svgPaths.p3a7f4000} fill="url(#paint111_radial_11_34)" />
              <path d={svgPaths.p33f30400} fill="url(#paint112_radial_11_34)" />
              <path d={svgPaths.pda83580} fill="url(#paint113_radial_11_34)" />
              <path d={svgPaths.p342bd300} fill="url(#paint114_radial_11_34)" />
              <path d={svgPaths.p8800480} fill="url(#paint115_radial_11_34)" />
              <path d={svgPaths.p5dfe800} fill="url(#paint116_radial_11_34)" />
              <path d={svgPaths.p30bdf4f2} fill="url(#paint117_radial_11_34)" />
              <path d={svgPaths.pe369b30} fill="url(#paint118_radial_11_34)" />
              <path d={svgPaths.p2538c6c0} fill="url(#paint119_radial_11_34)" />
              <path d={svgPaths.p365465f0} fill="url(#paint120_radial_11_34)" />
              <path d={svgPaths.p128f70f0} fill="url(#paint121_radial_11_34)" />
              <path d={svgPaths.p35ddb900} fill="url(#paint122_radial_11_34)" />
              <path d={svgPaths.p2f831f00} fill="url(#paint123_radial_11_34)" />
              <path d={svgPaths.p1d92af00} fill="url(#paint124_radial_11_34)" />
              <path d={svgPaths.p172e3700} fill="url(#paint125_radial_11_34)" />
              <path d={svgPaths.p3a1ddbf1} fill="url(#paint126_radial_11_34)" />
              <path d={svgPaths.p18b14e80} fill="url(#paint127_radial_11_34)" />
              <path d={svgPaths.p1e777e80} fill="url(#paint128_radial_11_34)" />
              <path d={svgPaths.p37b1ad00} fill="url(#paint129_radial_11_34)" />
              <path d={svgPaths.p32484e00} fill="url(#paint130_radial_11_34)" />
              <path d={svgPaths.p1d2f19c0} fill="url(#paint131_radial_11_34)" />
              <path d={svgPaths.p4a01e80} fill="url(#paint132_radial_11_34)" />
              <path d={svgPaths.pde50a00} fill="url(#paint133_radial_11_34)" />
              <path d={svgPaths.p31b6100} fill="url(#paint134_radial_11_34)" />
            </g>
            <g filter="url(#filter0_n_11_34)" id="Gradient">
              <path d={svgPaths.p36c24000} fill="var(--fill-0, white)" />
              <path d={svgPaths.p36c24000} fill="url(#paint135_radial_11_34)" />
            </g>
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="420.383" id="filter0_n_11_34" width="1040.44" x="-0.443359" y="0.233398">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feTurbulence baseFrequency="4.4988751411437988 4.4988751411437988" numOctaves="3" result="noise" seed="3525" stitchTiles="stitch" type="fractalNoise" />
            <feColorMatrix in="noise" result="alphaNoise" type="luminanceToAlpha" />
            <feComponentTransfer in="alphaNoise" result="coloredNoise1">
              <feFuncA tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " type="discrete" />
            </feComponentTransfer>
            <feComposite in="coloredNoise1" in2="shape" operator="in" result="noise1Clipped" />
            <feFlood floodColor="rgba(255, 255, 255, 0.1)" result="color1Flood" />
            <feComposite in="color1Flood" in2="noise1Clipped" operator="in" result="color1" />
            <feMerge result="effect1_noise_11_34">
              <feMergeNode in="shape" />
              <feMergeNode in="color1" />
            </feMerge>
          </filter>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint0_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint1_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint2_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint3_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint4_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint5_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint6_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint7_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint8_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint9_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint10_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint11_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint12_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint13_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint14_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint15_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint16_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint17_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint18_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint19_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint20_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint21_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint22_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint23_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint24_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint25_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint26_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint27_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint28_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint29_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint30_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint31_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint32_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint33_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint34_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint35_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint36_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint37_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint38_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint39_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint40_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint41_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint42_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint43_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint44_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint45_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint46_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint47_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint48_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint49_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint50_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint51_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint52_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint53_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint54_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint55_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint56_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint57_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint58_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint59_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint60_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint61_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint62_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint63_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint64_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint65_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint66_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint67_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint68_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint69_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint70_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint71_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint72_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint73_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint74_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint75_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint76_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint77_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint78_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint79_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint80_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint81_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint82_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint83_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint84_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint85_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint86_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint87_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint88_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint89_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint90_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint91_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint92_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint93_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint94_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint95_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint96_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint97_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint98_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint99_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint100_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint101_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint102_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint103_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint104_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint105_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint106_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint107_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint108_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint109_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint110_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint111_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint112_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint113_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint114_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint115_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint116_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint117_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint118_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint119_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint120_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint121_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint122_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint123_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint124_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint125_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint126_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint127_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint128_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint129_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint130_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint131_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint132_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint133_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.7263 -7.26409) rotate(89.9351) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint134_radial_11_34" r="1">
            <stop stopColor="white" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(500.658 -157.202 644.796 335.6 519.778 233.302)" gradientUnits="userSpaceOnUse" id="paint135_radial_11_34" r="1">
            <stop stopColor="#4443BA" />
            <stop offset="0.390814" stopColor="#101056" />
            <stop offset="0.781628" stopColor="#252578" />
            <stop offset="1" stopColor="#4443BA" />
          </radialGradient>
          <clipPath id="clip0_11_34">
            <rect fill="white" height="420" rx="32" width="1040" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}


function EyebrowPill({ label }: { label: string }) {
  return (
    <div className="bg-gradient-to-r flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[26.911px] shrink-0 from-[rgba(255,255,255,0.6)] via-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.6)] overflow-hidden">
      <span
        aria-hidden
        className="absolute bg-gradient-to-r bottom-[1.45px] from-[rgba(255,255,255,0)] to-[rgba(255,255,255,0)] top-[-0.22px] via-[rgba(255,255,255,0.24)] w-[271.118px]"
        style={{ left: "calc(50% + 0.79px)", transform: "translateX(-50%)" }}
      />
      <span
        className="bg-clip-text bg-gradient-to-r from-white to-[rgba(255,255,255,0.9)] font-medium relative shrink-0 text-[16px] text-transparent text-center whitespace-nowrap"
        style={{ fontFamily: "Inter, sans-serif", letterSpacing: "0.5px" }}
      >
        {label}
      </span>
    </div>
  );
}

function HeadlineBlock({
  eyebrowLabel,
  headlineLines,
  subhead,
}: {
  eyebrowLabel: string;
  headlineLines: [string, string];
  subhead: string;
}) {
  return (
    <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <EyebrowPill label={eyebrowLabel} />
      <h1
        className="bg-clip-text font-bold text-[42px] text-transparent w-full"
        style={{
          fontFamily: "var(--font-display), Mulish, sans-serif",
          lineHeight: 1.12,
          letterSpacing: "-0.4px",
          backgroundImage:
            "linear-gradient(95.5deg, #ffffff 0.85%, rgba(255,255,255,0.8) 100%)",
        }}
      >
        <span className="block">{headlineLines[0]}</span>
        <span className="block">{headlineLines[1]}</span>
      </h1>
      <p
        className="bg-clip-text font-medium text-[16px] text-transparent w-full"
        style={{
          fontFamily: "Inter, sans-serif",
          lineHeight: "26px",
          backgroundImage:
            "linear-gradient(100.34deg, #ffffff 0.85%, rgba(255,255,255,0.8) 100%)",
        }}
      >
        {subhead}
      </p>
    </div>
  );
}

function CtaPair() {
  // Solid white "Start Free Trial" + frosted-glass-outline "Book Demo".
  // Buttons share the 506 px CTA row 50/50 with a 24 px gap.
  return (
    <div className="flex gap-[24px] items-stretch relative shrink-0 w-[506px]">
      <a
        href="#"
        className="bg-white flex h-[52px] flex-1 basis-0 items-center justify-center rounded-[12px] text-[#310766] text-[16px] font-semibold transition hover:bg-white/95"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        Start Free Trial
      </a>
      <a
        href="#book-demo"
        className="relative flex h-[52px] flex-1 basis-0 items-center justify-center rounded-[12px] text-white text-[16px] font-semibold transition hover:bg-white/15"
        style={{
          fontFamily: "Inter, sans-serif",
          background:
            "linear-gradient(to right, rgba(255,255,255,0.2), rgba(255,255,255,0.08))",
        }}
      >
        <span aria-hidden className="absolute inset-0 rounded-[12px] border border-white pointer-events-none" />
        <span className="relative z-[1]">Book Demo</span>
      </a>
    </div>
  );
}

function TextColumn({
  eyebrowLabel,
  headlineLines,
  subhead,
}: {
  eyebrowLabel: string;
  headlineLines: [string, string];
  subhead: string;
}) {
  // Left column: eyebrow + headline + subhead + CTAs, all stacked with
  // generous gaps so the card feels spacious and the content is wrapped
  // cleanly inside the 32 px inset content box.
  return (
    <div className="flex flex-col gap-[28px] h-full items-start justify-center relative shrink-0 w-[591px]">
      <HeadlineBlock
        eyebrowLabel={eyebrowLabel}
        headlineLines={headlineLines}
        subhead={subhead}
      />
      <CtaPair />
    </div>
  );
}

function ImagePanel({ image }: { image?: { src: string; alt: string } }) {
  // Narrow inset image card (324 × 356). The illustration is positioned
  // so the doctor / patient hero crops cleanly within the rounded panel
  // and never spills outside it.
  const hasCustom = !!image && !!image.src;
  return (
    <div className="bg-[#060520] h-full overflow-hidden relative rounded-[28px] shrink-0 w-[324px]">
      <div
        className="absolute"
        style={{
          height: "525.765px",
          width: "350.51px",
          left: "50%",
          top: "-44.98px",
          transform: "translateX(-50%)",
        }}
      >
        {hasCustom ? (
          <Image
            alt={image!.alt}
            src={image!.src}
            fill
            className="object-cover pointer-events-none"
            sizes="(max-width: 768px) 100vw, 350px"
            priority
          />
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            alt=""
            aria-hidden
            className="absolute inset-0 max-w-none object-cover pointer-events-none h-full w-full"
            src={(defaultHero as unknown as { src: string }).src}
          />
        )}
      </div>
    </div>
  );
}

function ContentLayer({
  eyebrowLabel,
  headlineLines,
  subhead,
  mainImage,
}: {
  eyebrowLabel: string;
  headlineLines: [string, string];
  subhead: string;
  mainImage?: { src: string; alt: string };
}) {
  // 976 × 356 inner content box, inset 32 px from every edge of the
  // 1040 × 420 outer card. THIS is the wrapper the user called out as
  // missing — everything (eyebrow / headline / subhead / CTAs / image
  // panel) lives INSIDE it, so nothing bleeds past the card boundary.
  return (
    <div className="absolute flex h-[356px] items-center justify-between left-[32px] top-[32px] w-[976px]">
      <TextColumn
        eyebrowLabel={eyebrowLabel}
        headlineLines={headlineLines}
        subhead={subhead}
      />
      <ImagePanel image={mainImage} />
    </div>
  );
}

export default function SolutionsHeroFrame({
  eyebrowLabel = "For Independent Doctors & Clinics",
  headlineLines = ["Spend More Time with Patients,", "Less on Paperwork"],
  subhead = "TatvaPractice streamlines your entire clinic — from faster notes to automated follow-ups — so you can grow your practice, not your workload.",
  mainImage,
}: SolutionsHeroFrameContent = {}) {
  return (
    <div className="relative rounded-[32px] size-full">
      <DivRelative />
      <ContentLayer
        eyebrowLabel={eyebrowLabel}
        headlineLines={headlineLines}
        subhead={subhead}
        mainImage={mainImage}
      />
    </div>
  );
}
