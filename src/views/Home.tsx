import { Link } from "react-router-dom";
import Banner from "@/assets/home/Banner.png";
import Logo from "@/assets/home/logo.png";
import UserIcon from "@/assets/home/user-icon.png";
import UsdtIcon from "@/assets/home/usdt-icon.png";
import GameCard from "@/assets/home/game-card.png";


export default function Home() {
  return (
    <div>
      <div className="w-full min-h-screen relative bg-gray-900 rounded-tl-lg rounded-tr-lg">
        <div className="w-full h-[202px] left-0 top-[114px] absolute ">
          <img className="w-full " src={Banner} />
          {/* <div className="w-full h-[134px] left-0 top-[69px] absolute bg-gradient-to-b from-black to-black" /> */}
          <div className="left-[32px] top-[102px] absolute text-center text-emerald-200 text-3xl font-bold font-['Inter'] leading-[34px] tracking-tight">1000 $BITS Rewards<br/>First-time deposit</div>
        </div>
        <div className="w-full h-[52px] px-4 left-0 top-0 absolute bg-gray-900 justify-between items-center inline-flex">
          <div className="text-center text-neutral-100 text-[17px] font-['SF Pro'] leading-snug">BITSTEAM.IO</div>
          <div className="w-6 h-6 relative" />
        </div>
        <div className="w-full h-[62px] pl-4 pr-3 py-2 left-0 top-[52px] absolute bg-fuchsia-500 bg-opacity-20 justify-between items-center inline-flex">
          <div className="w-[34px] h-[34px] relative">
            <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-gradient-to-r from-red-200 via-red-200 to-fuchsia-200 rounded-full" />
            <div className="w-[17.43px] h-[16.36px] left-[8.69px] top-[8.82px] absolute">
              <img className="w-[16.36px] h-[16.36px] left-[1.06px] top-[-0px] absolute" src={Logo} />
              {/* <img className="w-[16.36px] h-[16.36px] left-0 top-0 absolute" src="https://via.placeholder.com/16x16" /> */}
            </div>
          </div>
          <div className="justify-end items-center gap-3 flex">
            <div className="px-3.5 py-2.5 bg-gray-900 rounded-lg shadow border border-zinc-700 justify-center items-center gap-1 flex">
              <div className="w-5 h-5 relative ">
                <img className="w-full" src={UsdtIcon} />
              </div>
              <div className="pl-0.5 pr-6 justify-center items-center flex">
                <div className="text-neutral-300 text-sm font-semibold font-['Inter'] leading-tight">0.00000</div>
              </div>
              <div className="w-5 h-5 relative" />
            </div>
            <img className="w-[38px] h-[38px]" src={UserIcon} />
          </div>
        </div>
        <div className="h-[328px] top-[320px] absolute flex-col justify-start items-start gap-4 inline-flex">
          <div className="justify-start items-center gap-1.5 inline-flex">
            <div className="w-[22px] h-[22px] relative" />
            <div className="text-neutral-100 text-lg font-semibold font-['Inter'] leading-7">Gaming</div>
          </div>
          <div className={`px-[10px] flex flex-col`}>
            <div className="self-stretch  flex-col justify-start items-start gap-3 flex">
              <div className="self-stretch justify-start items-center gap-3 inline-flex">
                <div className="w-1/3 h-[136px] relative bg-red-600 rounded-lg border border-gray-400 border-opacity-30">
                  <img src={GameCard} alt="GameCard" />
                </div>
                <div className="w-1/3 h-[136px] relative bg-red-600 rounded-lg border border-gray-400 border-opacity-30">
                  <img src={GameCard} alt="GameCard" />
                </div>
                <div className="w-1/3 h-[136px] relative bg-red-600 rounded-lg border border-gray-400 border-opacity-30">
                  <img src={GameCard} alt="GameCard" />
                </div>
              </div>
              
            </div>
          </div>

          <div className={`px-[10px] flex flex-col`}>
            <div className="self-stretch h-[284px] flex-col justify-start items-start gap-3 flex">
              <div className="self-stretch justify-start items-center gap-3 inline-flex">
                <div className="w-1/3 h-[136px] relative bg-red-600 rounded-lg border border-gray-400 border-opacity-30">
                  <img src={GameCard} alt="GameCard" />
                </div>
                <div className="w-1/3 h-[136px] relative bg-red-600 rounded-lg border border-gray-400 border-opacity-30">
                  <img src={GameCard} alt="GameCard" />
                </div>
                <div className="w-1/3 h-[136px] relative bg-red-600 rounded-lg border border-gray-400 border-opacity-30">
                  <img src={GameCard} alt="GameCard" />
                </div>
              </div>
              
            </div>
          </div>

        </div>
       
      </div>

      <Link to="/earn">
        点我去 earn 
      </Link>
    </div>
  );
}