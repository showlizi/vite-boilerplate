// @ts-ignore
import Header from "@/components/Header.tsx";
import bannerTop from "@/assets/earn/banner-top.png";
import bannerBottom from "@/assets/earn/banner-bottom.png";
import CopyIcon from "@/assets/home/copy-icon.png";
import UsdtIcon from "@/assets/home/usdt-icon.png";

export default function Earn() {
  return (
    <>
      <div className="pb-[60px] w-full min-h-screen relative bg-gray-900 rounded-tl-lg rounded-tr-lg">
        <Header />

        <div className="px-[16px] mt-[24px]">

          <div className="w-full h-[166px]">
            <img src={bannerTop} alt="" className="w-full" />
          </div>

          <div className="mt-[16px]">

            <div className="w-full h-[164px] bg-blue-800 rounded-lg flex-col justify-start items-start flex">
              <div className="self-stretch h-[164px] px-3 py-4 flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch justify-start items-start gap-4 inline-flex">
                  <div className="w-[311px] text-neutral-100 text-base font-semibold font-['Inter'] leading-normal">Referral link</div>
                </div>
                <div className="self-stretch h-[92px] flex-col justify-start items-start gap-3 flex">
                  <div className="self-stretch h-10 flex-col justify-center items-start gap-1.5 flex">
                    <div className="self-stretch h-11 flex-col justify-start items-start gap-1.5 flex">
                      <div className="truncate self-stretch px-3.5 py-2.5 bg-gray-900 rounded-lg shadow border border-gray-800 justify-start items-center gap-2 inline-flex">
                        <div className="truncate grow shrink basis-0 h-6 justify-start items-center gap-2 flex w-[90%]">
                          <div className="grow shrink basis-0 text-neutral-300 text-base font-normal font-['Inter'] leading-normal">
                            t.me/bitsteam/?start=dsgfEndlgfdsg
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch px-3.5 py-2.5 bg-gray-900 rounded-lg shadow border border-zinc-700 justify-center items-center gap-1 inline-flex">
                    <div className="w-5 h-5 relative" >
                      <img src={CopyIcon} alt="CopyIcon" />
                    </div>
                    <div className="px-0.5 justify-center items-center flex">
                      <div className="text-neutral-300 text-sm font-semibold font-['Inter'] leading-tight">Copy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
          </div>

          <div className="mt-[16px] w-full h-[272px] bg-fuchsia-900 rounded-lg flex-col justify-start items-start inline-flex">
              <div className="self-stretch h-[272px] px-3 py-4 flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch justify-start items-start gap-4 inline-flex">
                  <div className="w-[311px] text-neutral-100 text-base font-semibold font-['Inter'] leading-normal">Statistics</div>
                </div>
                <div className="self-stretch rounded-lg shadow border border-zinc-700 justify-start items-start inline-flex">
                  <div className="grow shrink basis-0 h-10  py-2 bg-fuchsia-950 border-r border-zinc-700 justify-center items-center gap-2 flex">
                    <div className="text-fuchsia-400 text-sm font-semibold font-['Inter'] leading-tight">This month</div>
                  </div>
                  <div className="grow shrink basis-0 h-10  py-2 bg-gray-900 border-r border-zinc-700 justify-center items-center gap-2 flex">
                    <div className="text-neutral-300 text-sm font-semibold font-['Inter'] leading-tight">Last month</div>
                  </div>
                  <div className="grow shrink basis-0 h-10  py-2 bg-gray-900 border-r border-zinc-700 justify-center items-center gap-2 flex">
                    <div className="text-neutral-300 text-sm font-semibold font-['Inter'] leading-tight">All time</div>
                  </div>
                </div>
                <div className="self-stretch h-36 flex-col justify-start items-start gap-3 flex">
                  <div className="self-stretch h-10 px-3 py-2.5 bg-gray-900 rounded-lg shadow border border-gray-800 justify-start items-center gap-2 inline-flex">
                    <div className="grow shrink basis-0 h-5 justify-start items-center gap-1 flex">
                      <div className="w-[18px] h-[18px] relative" />
                      <div className="grow shrink basis-0 text-neutral-400 text-sm font-normal font-['Inter'] leading-tight">Referral gamers</div>
                    </div>
                    <div className="justify-end items-center gap-1 flex">
                      <div className="text-neutral-100 text-sm font-semibold font-['Inter'] leading-tight">1233</div>
                    </div>
                  </div>
                  <div className="self-stretch h-10 px-3 py-2.5 bg-gray-900 rounded-lg shadow border border-gray-800 justify-start items-center gap-2 inline-flex">
                    <div className="grow shrink basis-0 h-5 justify-start items-center gap-1 flex">
                      <div className="w-[18px] h-[18px] relative" />
                      <div className="grow shrink basis-0 text-neutral-400 text-sm font-normal font-['Inter'] leading-tight">Referral wagered</div>
                    </div>
                    <div className="justify-end items-center gap-1 flex">
                      <div className="text-neutral-100 text-sm font-semibold font-['Inter'] leading-tight">12,232.00</div>
                      <div className="w-[18px] h-[18px] relative">
                        <img src={UsdtIcon} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-10 px-3 py-2.5 bg-gray-900 rounded-lg shadow border border-gray-800 justify-start items-center gap-2 inline-flex">
                    <div className="grow shrink basis-0 h-5 justify-start items-center gap-1 flex">
                      <div className="w-[18px] h-[18px] relative" />
                      <div className="grow shrink basis-0 text-neutral-400 text-sm font-normal font-['Inter'] leading-tight">Your commission</div>
                    </div>
                    <div className="justify-end items-center gap-1 flex">
                      <div className="text-neutral-100 text-sm font-semibold font-['Inter'] leading-tight">12,232.00</div>
                      <div className="w-[18px] h-[18px] relative">
                        <img src={UsdtIcon} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          <div className="w-full h-[166px] mt-[16px]">
            <img src={bannerBottom} alt="" className="w-full" />
          </div>

        </div>


      </div>
    </>
  );
}