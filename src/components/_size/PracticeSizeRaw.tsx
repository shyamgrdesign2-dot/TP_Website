import svgPaths from "./svg-cazyfuvy64";

function TitleContainer() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Title Container">
      <div className="flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#454551] text-[42px] text-center tracking-[-0.84px] w-full">
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
      <div className="-translate-y-1/2 absolute bg-clip-text bg-gradient-to-r flex flex-col font-['Mulish:Bold',sans-serif] font-bold from-white justify-center leading-[0] left-[19.91px] text-[28px] text-[transparent] to-[#e5d6fd] top-1/2 w-[221.771px]">
        <p className="leading-[normal]">{`For Clinics & Solo Practices`}</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[112px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <Container3 />
      <div className="absolute h-[162.543px] right-[-30px] top-[30px] w-[134.939px]" data-name="Vector">
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

function VuesaxBulkMoney() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bulk/money">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="money">
          <path d="M26 0H0V26H26V0Z" fill="var(--fill-0, #454551)" id="Vector" opacity="0" />
          <path d={svgPaths.p22c7af00} fill="var(--fill-0, #454551)" id="Vector_2" opacity="0.4" />
          <g id="Group">
            <path d={svgPaths.p183ed300} fill="var(--fill-0, #454551)" id="Vector_3" />
          </g>
          <g id="Group_2">
            <path d={svgPaths.p31c49780} fill="var(--fill-0, #454551)" id="Vector_4" />
          </g>
          <g id="Group_3">
            <path d={svgPaths.p2b965040} fill="var(--fill-0, #454551)" id="Vector_5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[11.685px] items-center relative shrink-0 w-[173.685px]" data-name="Container">
      <div className="relative shrink-0 size-[26px]" data-name="money">
        <VuesaxBulkMoney />
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#454551] text-[16px]">
        <p className="leading-[normal]">Affordable pricing</p>
      </div>
    </div>
  );
}

function VuesaxBulkFlash() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bulk/flash">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="flash">
          <g id="Vector" opacity="0" />
          <path d={svgPaths.p1d916540} fill="var(--fill-0, #454551)" id="Vector_2" opacity="0.4" />
          <g id="Group">
            <path d={svgPaths.p310d5e00} fill="var(--fill-0, #454551)" id="Vector_3" />
          </g>
          <g id="Group_2">
            <path d={svgPaths.p1882a100} fill="var(--fill-0, #454551)" id="Vector_4" />
          </g>
          <g id="Group_3">
            <path d={svgPaths.p30c48300} fill="var(--fill-0, #454551)" id="Vector_5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[11.685px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 size-[26px]" data-name="flash">
        <VuesaxBulkFlash />
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#454551] text-[16px]">
        <p className="leading-[24px]">Setup and go live instantly</p>
      </div>
    </div>
  );
}

function VuesaxBulkMagicpen() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bulk/magicpen">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="magicpen">
          <path d={svgPaths.p2c431e00} fill="var(--fill-0, #454551)" id="Vector" />
          <path d={svgPaths.p1933eb00} fill="var(--fill-0, #454551)" id="Vector_2" opacity="0.4" />
          <path d={svgPaths.p3427a800} fill="var(--fill-0, #454551)" id="Vector_3" />
          <path d={svgPaths.p3ffe1500} fill="var(--fill-0, #454551)" id="Vector_4" />
          <path d={svgPaths.p16655f80} fill="var(--fill-0, #454551)" id="Vector_5" />
          <g id="Vector_6" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[11.685px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 size-[26px]" data-name="magicpen">
        <VuesaxBulkMagicpen />
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#454551] text-[16px]">
        <p className="leading-[24px]">{`Personalised for workflows & more`}</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[126px] items-start relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container4() {
  return (
    <div className="opacity-80 relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[25px] items-start px-[8px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#454551] text-[16px] w-full">
          <p className="leading-[22px]">Start strong with a lightweight EMR built for speed, simplicity, and value.</p>
        </div>
        <Container5 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="backdrop-blur-[20px] backdrop-saturate-150 bg-[rgba(255,255,255,0.62)] flex-[1_0_0] min-w-px relative rounded-[24px]" data-name="Container">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[18px] items-center p-[18px] relative size-full">
          <Container2 />
          <Container4 />
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4b4ad5] text-[16px] whitespace-nowrap">
            <p className="decoration-solid leading-[42px] underline">Learn more</p>
          </div>
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
      <div className="-translate-y-1/2 absolute bg-clip-text bg-gradient-to-r flex flex-col font-['Mulish:Bold',sans-serif] font-bold from-white justify-center leading-[0] left-[19.91px] text-[28px] text-[transparent] to-[#e5d6fd] top-1/2 w-[221.771px]">
        <p className="leading-[normal]">{`For Hospitals & Health Systems`}</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[112px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <Container11 />
      <div className="absolute h-[162.543px] right-[-30px] top-[30px] w-[134.939px]" data-name="Vector">
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

function VuesaxBulkClipboardText() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bulk/clipboard-text">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="clipboard-text">
          <path d={svgPaths.p29471300} fill="var(--fill-0, #454551)" id="Vector" opacity="0.4" />
          <path d={svgPaths.p14e3100} fill="var(--fill-0, #454551)" id="Vector_2" />
          <path d={svgPaths.p2a966500} fill="var(--fill-0, #454551)" id="Vector_3" />
          <path d={svgPaths.p48651c0} fill="var(--fill-0, #454551)" id="Vector_4" />
          <g id="Vector_5" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[11.685px] items-center relative shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[26px]" data-name="clipboard-text">
        <VuesaxBulkClipboardText />
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative text-[#454551] text-[16px]">
        <p className="leading-[normal] whitespace-nowrap">ABDM + HL7 support</p>
      </div>
    </div>
  );
}

function VuesaxBulkGraph() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bulk/graph">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="graph">
          <g id="graph_2">
            <path d={svgPaths.p164916b2} fill="var(--fill-0, #454551)" id="Vector" />
            <path d={svgPaths.pa217980} fill="var(--fill-0, #454551)" id="Vector_2" opacity="0.4" />
          </g>
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[11.685px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 size-[26px]" data-name="graph">
        <VuesaxBulkGraph />
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#454551] text-[16px]">
        <p className="leading-[24px]">Built-in analytics suite</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[11.685px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[26px]" data-name="Feature">
        <div className="absolute inset-[29.17%_12.5%_12.5%_12.5%]" data-name="Shape">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 15.1667">
            <path d={svgPaths.p271c4280} fill="var(--fill-0, #454551)" fillOpacity="0.4" id="Shape" />
          </svg>
        </div>
        <div className="absolute inset-[12.5%_29.17%_70.83%_29.17%]" data-name="Shape">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8333 4.33333">
            <path clipRule="evenodd" d={svgPaths.p2cffb280} fill="var(--fill-0, #454551)" fillRule="evenodd" id="Shape" />
          </svg>
        </div>
        <div className="absolute inset-[45.83%_37.5%_29.17%_37.5%]" data-name="Shape">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.5 6.5">
            <path clipRule="evenodd" d={svgPaths.pf04fc00} fill="var(--fill-0, #454551)" fillRule="evenodd" id="Shape" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#454551] text-[16px]">
        <p className="leading-[24px]">{`Multi-specialty module support & more`}</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[126px] items-start relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container12() {
  return (
    <div className="opacity-80 relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[25px] items-start px-[8px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#454551] text-[16px] w-[389.276px]">
          <p className="leading-[22px]">Enterprise-grade EMR with compliance, control, and dedicated support.</p>
        </div>
        <Container13 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="backdrop-blur-[20px] backdrop-saturate-150 bg-[rgba(255,255,255,0.62)] flex-[1_0_0] min-w-px relative rounded-[24px]" data-name="Container">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[18px] items-center p-[18px] relative size-full">
          <Container10 />
          <Container12 />
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4b4ad5] text-[16px] whitespace-nowrap">
            <p className="decoration-solid leading-[42px] underline">Learn more</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(226,226,234,0.5)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[44px] items-center relative size-full" data-name="Container">
      <Container1 />
      <Container9 />
    </div>
  );
}

export default function AnEmrThatStreamlinesAllYourNeeds() {
  return (
    <div className="content-stretch flex flex-col gap-[clamp(28px,3vw,44px)] items-center relative size-full" data-name="An EMR that  streamlines all your needs">
      <TitleContainer />
      <Container />
    </div>
  );
}