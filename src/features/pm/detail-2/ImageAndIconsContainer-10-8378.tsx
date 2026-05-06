import imgImage2326 from "./06bc5af4a6ad39b7c2c0dd45544319b788c2f08b.png";

function Frame() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[14px] items-start leading-[0] left-[calc(50%-190.5px)] top-[calc(50%+9.5px)] w-[399px]">
      <div className="flex flex-col font-['Mulish:SemiBold',sans-serif] font-semibold justify-center min-w-full relative shrink-0 text-[24px] text-white w-[min-content]">
        <p className="leading-[36px]">
          Patient’s visit begins
          <br aria-hidden="true" />
          before he walk-in
        </p>
      </div>
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal justify-center not-italic relative shrink-0 text-[14px] text-[rgba(227,227,255,0.8)] w-[376.162px]">
        <p className="leading-[20px] mb-[2px]"><span className="text-[rgba(255,255,255,0.9)] text-[16px]">•</span> Schedule your visit in seconds through the <span className="font-semibold text-white">AI receptionist</span>.</p>
        <p className="leading-[20px] mb-[2px]"><span className="text-[rgba(255,255,255,0.9)] text-[16px]">•</span> Submit <span className="font-semibold text-white">symptoms</span> and <span className="font-semibold text-white">history</span> once your appointment is confirmed.</p>
        <p className="leading-[20px]"><span className="text-[rgba(255,255,255,0.9)] text-[16px]">•</span> Send <span className="font-semibold text-white">reports</span> ahead so your consultation starts with clarity.</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 absolute h-[290.661px] left-[calc(50%+231.07px)] overflow-clip rounded-[24px] top-[44.67px] w-[294.617px]">
      <div className="-translate-x-1/2 absolute h-[832.567px] left-[calc(50%-447.19px)] top-[-295.77px] w-[1248.851px]" data-name="image 2326">
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