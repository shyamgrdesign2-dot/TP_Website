import svgPaths from "./svgPaths";

function CardTextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4.302px] items-start leading-[25.814px] not-italic relative shrink-0 text-[#64388d] w-[149.507px]" data-name="Card Text Container">
      <p className="font-['Poppins:Bold',sans-serif] min-w-full relative shrink-0 text-[21.803px] w-[min-content]">10 Lakh+</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[15.574px] w-[150.582px]">Patients Served</p>
    </div>
  );
}

function CardContent() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center left-[calc(50%+39.32px)] top-[calc(50%+0.2px)] w-[119.917px]" data-name="Card Content">
      <CardTextContainer />
    </div>
  );
}

function VuesaxBulkProfile2User() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bulk/profile-2user">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 123.032 123.032">
        <g id="profile-2user">
          <path d={svgPaths.pc2aec80} fill="var(--fill-0, #4B4AD5)" id="Vector" opacity="0.4" />
          <path d={svgPaths.p105f8500} fill="var(--fill-0, #4B4AD5)" id="Vector_2" />
          <path d={svgPaths.pd116000} fill="var(--fill-0, #4B4AD5)" id="Vector_3" opacity="0.4" />
          <path d={svgPaths.p30a6c900} fill="var(--fill-0, #4B4AD5)" id="Vector_4" />
          <g id="Vector_5" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Card() {
  return (
    <div className="flex-[1_0_0] min-h-[108.237px] min-w-px overflow-hidden relative rounded-[16px] lift-on-hover" style={{ backgroundImage: "linear-gradient(-61.0859deg, rgba(233, 204, 255, 0) 0%, rgba(242, 225, 255, 0.5) 130.11%)", backgroundColor: "rgba(255,255,255,0.55)", backdropFilter: "blur(20px) saturate(150%)", WebkitBackdropFilter: "blur(20px) saturate(150%)", border: "none" }} data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <CardContent />
        <div className="absolute left-[-28.81px] opacity-10 size-[123.032px] top-[17.13px]" data-name="profile-2user">
          <VuesaxBulkProfile2User />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#f2e2ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function CardTextContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[4.302px] items-start leading-[25.814px] not-italic relative shrink-0 text-[#64388d] w-[149.507px]" data-name="Card Text Container">
      <p className="font-['Poppins:Bold',sans-serif] relative shrink-0 text-[21.803px] w-[95.778px]">12 Lakh+</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[15.574px] w-[162.744px]">Digital Rx created</p>
    </div>
  );
}

function CardContent1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center left-[calc(50%+37.25px)] top-[calc(50%+0.2px)] w-[135.491px]" data-name="Card Content">
      <CardTextContainer1 />
    </div>
  );
}

function VuesaxBulkClipboardText() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bulk/clipboard-text">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 105.122 105.122">
        <g id="clipboard-text">
          <path d={svgPaths.p32de300} fill="var(--fill-0, #4B4AD5)" id="Vector" opacity="0.4" />
          <path d={svgPaths.p15c9b900} fill="var(--fill-0, #4B4AD5)" id="Vector_2" />
          <path d={svgPaths.p293a3100} fill="var(--fill-0, #4B4AD5)" id="Vector_3" />
          <path d={svgPaths.p2b475800} fill="var(--fill-0, #4B4AD5)" id="Vector_4" />
          <g id="Vector_5" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Card1() {
  return (
    <div className="flex-[1_0_0] min-h-[108.237px] min-w-px overflow-hidden relative rounded-[16px] lift-on-hover" style={{ backgroundImage: "linear-gradient(-61.0859deg, rgba(233, 204, 255, 0) 0%, rgba(242, 225, 255, 0.5) 130.11%)", backgroundColor: "rgba(255,255,255,0.55)", backdropFilter: "blur(20px) saturate(150%)", WebkitBackdropFilter: "blur(20px) saturate(150%)", border: "none" }} data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <CardContent1 />
        <div className="absolute left-[-27px] opacity-14 size-[105.122px] top-[22.58px]" data-name="clipboard-text">
          <VuesaxBulkClipboardText />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#f2e2ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function CardTextContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[4.302px] items-start leading-[25.814px] not-italic relative shrink-0 text-[#64388d] w-[149.507px]" data-name="Card Text Container">
      <p className="font-['Poppins:Bold',sans-serif] relative shrink-0 text-[21.803px] w-[87.991px]">10,000+</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[15.574px] w-[162.744px]">Doctors onboarded</p>
    </div>
  );
}

function CardContent2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center left-[calc(50%+35.3px)] top-[calc(50%+0.2px)] w-[156.515px]" data-name="Card Content">
      <CardTextContainer2 />
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute inset-[0_8.33%_4.04%_8.33%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74.6236 85.9306">
        <g id="Group">
          <path d={svgPaths.p32f32700} fill="var(--fill-0, #4B4AD5)" id="Vector" />
          <path d={svgPaths.p8d97b80} fill="var(--fill-0, #4B4AD5)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Card2() {
  return (
    <div className="flex-[1_0_0] min-h-[108.237px] min-w-px overflow-hidden relative rounded-[16px] lift-on-hover" style={{ backgroundImage: "linear-gradient(-61.0859deg, rgba(233, 204, 255, 0) 0%, rgba(242, 225, 255, 0.5) 130.11%)", backgroundColor: "rgba(255,255,255,0.55)", backdropFilter: "blur(20px) saturate(150%)", WebkitBackdropFilter: "blur(20px) saturate(150%)", border: "none" }} data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <CardContent2 />
        <div className="absolute left-[-24.92px] opacity-10 overflow-clip size-[89.548px] top-[24.14px]" data-name="Card Icon">
          <div className="absolute bg-[#f6f2ff] h-[22.387px] left-[44.77px] top-[55.97px] w-[26.118px]" />
          <Group36 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#f2e2ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function PartnersCards() {
  return (
    <div className="content-stretch flex gap-[18.688px] min-h-[105.901px] items-start relative shrink-0 w-full" data-name="Partners Cards">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function CardTextContainer3() {
  return (
    <div className="content-stretch flex flex-col gap-[4.302px] items-start leading-[25.814px] not-italic relative shrink-0 text-[#64388d] w-[149.507px]" data-name="Card Text Container">
      <p className="font-['Poppins:Bold',sans-serif] relative shrink-0 text-[21.803px] w-[44.385px]">10 +</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[15.574px] w-[162.744px]">Language support</p>
    </div>
  );
}

function CardContent3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center left-[calc(50%+37.77px)] top-[calc(50%+0.2px)] w-[143.277px]" data-name="Card Content">
      <CardTextContainer3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute left-[-30.37px] size-[123.032px] top-[21.21px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 123.032 123.032">
        <g clipPath="url(#clip0_1_4490)" id="Frame" opacity="0.1">
          <g id="Vector" />
          <path d={svgPaths.p3b92e100} fill="var(--fill-0, #4B4AD5)" id="Vector_2" stroke="var(--stroke-0, #F5F1FF)" strokeWidth="0.480592" />
          <path d="M15.379 61.5161H107.653" id="Vector_3" stroke="var(--stroke-0, #F5F1FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.68948" />
          <path d={svgPaths.p19f2b580} id="Vector_4" stroke="var(--stroke-0, #F6F2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.68948" />
          <path d={svgPaths.p266c1780} id="Vector_5" stroke="var(--stroke-0, #F5F1FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.68948" />
        </g>
        <defs>
          <clipPath id="clip0_1_4490">
            <rect fill="white" height="123.032" width="123.032" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Card3() {
  return (
    <div className="flex-[1_0_0] min-h-[108.237px] min-w-px overflow-hidden relative rounded-[16px] lift-on-hover" style={{ backgroundImage: "linear-gradient(-61.0859deg, rgba(233, 204, 255, 0) 0%, rgba(242, 225, 255, 0.5) 130.11%)", backgroundColor: "rgba(255,255,255,0.55)", backdropFilter: "blur(20px) saturate(150%)", WebkitBackdropFilter: "blur(20px) saturate(150%)", border: "none" }} data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <CardContent3 />
        <Frame />
      </div>
      <div aria-hidden="true" className="absolute border-[#f2e2ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function CardTextContainer4() {
  return (
    <div className="content-stretch flex flex-col gap-[4.302px] items-start leading-[25.814px] not-italic relative shrink-0 text-[#64388d] w-[149.507px]" data-name="Card Text Container">
      <p className="font-['Poppins:Bold',sans-serif] relative shrink-0 text-[21.803px] w-[87.991px]">25+</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[15.574px] w-[162.744px]">Specialities</p>
    </div>
  );
}

function CardContent4() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center left-[calc(50%+27.26px)] top-[24.92px] w-[98.892px]" data-name="Card Content">
      <CardTextContainer4 />
    </div>
  );
}

function Card4() {
  return (
    <div className="flex-[1_0_0] min-h-[108.237px] min-w-px overflow-hidden relative rounded-[16px] lift-on-hover" style={{ backgroundImage: "linear-gradient(-61.0859deg, rgba(233, 204, 255, 0) 0%, rgba(242, 225, 255, 0.5) 130.11%)", backgroundColor: "rgba(255,255,255,0.55)", backdropFilter: "blur(20px) saturate(150%)", WebkitBackdropFilter: "blur(20px) saturate(150%)", border: "none" }} data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <CardContent4 />
        <div className="absolute left-[-26.22px] opacity-10 overflow-clip size-[101.229px] top-[24.92px]" data-name="Card Icon">
          <div className="absolute inset-[12.5%_8.33%_12.49%_8.33%]" data-name="Shape">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84.3571 75.9359">
              <path clipRule="evenodd" d={svgPaths.p1de8a700} fill="var(--fill-0, #4B4AD5)" fillRule="evenodd" id="Shape" />
            </svg>
          </div>
          <div className="absolute inset-[31.25%_9.05%]" data-name="Shape">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 82.8986 37.9607">
              <path d={svgPaths.pa8c0000} fill="var(--fill-0, #F4EFFF)" id="Shape" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#f2e2ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function CardTextContainer5() {
  return (
    <div className="content-stretch flex flex-col gap-[4.302px] items-start leading-[25.814px] not-italic relative shrink-0 text-[#64388d] w-[149.507px]" data-name="Card Text Container">
      <p className="font-['Poppins:Bold',sans-serif] relative shrink-0 text-[21.803px] w-[156.515px]">200+</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[15.574px] w-[150.582px]">Cities Servicable</p>
    </div>
  );
}

function CardContent5() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center left-[calc(50%+34.78px)] top-[calc(50%+0.2px)] w-[128.482px]" data-name="Card Content">
      <CardTextContainer5 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute left-[-32.19px] size-[116.802px] top-[16.35px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 116.802 116.802">
        <g clipPath="url(#clip0_1_4375)" id="Frame" opacity="0.1">
          <g id="Vector" />
          <path d={svgPaths.p3c22bd00} fill="var(--fill-0, #4B4AD5)" id="Vector_2" />
          <path d={svgPaths.p38f0b6f2} fill="var(--fill-0, #4B4AD5)" id="Vector_3" opacity="0.4" stroke="var(--stroke-0, #4B4AD5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.30014" />
          <g id="Vector_4" opacity="0.8" />
        </g>
        <defs>
          <clipPath id="clip0_1_4375">
            <rect fill="white" height="116.802" width="116.802" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Card5() {
  return (
    <div className="flex-[1_0_0] min-h-[108.237px] min-w-px overflow-hidden relative rounded-[16px] lift-on-hover" style={{ backgroundImage: "linear-gradient(-61.0859deg, rgba(233, 204, 255, 0) 0%, rgba(242, 225, 255, 0.5) 130.11%)", backgroundColor: "rgba(255,255,255,0.55)", backdropFilter: "blur(20px) saturate(150%)", WebkitBackdropFilter: "blur(20px) saturate(150%)", border: "none" }} data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <CardContent5 />
        <Frame1 />
      </div>
      <div aria-hidden="true" className="absolute border-[#f2e2ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function PartnersCards1() {
  return (
    <div className="content-stretch flex gap-[18.688px] min-h-[105.901px] items-start relative shrink-0 w-full" data-name="Partners Cards">
      <Card3 />
      <Card4 />
      <Card5 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[24.918px] items-start relative shrink-0 w-[862px]" data-name="content">
      <PartnersCards />
      <PartnersCards1 />
    </div>
  );
}

function OurScale() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="Our Scale">
      <div className="flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full relative shrink-0 text-[#454551] text-[30px] text-center tracking-[-0.84px] w-[min-content]">
        <p className="leading-[normal]">Our Scale</p>
      </div>
      <Content />
    </div>
  );
}

export default function OurScaleSection() {
  return <OurScale />;
}
