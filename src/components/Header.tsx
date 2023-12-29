import { Link } from "react-router-dom";
import Logo from "@/assets/home/logo.png";
import UserIcon from "@/assets/home/user-icon.png";
import UsdtIcon from "@/assets/home/usdt-icon.png";
export default function Header() {
  return (
    <>
      <div className="w-full h-[52px] px-4  bg-gray-900 justify-between items-center inline-flex">
          <div className="text-center text-neutral-100 text-[17px] font-['SF Pro'] leading-snug">
            BITSTEAM.IO
          </div>
          <div className="w-6 h-6 relative" />
        </div>
        <div className="w-full h-[62px] pl-4 pr-3 py-2 bg-fuchsia-500 bg-opacity-20 justify-between items-center inline-flex">
          <div className="w-[34px] h-[34px] relative">
            <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-gradient-to-r from-red-200 via-red-200 to-fuchsia-200 rounded-full" />
            <div className="w-[17.43px] h-[16.36px] left-[8.69px] top-[8.82px] absolute">
              <Link to="/">
                <img className="w-[16.36px] h-[16.36px] left-[1.06px] top-[-0px] absolute" src={Logo} />
              </Link>
            </div>
          </div>
          <div className="justify-end items-center gap-3 flex">
            <div className="px-3.5 py-2.5 bg-gray-900 rounded-lg shadow border border-zinc-700 justify-center items-center gap-1 flex">
              <div className="w-5 h-5  ">
                <img className="w-full" src={UsdtIcon} />
              </div>
              <div className=" pl-0.5 pr-6 justify-center items-center flex">
                <div className="text-neutral-300 text-sm font-semibold font-['Inter'] leading-tight">0.00000</div>
              </div>
              <div className="w-5 h-5 relative" />
            </div>
            <Link to="/wallet">
              <img className="w-[38px] h-[38px]" src={UserIcon} />
            </Link>
          </div>
        </div>
    </>
  );
}