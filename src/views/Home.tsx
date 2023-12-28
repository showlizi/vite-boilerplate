import { Link } from "react-router-dom";
import Banner from "@/assets/home/Banner.png";


export default function Home() {
  return (
    <div>
     <div className="w-full h-[660px] relative bg-gray-900 rounded-tl-lg rounded-tr-lg">
  <div className="w-full h-[202px] left-0 top-[114px] absolute ">
    <img className="w-full " src={Banner} />
    {/* <div className="w-full h-[134px] left-0 top-[69px] absolute bg-gradient-to-b from-black to-black" /> */}
    {/* <div className="left-[32px] top-[102px] absolute text-center text-emerald-200 text-3xl font-bold font-['Inter'] leading-[34px] tracking-tight">1000 $BITS Rewards<br/>First-time deposit</div> */}
  </div>
  <div className="w-full h-[52px] px-4 left-0 top-0 absolute bg-gray-900 justify-between items-center inline-flex">
    <div className="text-center text-neutral-100 text-[17px] font-['SF Pro'] leading-snug">BITSTEAM.IO</div>
    <div className="w-6 h-6 relative" />
  </div>
  <div className="w-full h-[62px] pl-4 pr-3 py-2 left-0 top-[52px] absolute bg-fuchsia-500 bg-opacity-20 justify-between items-center inline-flex">
    <div className="w-[34px] h-[34px] relative">
      <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-gradient-to-r from-red-200 via-red-200 to-fuchsia-200 rounded-full" />
      <div className="w-[17.43px] h-[16.36px] left-[8.69px] top-[8.82px] absolute">
        <img className="w-[16.36px] h-[16.36px] left-[1.06px] top-[-0px] absolute" src="https://via.placeholder.com/16x16" />
        <img className="w-[16.36px] h-[16.36px] left-0 top-0 absolute" src="https://via.placeholder.com/16x16" />
      </div>
    </div>
    <div className="justify-end items-center gap-3 flex">
      <div className="px-3.5 py-2.5 bg-gray-900 rounded-lg shadow border border-zinc-700 justify-center items-center gap-1 flex">
        <div className="w-5 h-5 relative bg-emerald-400 rounded-[108px] border border-black border-opacity-10">
          <div className="w-[15px] h-[13.33px] left-[2.50px] top-[4.17px] absolute">
          </div>
        </div>
        <div className="pl-0.5 pr-6 justify-center items-center flex">
          <div className="text-neutral-300 text-sm font-semibold font-['Inter'] leading-tight">0.00000</div>
        </div>
        <div className="w-5 h-5 relative" />
      </div>
      <img className="w-[38px] h-[38px]" src="https://via.placeholder.com/38x38" />
    </div>
  </div>
  <div className="h-[328px] left-[16px] top-[340px] absolute flex-col justify-start items-start gap-4 inline-flex">
    <div className="justify-start items-center gap-1.5 inline-flex">
      <div className="w-[22px] h-[22px] relative" />
      <div className="text-neutral-100 text-lg font-semibold font-['Inter'] leading-7">Gaming</div>
    </div>
    <div className="self-stretch h-[284px] flex-col justify-start items-start gap-3 flex">
      <div className="self-stretch justify-start items-center gap-3 inline-flex">
        <div className="w-[106.33px] h-[136px] relative bg-red-600 rounded-lg border border-gray-400 border-opacity-30">
          <img className="w-[135.79px] h-32 left-[-14.85px] top-[0.10px] absolute" src="https://via.placeholder.com/136x128" />
          <div className="w-[107px] h-[58px] left-0 top-[78.10px] absolute bg-gradient-to-b from-orange-500 via-pink-500 to-fuchsia-500" />
          <div className="left-[30px] top-[105px] absolute text-center text-zinc-100 text-[13px] font-bold font-['Inter'] leading-[13px]">BINGO          CLASH</div>
        </div>
        <div className="w-[106.33px] h-[136px] relative bg-red-600 rounded-lg border border-gray-400 border-opacity-30">
          <img className="w-[107px] h-36 left-[-0.33px] top-0 absolute" src="https://via.placeholder.com/107x144" />
          <div className="w-[107px] h-[58px] left-[-0.23px] top-[78.10px] absolute bg-gradient-to-b from-orange-500 via-pink-500 to-fuchsia-500" />
          <div className="left-[23px] top-[105px] absolute text-center text-zinc-100 text-[13px] font-bold font-['Inter'] leading-[13px]">MATCH’N          FLIP</div>
        </div>
        <div className="w-[106.33px] h-[136px] relative bg-red-600 rounded-lg border border-gray-400 border-opacity-30">
          <img className="w-[107px] h-[180px] left-[-0.47px] top-[0.10px] absolute" src="https://via.placeholder.com/107x180" />
          <div className="w-[107px] h-[58px] left-[-0.47px] top-[78.10px] absolute bg-gradient-to-b from-orange-500 via-pink-500 to-fuchsia-500" />
          <div className="left-[19px] top-[112px] absolute text-center text-zinc-100 text-[13px] font-bold font-['Inter'] leading-[13px]">SOLITAIRE</div>
        </div>
      </div>
      <div className="self-stretch justify-start items-center gap-3 inline-flex">
        <div className="w-[106.33px] h-[136px] relative bg-red-600 rounded-lg border border-gray-400 border-opacity-30">
          <img className="w-[107px] h-[179px] left-0 top-0 absolute" src="https://via.placeholder.com/107x179" />
          <div className="w-[106px] h-[58px] left-0 top-[78.10px] absolute bg-gradient-to-b from-orange-500 via-pink-500 to-fuchsia-500" />
          <div className="left-[28px] top-[112px] absolute text-center text-zinc-100 text-xs font-bold font-['Inter'] leading-3">21 GOLD</div>
        </div>
        <div className="w-[106.33px] h-[136px] relative bg-red-600 rounded-lg border border-gray-400 border-opacity-30">
          <img className="w-[107px] h-[155px] left-[-0.33px] top-0 absolute" src="https://via.placeholder.com/107x155" />
          <div className="w-[106px] h-[58px] left-[-0.23px] top-[78.10px] absolute bg-gradient-to-b from-orange-500 via-pink-500 to-fuchsia-500" />
          <div className="left-[32px] top-[106px] absolute text-center text-zinc-100 text-xs font-bold font-['Inter'] leading-3">POOL          CLASH</div>
        </div>
        <div className="w-[106.33px] h-[136px] relative bg-red-600 rounded-lg border border-gray-400 border-opacity-30">
          <img className="w-[106.09px] h-[149px] left-[0.57px] top-[1.10px] absolute" src="https://via.placeholder.com/106x149" />
          <div className="w-[106px] h-[58px] left-[-0.47px] top-[78.10px] absolute bg-gradient-to-b from-orange-500 via-pink-500 to-fuchsia-500" />
          <div className="left-[36px] top-[106px] absolute text-center text-zinc-100 text-xs font-bold font-['Inter'] leading-3">TILE          BLITZ</div>
        </div>
      </div>
    </div>
  </div>
  <div className="w-full h-8 px-5 py-2 left-0 top-[628px] absolute bg-gray-800 justify-center items-center gap-4 inline-flex">
    <div className="text-center text-neutral-300 text-xs font-normal font-['Inter'] leading-[18px]">@BITSTEAM.IO</div>
  </div>
  <div className="w-full h-14 px-5 py-2 left-0 top-[572px] absolute bg-gray-900 justify-start items-center gap-4 inline-flex">
    <div className="grow shrink basis-0 pt-1 pb-0.5 bg-fuchsia-950 rounded-lg flex-col justify-center items-center gap-0.5 inline-flex">
      <div className="w-[18px] h-[18px] relative" />
      <div className="text-center text-fuchsia-400 text-xs font-semibold font-['Inter'] leading-[18px]">GAME</div>
    </div>
    <div className="grow shrink basis-0 pt-1 pb-0.5 rounded-lg flex-col justify-center items-center gap-0.5 inline-flex">
      <div className="w-[18px] h-[18px] relative" />
      <div className="text-center text-neutral-300 text-xs font-semibold font-['Inter'] leading-[18px]">EARN</div>
    </div>
    <div className="grow shrink basis-0 pt-1 pb-0.5 rounded-lg flex-col justify-center items-center gap-0.5 inline-flex">
      <div className="w-[18px] h-[18px] relative" />
      <div className="text-center text-neutral-300 text-xs font-semibold font-['Inter'] leading-[18px]">WALLET</div>
    </div>
  </div>
</div>

      <Link to="/earn">
        点我去 earn 
      </Link>
    </div>
  );
}