import svgPaths from "../features/ai/tabs/voice/svg-vms9olr1ti";

type Variant = "tl" | "tr" | "bl" | "br";

// Reuses the actual decorative SVG vector cluster from the Built-In AI
// section's Background Vectors, rendered as a corner overlay.
export default function CornerVector({ variant, size = 240 }: { variant: Variant; size?: number }) {
  const rot: Record<Variant, number> = { tl: -90, tr: 0, br: 90, bl: 180 };
  // Pull each cluster halfway off the edge so only ~50% is visible inside
  // the card; the rest is clipped by overflow-hidden on the parent.
  const halfNeg = `-${Math.round(size / 2)}px`;
  const offset: Record<Variant, React.CSSProperties> = {
    tl: { top: halfNeg, left: halfNeg },
    tr: { top: halfNeg, right: halfNeg },
    br: { bottom: halfNeg, right: halfNeg },
    bl: { bottom: halfNeg, left: halfNeg },
  };
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute"
      style={{ width: size, height: size, transform: `rotate(${rot[variant]}deg)`, transformOrigin: "center", opacity: 0.55, ...offset[variant] }}
    >
      <div style={{ width: "100%", height: "100%" }}>
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 337.989 335.102">
              <g id="Vector" opacity="0.5">
                <path d={svgPaths.p1e06b500} fill="url(#paint0_radial_1_193)" />
                <path d={svgPaths.pdf87000} fill="url(#paint1_radial_1_193)" />
                <path d={svgPaths.p3b4c89c0} fill="url(#paint2_radial_1_193)" />
                <path d={svgPaths.p17f78d00} fill="url(#paint3_radial_1_193)" />
                <path d={svgPaths.p2fd79400} fill="url(#paint4_radial_1_193)" />
                <path d={svgPaths.p3c6f6a00} fill="url(#paint5_radial_1_193)" />
                <path d={svgPaths.p398329f0} fill="url(#paint6_radial_1_193)" />
                <path d={svgPaths.p25660900} fill="url(#paint7_radial_1_193)" />
                <path d={svgPaths.p5930700} fill="url(#paint8_radial_1_193)" />
                <path d={svgPaths.p1ddada80} fill="url(#paint9_radial_1_193)" />
                <path d={svgPaths.p27d1fe80} fill="url(#paint10_radial_1_193)" />
                <path d={svgPaths.p2e130a80} fill="url(#paint11_radial_1_193)" />
                <path d={svgPaths.p2a3d1100} fill="url(#paint12_radial_1_193)" />
                <path d={svgPaths.p10783c00} fill="url(#paint13_radial_1_193)" />
                <path d={svgPaths.p1ed02200} fill="url(#paint14_radial_1_193)" />
                <path d={svgPaths.p372e8100} fill="url(#paint15_radial_1_193)" />
                <path d={svgPaths.pf81afea} fill="url(#paint16_radial_1_193)" />
                <path d={svgPaths.pb628180} fill="url(#paint17_radial_1_193)" />
                <path d={svgPaths.p35bf4600} fill="url(#paint18_radial_1_193)" />
                <path d={svgPaths.p34c04500} fill="url(#paint19_radial_1_193)" />
                <path d={svgPaths.p1d091600} fill="url(#paint20_radial_1_193)" />
                <path d={svgPaths.p30660f00} fill="url(#paint21_radial_1_193)" />
                <path d={svgPaths.p14a2e800} fill="url(#paint22_radial_1_193)" />
                <path d={svgPaths.p36f98c00} fill="url(#paint23_radial_1_193)" />
                <path d={svgPaths.p37f7b080} fill="url(#paint24_radial_1_193)" />
                <path d={svgPaths.p3e041000} fill="url(#paint25_radial_1_193)" />
                <path d={svgPaths.p162f8800} fill="url(#paint26_radial_1_193)" />
                <path d={svgPaths.pfd66f80} fill="url(#paint27_radial_1_193)" />
                <path d={svgPaths.p11301800} fill="url(#paint28_radial_1_193)" />
                <path d={svgPaths.p1ead4600} fill="url(#paint29_radial_1_193)" />
                <path d={svgPaths.p133d4380} fill="url(#paint30_radial_1_193)" />
                <path d={svgPaths.p2b094080} fill="url(#paint31_radial_1_193)" />
                <path d={svgPaths.pd79ab00} fill="url(#paint32_radial_1_193)" />
                <path d={svgPaths.p20e1f600} fill="url(#paint33_radial_1_193)" />
                <path d={svgPaths.p952e0d0} fill="url(#paint34_radial_1_193)" />
                <path d={svgPaths.p7bd3c80} fill="url(#paint35_radial_1_193)" />
                <path d={svgPaths.p3ec0bb80} fill="url(#paint36_radial_1_193)" />
                <path d={svgPaths.p3ca7b070} fill="url(#paint37_radial_1_193)" />
                <path d={svgPaths.p20f32f00} fill="url(#paint38_radial_1_193)" />
                <path d={svgPaths.p838a3a0} fill="url(#paint39_radial_1_193)" />
                <path d={svgPaths.p1a74db00} fill="url(#paint40_radial_1_193)" />
                <path d={svgPaths.p4f35580} fill="url(#paint41_radial_1_193)" />
                <path d={svgPaths.p3631bb00} fill="url(#paint42_radial_1_193)" />
                <path d={svgPaths.p8f8500} fill="url(#paint43_radial_1_193)" />
                <path d={svgPaths.p12e9d900} fill="url(#paint44_radial_1_193)" />
                <path d={svgPaths.p31874300} fill="url(#paint45_radial_1_193)" />
                <path d={svgPaths.p32c2c200} fill="url(#paint46_radial_1_193)" />
                <path d={svgPaths.pd985180} fill="url(#paint47_radial_1_193)" />
                <path d={svgPaths.p3da77700} fill="url(#paint48_radial_1_193)" />
                <path d={svgPaths.p3b26a200} fill="url(#paint49_radial_1_193)" />
                <path d={svgPaths.p310eb180} fill="url(#paint50_radial_1_193)" />
                <path d={svgPaths.p3586d300} fill="url(#paint51_radial_1_193)" />
                <path d={svgPaths.p19cb7080} fill="url(#paint52_radial_1_193)" />
                <path d={svgPaths.p27d28080} fill="url(#paint53_radial_1_193)" />
                <path d={svgPaths.p1b50e000} fill="url(#paint54_radial_1_193)" />
                <path d={svgPaths.p3bf4900} fill="url(#paint55_radial_1_193)" />
                <path d={svgPaths.p3c077b80} fill="url(#paint56_radial_1_193)" />
                <path d={svgPaths.p1468aa80} fill="url(#paint57_radial_1_193)" />
                <path d={svgPaths.p1ceb9680} fill="url(#paint58_radial_1_193)" />
                <path d={svgPaths.p10718bf0} fill="url(#paint59_radial_1_193)" />
                <path d={svgPaths.p27645000} fill="url(#paint60_radial_1_193)" />
                <path d={svgPaths.p1b240d00} fill="url(#paint61_radial_1_193)" />
                <path d={svgPaths.p3079200} fill="url(#paint62_radial_1_193)" />
                <path d={svgPaths.p15a5f800} fill="url(#paint63_radial_1_193)" />
                <path d={svgPaths.p275e800} fill="url(#paint64_radial_1_193)" />
                <path d={svgPaths.p18e77900} fill="url(#paint65_radial_1_193)" />
                <path d={svgPaths.p1da20a00} fill="url(#paint66_radial_1_193)" />
                <path d={svgPaths.p3d94e870} fill="url(#paint67_radial_1_193)" />
                <path d={svgPaths.p6ea6780} fill="url(#paint68_radial_1_193)" />
                <path d={svgPaths.p1cafb100} fill="url(#paint69_radial_1_193)" />
                <path d={svgPaths.p3aa5bb00} fill="url(#paint70_radial_1_193)" />
                <path d={svgPaths.p3145fc10} fill="url(#paint71_radial_1_193)" />
                <path d={svgPaths.p27dad300} fill="url(#paint72_radial_1_193)" />
                <path d={svgPaths.peb28800} fill="url(#paint73_radial_1_193)" />
                <path d={svgPaths.p3ccf2a80} fill="url(#paint74_radial_1_193)" />
                <path d={svgPaths.pac1d700} fill="url(#paint75_radial_1_193)" />
                <path d={svgPaths.p26d4db00} fill="url(#paint76_radial_1_193)" />
                <path d={svgPaths.p343eeb00} fill="url(#paint77_radial_1_193)" />
                <path d={svgPaths.p19dd75c0} fill="url(#paint78_radial_1_193)" />
                <path d={svgPaths.p8ccb280} fill="url(#paint79_radial_1_193)" />
                <path d={svgPaths.p91d2b00} fill="url(#paint80_radial_1_193)" />
                <path d={svgPaths.peb31680} fill="url(#paint81_radial_1_193)" />
                <path d={svgPaths.p2622e990} fill="url(#paint82_radial_1_193)" />
                <path d={svgPaths.p2803100} fill="url(#paint83_radial_1_193)" />
                <path d={svgPaths.p33a2d000} fill="url(#paint84_radial_1_193)" />
                <path d={svgPaths.p2411400} fill="url(#paint85_radial_1_193)" />
                <path d={svgPaths.p928d700} fill="url(#paint86_radial_1_193)" />
                <path d={svgPaths.p3c87b200} fill="url(#paint87_radial_1_193)" />
                <path d={svgPaths.p11fa0300} fill="url(#paint88_radial_1_193)" />
                <path d={svgPaths.p36ba2300} fill="url(#paint89_radial_1_193)" />
                <path d={svgPaths.p3aec6900} fill="url(#paint90_radial_1_193)" />
                <path d={svgPaths.p2baab980} fill="url(#paint91_radial_1_193)" />
                <path d={svgPaths.p2b317490} fill="url(#paint92_radial_1_193)" />
                <path d={svgPaths.p1e67cb80} fill="url(#paint93_radial_1_193)" />
                <path d={svgPaths.p29df6800} fill="url(#paint94_radial_1_193)" />
                <path d={svgPaths.p30cae100} fill="url(#paint95_radial_1_193)" />
                <path d={svgPaths.p3046be00} fill="url(#paint96_radial_1_193)" />
                <path d={svgPaths.p1a200b00} fill="url(#paint97_radial_1_193)" />
                <path d={svgPaths.p2c45bd00} fill="url(#paint98_radial_1_193)" />
                <path d={svgPaths.pa4953f0} fill="url(#paint99_radial_1_193)" />
                <path d={svgPaths.p2e501d00} fill="url(#paint100_radial_1_193)" />
                <path d={svgPaths.p36e43480} fill="url(#paint101_radial_1_193)" />
                <path d={svgPaths.p26716700} fill="url(#paint102_radial_1_193)" />
                <path d={svgPaths.p22b51f00} fill="url(#paint103_radial_1_193)" />
                <path d={svgPaths.p21278100} fill="url(#paint104_radial_1_193)" />
                <path d={svgPaths.pd0a100} fill="url(#paint105_radial_1_193)" />
                <path d={svgPaths.p197d7280} fill="url(#paint106_radial_1_193)" />
                <path d={svgPaths.p3c9aaa00} fill="url(#paint107_radial_1_193)" />
                <path d={svgPaths.pc2ed380} fill="url(#paint108_radial_1_193)" />
                <path d={svgPaths.p21b5c00} fill="url(#paint109_radial_1_193)" />
                <path d={svgPaths.p2a4b0900} fill="url(#paint110_radial_1_193)" />
                <path d={svgPaths.p24b61680} fill="url(#paint111_radial_1_193)" />
                <path d={svgPaths.p6b9680} fill="url(#paint112_radial_1_193)" />
                <path d={svgPaths.p5d03e00} fill="url(#paint113_radial_1_193)" />
                <path d={svgPaths.p1e220200} fill="url(#paint114_radial_1_193)" />
                <path d={svgPaths.p29147e00} fill="url(#paint115_radial_1_193)" />
                <path d={svgPaths.p1be5e500} fill="url(#paint116_radial_1_193)" />
                <path d={svgPaths.p37e85780} fill="url(#paint117_radial_1_193)" />
                <path d={svgPaths.p5d1fe00} fill="url(#paint118_radial_1_193)" />
                <path d={svgPaths.p5451b00} fill="url(#paint119_radial_1_193)" />
                <path d={svgPaths.p2aa5a100} fill="url(#paint120_radial_1_193)" />
                <path d={svgPaths.p3aa71800} fill="url(#paint121_radial_1_193)" />
                <path d={svgPaths.p4d4a180} fill="url(#paint122_radial_1_193)" />
                <path d={svgPaths.p37ab2b80} fill="url(#paint123_radial_1_193)" />
                <path d={svgPaths.p21dc2600} fill="url(#paint124_radial_1_193)" />
                <path d={svgPaths.p246a3e00} fill="url(#paint125_radial_1_193)" />
                <path d={svgPaths.p3ee2ec00} fill="url(#paint126_radial_1_193)" />
                <path d={svgPaths.p26fae800} fill="url(#paint127_radial_1_193)" />
                <path d={svgPaths.p1612600} fill="url(#paint128_radial_1_193)" />
                <path d={svgPaths.p3f1c6c80} fill="url(#paint129_radial_1_193)" />
                <path d={svgPaths.p2f4fb700} fill="url(#paint130_radial_1_193)" />
                <path d={svgPaths.p23b30300} fill="url(#paint131_radial_1_193)" />
                <path d={svgPaths.p226f4c00} fill="url(#paint132_radial_1_193)" />
                <path d={svgPaths.pf132100} fill="url(#paint133_radial_1_193)" />
                <path d={svgPaths.p32792760} fill="url(#paint134_radial_1_193)" />
              </g>
              <defs>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint3_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint5_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint6_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint7_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint8_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint9_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint10_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint11_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint12_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint13_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint14_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint15_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint16_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint17_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint18_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint19_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint20_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint21_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint22_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint23_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint24_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint25_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint26_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint27_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint28_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint29_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint30_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint31_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint32_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint33_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint34_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint35_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint36_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint37_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint38_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint39_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint40_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint41_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint42_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint43_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint44_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint45_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint46_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint47_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint48_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint49_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint50_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint51_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint52_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint53_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint54_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint55_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint56_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint57_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint58_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint59_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint60_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint61_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint62_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint63_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint64_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint65_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint66_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint67_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint68_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint69_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint70_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint71_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint72_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint73_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint74_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint75_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint76_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint77_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint78_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint79_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint80_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint81_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint82_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint83_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint84_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint85_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint86_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint87_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint88_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint89_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint90_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint91_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint92_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint93_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint94_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint95_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint96_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint97_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint98_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint99_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint100_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint101_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint102_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint103_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint104_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint105_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint106_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint107_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint108_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint109_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint110_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint111_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint112_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint113_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint114_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint115_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint116_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint117_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint118_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint119_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint120_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint121_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint122_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint123_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint124_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint125_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint126_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint127_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint128_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint129_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint130_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint131_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint132_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint133_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient cx="0" cy="0" gradientTransform="translate(220.093 172.078) rotate(179.935) scale(140.315 141.524)" gradientUnits="userSpaceOnUse" id="paint134_radial_1_193" r="1">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
      </div>
    </div>
  );
}
