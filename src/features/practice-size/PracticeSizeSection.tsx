import TpBulkIcon from "@/components/icons/TpBulkIcon";
import type { TpBulkIconName } from "@/components/icons/tp-bulk-registry";
import svgPaths from "./svg-cazyfuvy64";
import SharedCtaPair from "@/components/CardCtaPair";

function FeatureIcon({ name }: { name: TpBulkIconName }) {
  return (
    <div className="relative shrink-0 size-[26px]" aria-hidden>
      <TpBulkIcon name={name} size={26} color="#454551" />
    </div>
  );
}

function TitleContainer() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Title Container">
      <div className="flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#454551] text-[28px] sm:text-[42px] text-center tracking-[-0.84px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">
          {`Built for `}
          <br aria-hidden="true" />
          Every Practice Size
        </p>
      </div>
    </div>
  );
}

function GradientOption() {
  return (
    <div
      className="absolute h-[112px] inset-x-0 rounded-[12px] top-0"
      data-name="gradient option"
      style={{
        background: 'radial-gradient(99.09% 59.99% at 50% 55.44%, #46286C 0%, #25113E 39.08%, #372153 78.16%, #6C4F90 100%)'
      }}
    />
  );
}

function Container3() {
  return (
    <div className="absolute h-[112px] left-0 right-0 top-[0.1px]" data-name="Container">
      <GradientOption />
      <div className="-translate-y-1/2 absolute bg-clip-text bg-gradient-to-r flex flex-col font-['Mulish:Bold',sans-serif] font-bold from-white justify-center leading-[0] left-[16px] sm:left-[19.91px] text-[22px] sm:text-[28px] text-[transparent] to-[#e5d6fd] top-1/2 max-w-[calc(100%-32px)]">
        <p className="leading-[normal]">{`For Clinics & Solo Practices`}</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[112px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <Container3 />
      <div className="absolute bottom-[-34px] h-[136px] right-[-20px] w-[112px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 134.939 162.543">
          <g id="Vector">
            <path d={svgPaths.p3aeb9340} fill="var(--fill-0, white)" fillOpacity="0.2" />
            <path d={svgPaths.p18487670} fill="var(--fill-0, white)" fillOpacity="0.2" />
            <path d={svgPaths.p2783da00} fill="var(--fill-0, white)" fillOpacity="0.2" />
            <path d={svgPaths.p1b2a2872} fill="var(--fill-0, white)" fillOpacity="0.2" />
            <path d={svgPaths.p396c3680} fill="var(--fill-0, white)" fillOpacity="0.2" />
            <path d={svgPaths.pc2cc240} fill="var(--fill-0, white)" fillOpacity="0.2" />
            <path d={svgPaths.p32948170} fill="var(--fill-0, white)" fillOpacity="0.2" />
            <path d={svgPaths.p23e88100} fill="var(--fill-0, white)" fillOpacity="0.2" />
            <path d={svgPaths.p26919600} fill="var(--fill-0, white)" fillOpacity="0.2" />
            <path d={svgPaths.p3b614f70} fill="var(--fill-0, white)" fillOpacity="0.2" />
            <path d={svgPaths.pda4e980} fill="var(--fill-0, white)" fillOpacity="0.2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[11.685px] items-center relative shrink-0 w-full" data-name="Container">
      <FeatureIcon name="money" />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#454551] text-[14px] sm:text-[16px]">
        <p className="truncate leading-[normal]">Affordable pricing</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[11.685px] items-center relative shrink-0 w-full" data-name="Container">
      <FeatureIcon name="flash" />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#454551] text-[14px] sm:text-[16px]">
        <p className="truncate leading-[24px]">Setup and go live instantly</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[11.685px] items-center relative shrink-0 w-full" data-name="Container">
      <FeatureIcon name="magicpen" />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#454551] text-[14px] sm:text-[16px]">
        <p className="truncate leading-[24px]">{`Personalised for workflows & more`}</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] sm:gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container4() {
  return (
    <div className="opacity-80 relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[20px] sm:gap-[25px] items-start px-[8px] relative w-full h-fit">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#454551] text-[14px] sm:text-[16px] w-full">
          <p className="leading-[20px] sm:leading-[22px]">Start strong with a lightweight EMR built for speed, simplicity, and value.</p>
        </div>
        <Container5 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="backdrop-blur-[20px] backdrop-saturate-150 bg-[rgba(255,255,255,0.62)] flex-[1_0_0] min-w-px relative rounded-[24px]" data-name="Container">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] w-full">
        <div className="content-stretch flex flex-col gap-[18px] items-center p-[18px] relative w-full">
          <Container2 />
          <Container4 />
          <CardCtaPair href="/solutions/clinics" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(226,226,234,0.5)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function GradientOption1() {
  return (
    <div
      className="absolute h-[112px] inset-x-0 rounded-[12px] top-0"
      data-name="gradient option"
      style={{
        background: 'radial-gradient(99.09% 59.99% at 50% 55.44%, #46286C 0%, #25113E 39.08%, #372153 78.16%, #6C4F90 100%)'
      }}
    />
  );
}

function Container11() {
  return (
    <div className="absolute h-[112px] left-0 right-0 top-[0.1px]" data-name="Container">
      <GradientOption1 />
      <div className="-translate-y-1/2 absolute bg-clip-text bg-gradient-to-r flex flex-col font-['Mulish:Bold',sans-serif] font-bold from-white justify-center leading-[0] left-[16px] sm:left-[19.91px] text-[22px] sm:text-[28px] text-[transparent] to-[#e5d6fd] top-1/2 max-w-[calc(100%-32px)]">
        <p className="leading-[normal]">{`For Hospitals & Health Systems`}</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[112px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <Container11 />
      <div className="absolute bottom-[-34px] h-[136px] right-[-20px] w-[112px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 134.939 162.543">
          <g id="Vector">
            <path d={svgPaths.p3aeb9340} fill="var(--fill-0, white)" fillOpacity="0.2" />
            <path d={svgPaths.p18487670} fill="var(--fill-0, white)" fillOpacity="0.2" />
            <path d={svgPaths.p2783da00} fill="var(--fill-0, white)" fillOpacity="0.2" />
            <path d={svgPaths.p1b2a2872} fill="var(--fill-0, white)" fillOpacity="0.2" />
            <path d={svgPaths.p396c3680} fill="var(--fill-0, white)" fillOpacity="0.2" />
            <path d={svgPaths.pc2cc240} fill="var(--fill-0, white)" fillOpacity="0.2" />
            <path d={svgPaths.p32948170} fill="var(--fill-0, white)" fillOpacity="0.2" />
            <path d={svgPaths.p23e88100} fill="var(--fill-0, white)" fillOpacity="0.2" />
            <path d={svgPaths.p26919600} fill="var(--fill-0, white)" fillOpacity="0.2" />
            <path d={svgPaths.p3b614f70} fill="var(--fill-0, white)" fillOpacity="0.2" />
            <path d={svgPaths.pda4e980} fill="var(--fill-0, white)" fillOpacity="0.2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[11.685px] items-center relative shrink-0 w-full" data-name="Container">
      <FeatureIcon name="clipboardText" />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#454551] text-[14px] sm:text-[16px]">
        <p className="truncate leading-[normal]">ABDM + HL7 support</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[11.685px] items-center relative shrink-0 w-full" data-name="Container">
      <FeatureIcon name="chart" />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#454551] text-[14px] sm:text-[16px]">
        <p className="truncate leading-[24px]">Built-in analytics suite</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[11.685px] items-center relative shrink-0 w-full" data-name="Container">
      <FeatureIcon name="hospital" />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#454551] text-[14px] sm:text-[16px]">
        <p className="truncate leading-[24px]">{`Multi-specialty module support & more`}</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] sm:gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container12() {
  return (
    <div className="opacity-80 relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[20px] sm:gap-[25px] items-start px-[8px] relative w-full h-fit">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#454551] text-[14px] sm:text-[16px] w-full">
          <p className="leading-[20px] sm:leading-[22px]">Enterprise-grade EMR with compliance, control, and dedicated support.</p>
        </div>
        <Container13 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="backdrop-blur-[20px] backdrop-saturate-150 bg-[rgba(255,255,255,0.62)] flex-[1_0_0] min-w-px relative rounded-[24px]" data-name="Container">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] w-full">
        <div className="content-stretch flex flex-col gap-[18px] items-center p-[18px] relative w-full">
          <Container10 />
          <Container12 />
          <CardCtaPair href="/solutions/hospitals" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(226,226,234,0.5)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

// CardCtaPair is the shared component in src/components, re-exported
// locally so the two practice-size cards can compose it cleanly.
function CardCtaPair({ href }: { href: string }) {
  return <SharedCtaPair learnMoreHref={href} variant="light" />;
}

function Container() {
  // Mobile (< sm): stack the two "Practice Size" cards vertically so
  // the "For Clinics & Solo Practices" + "For Hospitals & Health
  // Systems" cards don't squeeze side-by-side at 375 px.
  // Desktop (≥ sm): keep the original 44 px horizontal row.
  return (
    <div
      className="flex flex-col items-stretch gap-6 sm:flex-row sm:items-center sm:gap-[44px]"
      data-name="Container"
    >
      <Container1 />
      <Container9 />
    </div>
  );
}

export default function PracticeSizeSection() {
  return (
    <div className="content-stretch flex flex-col gap-[clamp(28px,3vw,44px)] items-center relative w-full" data-name="An EMR that  streamlines all your needs">
      <TitleContainer />
      <Container />
    </div>
  );
}