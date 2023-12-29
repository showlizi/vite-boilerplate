// import { Link } from "react-router-dom";
// @ts-ignore
import Header from "@/components/Header";
import CopyIcon from "@/assets/home/copy-icon.png";
import UsdtIcon from "@/assets/home/usdt-icon.png";
import QRcode from "@/assets/home/QRcode.png";

export default function Wallet() {
  return (
    <>
     <div className="pb-[60px] w-full min-h-screen relative bg-gray-900 rounded-tl-lg rounded-tr-lg">
      <Header /> 

      <div className="px-[16px]">
        <div className="w-full h-72 flex-col justify-start items-start gap-4 inline-flex">
          <div className="justify-start items-end gap-2 inline-flex">
            <div className="w-[84px] p-3 bg-gray-900 border-b-2 border-neutral-300 justify-center items-center gap-2 flex">
              <div className="text-neutral-100 text-base font-semibold font-['Inter'] leading-normal">Deposit</div>
            </div>
            <div className="w-[100px] p-3 justify-center items-center gap-2 flex">
              <div className="text-neutral-400 text-base font-semibold font-['Inter'] leading-normal">Withdraw</div>
            </div>
          </div>
          <div className="self-stretch px-3.5 py-2.5 bg-fuchsia-950 rounded-lg shadow border border-zinc-700 justify-start items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
              <div className="w-5 h-5 relative ">
                <img src={UsdtIcon} alt="" />
              </div>
              <div className="text-neutral-100 text-base font-medium font-['Inter'] leading-normal">USDT</div>
            </div>
            <div className="w-5 h-5 relative" />
          </div>
          <div className="w-full h-[164px] bg-fuchsia-900 rounded-lg flex-col justify-start items-start flex">
            <div className="self-stretch h-[164px] px-3 py-4 flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch justify-start items-start gap-4 inline-flex">
                <div className="w-[311px] text-neutral-100 text-base font-semibold font-['Inter'] leading-normal">USDT deposit address (Min 2.0 USDT)</div>
              </div>
              <div className="self-stretch h-[92px] flex-col justify-start items-start gap-3 flex">
                <div className="self-stretch h-10 flex-col justify-center items-start gap-1.5 flex">
                  <div className="self-stretch h-11 flex-col justify-start items-start gap-1.5 flex">
                    <div className="truncate self-stretch px-3.5 py-2.5 bg-gray-900 rounded-lg shadow border border-gray-800 justify-start items-center gap-2 inline-flex">
                      <div className="truncate grow shrink basis-0 h-6 justify-start items-center gap-2 flex w-[90%]">
                        <div className="grow shrink basis-0 text-neutral-300 text-base font-normal font-['Inter'] leading-normal">TANgZdsgsdlYsdngldfsdgdfgdfslHsdgds</div>
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
      </div>

      <div className="mt-[40px] flex w-full justify-center ">

        <div className="w-[200px] h-[200px] ">
          <img className="w-full" src={QRcode} alt="" />
        </div>
      </div>

      <div className="w-full text-center mt-[16px]">
        <div className="px-[16px] text-neutral-400 text-[15px] font-medium font-['Inter'] leading-snug">
        
        <div>
        Send only USDT (TRC20) to this deposit address. 
        </div>

        <div className="mt-[5px]">
        Values sent below the minimum amount or to an incorrect address will be lost.
        </div>
        
        </div>
      </div>

     </div>
    </>
  );
}