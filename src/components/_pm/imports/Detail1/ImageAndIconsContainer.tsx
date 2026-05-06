import imgImage2326 from "./06bc5af4a6ad39b7c2c0dd45544319b788c2f08b.png";

function Frame() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[14px] items-start leading-[0] left-[calc(50%-190.5px)] top-[calc(50%+9.5px)] w-[399px]">
      <div className="flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[24px] text-white w-full">
        <p className="leading-[36px]">
          Consultations just
          <br aria-hidden="true" />
          {`became smarter & faster`}
        </p>
      </div>
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center not-italic relative shrink-0 text-[14px] text-[rgba(227,227,255,0.8)] w-full whitespace-pre-wrap">
        <p className="mb-[2px]">
          <span className="leading-[20px] text-[rgba(255,255,255,0.9)] text-[16px]">{`• `}</span>
          <span className="leading-[20px]">{`Pre-collected `}</span>
          <span className="font-['Inter:Semi_Bold','Noto_Sans:Regular',sans-serif] font-semibold leading-[20px] not-italic text-white">symptoms</span>
          <span className="leading-[20px]">{`, `}</span>
          <span className="font-['Inter:Semi_Bold','Noto_Sans:Regular',sans-serif] font-semibold leading-[20px] not-italic text-white">history</span>
          <span className="leading-[20px]">{`, and `}</span>
          <span className="font-['Inter:Semi_Bold','Noto_Sans:Regular',sans-serif] font-semibold leading-[20px] not-italic text-white">reports</span>
          <span className="leading-[20px]">{` ready `}</span>
        </p>
        <p className="leading-[20px] mb-[2px]">{`   before you begin.`}</p>
        <p className="mb-[2px]">
          <span className="leading-[20px] text-[rgba(255,255,255,0.9)] text-[16px]">{`• `}</span>
          <span className="font-['Inter:Semi_Bold','Noto_Sans:Regular',sans-serif] font-semibold leading-[20px] not-italic text-white">VoiceRx</span>
          <span className="leading-[20px]">{`, `}</span>
          <span className="font-['Inter:Semi_Bold','Noto_Sans:Regular',sans-serif] font-semibold leading-[20px] not-italic text-white">SnapRx</span>
          <span className="leading-[20px]">{`, and `}</span>
          <span className="font-['Inter:Semi_Bold','Noto_Sans:Regular',sans-serif] font-semibold leading-[20px] not-italic text-white">SmartSync</span>
          <span className="leading-[20px]">{` speed up and digitize `}</span>
        </p>
        <p className="leading-[20px] mb-[2px]">{`   prescriptions effortlessly.`}</p>
        <p className="mb-[2px]">
          <span className="leading-[20px] text-[rgba(255,255,255,0.9)] text-[16px]">{`• `}</span>
          <span className="font-['Inter:Semi_Bold','Noto_Sans:Regular',sans-serif] font-semibold leading-[20px] not-italic text-white">Dr.Agent</span>
          <span className="leading-[20px]">{` summarizes cases and supports `}</span>
          <span className="font-['Inter:Semi_Bold','Noto_Sans:Regular',sans-serif] font-semibold leading-[20px] not-italic text-white">differential</span>
        </p>
        <p>
          <span className="font-['Inter:Semi_Bold','Noto_Sans:Regular',sans-serif] font-semibold leading-[20px] not-italic text-white">{`     diagnosis`}</span>
          <span className="leading-[20px]">{` & more with smart insights.`}</span>
        </p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[290.661px] left-[514.76px] overflow-clip rounded-[24px] top-[44.67px] w-[294.617px]">
      <div className="-translate-x-1/2 absolute h-[874.419px] left-[calc(50%+401.99px)] top-[-271.82px] w-[1311.629px]" data-name="image 2326">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2326.src} />
      </div>
    </div>
  );
}

export default function ImageAndIconsContainer() {
  return (
    <div className="relative size-full" data-name="Image and Icons Container">
      <Frame />
      <Frame1 />
    </div>
  );
}