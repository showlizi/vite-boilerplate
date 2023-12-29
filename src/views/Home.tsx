import { Link } from "react-router-dom";
import Banner from "@/assets/home/Banner.png";
// @ts-ignore
import Header from "@/components/Header.tsx";

// import GameCard from "@/assets/home/game-card.png";
import GiftIcon from "@/assets/home/gift-icon.png";
import Card1 from "@/assets/home/card-1.png";
import Card2 from "@/assets/home/card-2.png";

import GameCard0 from "@/assets/home/card-list/game-card-0.png";
import GameCard1 from "@/assets/home/card-list/game-card-1.png";
import GameCard2 from "@/assets/home/card-list/game-card-2.png";
import GameCard3 from "@/assets/home/card-list/game-card-3.png";
import GameCard4 from "@/assets/home/card-list/game-card-4.png";
import GameCard5 from "@/assets/home/card-list/game-card-5.png";

const gameList = [
  GameCard0,GameCard1,GameCard2,GameCard3,GameCard4,GameCard5
]

export default function Home() {
  return (
    <div>
      <div className="w-full min-h-screen relative bg-gray-900 rounded-tl-lg rounded-tr-lg">
        <Header />

        <div className="w-full h-[202px] relative  ">
          <img className="w-full h-[180px]" src={Banner} />
          {/* <div className="w-full h-[134px] left-0 top-[69px] absolute bg-gradient-to-b from-black to-black" /> */}
          <div className="left-[32px] bottom-[40px] absolute text-center text-emerald-200 text-3xl font-bold font-['Inter'] leading-[34px] tracking-tight">1000 $BITS Rewards<br/>First-time deposit</div>
        </div>
        
        
        <div className="flex-col justify-start items-start gap-4 inline-flex">
          <div className="justify-start items-center gap-1.5 inline-flex">
            <div className="w-[22px] h-[22px] relative" />
            <div className="text-neutral-100 text-lg font-semibold font-['Inter'] leading-7">Gaming</div>
          </div>
          <div className={`px-[10px] flex flex-col`}>
            <div className=" flex-col justify-start items-start  flex ">
              <div className=" justify-center items-center gap-3 flex flex-wrap">
                {/* <div className="w-1/3 h-[136px] relative bg-red-600 rounded-lg border border-gray-400 border-opacity-30">
                  <img src={GameCard} alt="GameCard" />
                </div>
                <div className="w-1/3 h-[136px] relative bg-red-600 rounded-lg border border-gray-400 border-opacity-30">
                  <img src={GameCard} alt="GameCard" />
                </div>
                <div className="w-1/3 h-[136px] relative bg-red-600 rounded-lg border border-gray-400 border-opacity-30">
                  <img src={GameCard} alt="GameCard" />
                </div> */}
                {
                  gameList.map((item)=>{
                    return (
                      <div key={item} className="w-[103px] h-[136px] relative">
                        <Link to="/earn">
                          <img className="w-full" src={item} alt="GameCard" />
                        </Link>
                      </div>
                    )
                  })
                }
              </div>
              
            </div>
          </div>

          {/* <div className={`px-[10px] flex flex-col`}>
            <div className="self-stretch flex-col justify-start items-start gap-3 flex">
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
          </div> */}

        </div>

        
        <div className="mt-[42px] w-full flex-col justify-start items-start gap-4 inline-flex">
          <div className={`px-[20px] w-full flex flex-col pb-[20px]`}>

            <div className=" justify-start items-center gap-1.5 inline-flex">
              <div className="w-[22px] h-[22px] relative" >
                <img className="w-full" src={GiftIcon} />
              </div>
              <div className="text-neutral-100 text-lg font-semibold font-['Inter'] leading-7">New User Rewards</div>
            </div>

            <div className="mt-[16px] relative gap-[20px] flex w-full">
              <div className={`w-1/2 h-[96px] relative`}>
                <div className={` absolute left-0 top-0 z-[2]`}>
                  <img className={`w-full`} src={Card1} alt="Card1" />
                </div>
                <div className="absolute left-0 top-[20px] z-[3] w-full h-full items-center flex flex-col ">
                  <div className="text-center text-fuchsia-400 text-lg font-bold font-['Inter'] leading-7">1000 $BITS</div>
                  <div className="text-center text-fuchsia-400 text-sm font-medium font-['Inter'] leading-tight">First-time deposit</div>
                </div>
              </div>
              
              <div className={`w-1/2 h-[96px] relative`}>
                <div className={` absolute right-0 top-0 z-[2]`}>
                  <img className={`w-full`} src={Card2} alt="Card2" />
                </div>
                <div className="absolute left-0 top-[20px] z-[3] w-full h-full items-center flex flex-col ">
                <div className="text-center text-emerald-300 text-lg font-bold font-['Inter'] leading-7">5000 $BITS</div>
                  <div className="text-center text-emerald-300 text-sm font-medium font-['Inter'] leading-tight">5000 $BITS</div>
                </div>
              </div>

            </div>

            <div className={`w-full text-center`}>
              <div className="text-fuchsia-400 text-xs font-normal font-['Inter'] leading-[18px]">Earnings are paid monthly to your account in $BITS.</div>
            </div>

  

          </div>
        </div>

        <div className="w-full h-[50px] flex-col justify-center items-center gap-4 inline-flex">
          <div className="w-full h-[0px] border border-zinc-700"></div>
            <div className="text-center text-neutral-400 text-[13px] font-medium font-['Inter'] leading-[18px]">18+ only | Play responsibly | Term apply</div>
          <div className="w-full h-[0px] border border-zinc-700"></div>
        </div>
       
      </div>

      {/* <Link to="/earn">
        点我去 earn 
      </Link> */}
    </div>
  );
}