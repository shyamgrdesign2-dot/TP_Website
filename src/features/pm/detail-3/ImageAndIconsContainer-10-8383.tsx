import imgImage2326 from "./06bc5af4a6ad39b7c2c0dd45544319b788c2f08b.png";

function Frame() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[14px] items-start leading-[0] left-[calc(50%-190.5px)] top-[calc(50%+9.5px)] w-[399px]">
      <div className="flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[24px] text-white w-full">
        <p className="leading-[36px] whitespace-pre-wrap">
          {`Seamless Clinic `}
          <br aria-hidden="true" />
          Operations, Simplified
        </p>
      </div>
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal justify-center not-italic relative shrink-0 text-[14px] text-[rgba(227,227,255,0.8)] w-full">
        <p className="leading-[20px] mb-[2px]"><span className="text-[rgba(255,255,255,0.9)] text-[16px]">•</span> Control <span className="font-semibold text-white">bookings</span> and <span className="font-semibold text-white">queue flow</span> from a single dashboard.</p>
        <p className="leading-[20px] mb-[2px]"><span className="text-[rgba(255,255,255,0.9)] text-[16px]">•</span> Capture <span className="font-semibold text-white">vitals</span> and attach <span className="font-semibold text-white">reports</span> directly to consultations.</p>
        <p className="leading-[20px]"><span className="text-[rgba(255,255,255,0.9)] text-[16px]">•</span> Handle <span className="font-semibold text-white">billing</span> and <span className="font-semibold text-white">payments</span> seamlessly without switching tools.</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 absolute h-[290.661px] left-[calc(50%+231.07px)] overflow-clip rounded-[24px] top-[44.67px] w-[294.617px]">
      <div className="-translate-x-1/2 absolute h-[832.567px] left-[calc(50%-16.74px)] top-[-282.52px] w-[1248.851px]" data-name="image 2326">
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