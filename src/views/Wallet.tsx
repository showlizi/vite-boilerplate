// import { Link } from "react-router-dom";
import {useState} from 'react';
import { Tab } from '@headlessui/react';
// @ts-ignore
import Header from "@/components/Header.tsx";
import CopyIcon from "@/assets/home/copy-icon.png";
import UsdtIcon from "@/assets/home/usdt-icon.png";
import QRcode from "@/assets/home/QRcode.png";


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Wallet() {

  let [categories] = useState({
    Deposit: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
    ],
    Whithdraw: [
      {
        id: 2,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
    ],
  });

  return (
    <>
     <div className="pb-[60px] w-full min-h-screen relative bg-gray-900 rounded-tl-lg rounded-tr-lg">
      <Header /> 


      <div className="w-full max-w-md px-2 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl p-1">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-[84px] p-3 bg-gray-900  border-neutral-300 justify-center items-center gap-2 flex',
                    selected
                      ? 'border-b-2 text-neutral-100 text-base font-semibold  leading-normal'
                      : 'text-neutral-400 text-base font-semibold  leading-normal'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((items, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  'rounded-xl  p-3 ',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                )}
              >
                {idx === 0 ? (
                  <>
                    <div className="w-full self-stretch px-3.5 py-2.5 bg-fuchsia-950 rounded-lg shadow border border-zinc-700 justify-start items-center gap-2 inline-flex">
                      <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                        <div className="w-5 h-5 relative ">
                          <img src={UsdtIcon} alt="" />
                        </div>
                        <div className="text-neutral-100 text-base font-medium  leading-normal">USDT</div>
                      </div>
                      <div className="w-5 h-5 relative" />
                    </div>
                    <div className="mt-[16px] w-full h-[164px] bg-fuchsia-900 rounded-lg flex-col justify-start items-start flex">
                      <div className=" self-stretch h-[164px] px-3 py-4 flex-col justify-start items-start gap-4 flex">
                        <div className="self-stretch justify-start items-start gap-4 inline-flex">
                          <div className="w-[311px] text-neutral-100 text-base font-semibold  leading-normal">USDT deposit address (Min 2.0 USDT)</div>
                        </div>
                        <div className="self-stretch h-[92px] flex-col justify-start items-start gap-3 flex">
                          <div className="self-stretch h-10 flex-col justify-center items-start gap-1.5 flex">
                            <div className="self-stretch h-11 flex-col justify-start items-start gap-1.5 flex">
                              <div className="truncate self-stretch px-3.5 py-2.5 bg-gray-900 rounded-lg shadow border border-gray-800 justify-start items-center gap-2 inline-flex">
                                <div className="truncate grow shrink basis-0 h-6 justify-start items-center gap-2 flex w-[90%]">
                                  <div className="grow shrink basis-0 text-neutral-300 text-base font-normal  leading-normal">TANgZdsgsdlYsdngldfsdgdfgdfslHsdgds</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch px-3.5 py-2.5 bg-gray-900 rounded-lg shadow border border-zinc-700 justify-center items-center gap-1 inline-flex">
                            <div className="w-5 h-5 relative" >
                              <img src={CopyIcon} alt="CopyIcon" />
                            </div>
                            <div className="px-0.5 justify-center items-center flex">
                              <div className="text-neutral-300 text-sm font-semibold  leading-tight">Copy</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className='text-white'>
                      whitedraw
                    </div>
                  </>
                )}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
      

      <div className="px-[16px] !hidden">
        <div className="w-full h-72 flex-col justify-start items-start gap-4 inline-flex">
          <div className="justify-start items-end gap-2 inline-flex">
            <div className="w-[84px] p-3 bg-gray-900 border-b-2 border-neutral-300 justify-center items-center gap-2 flex">
              <div className="text-neutral-100 text-base font-semibold  leading-normal">
                Deposit
              </div>
            </div>
            <div className="w-[100px] p-3 justify-center items-center gap-2 flex">
              <div className="text-neutral-400 text-base font-semibold  leading-normal">
                Withdraw
              </div>
            </div>
          </div>
          <div className="self-stretch px-3.5 py-2.5 bg-fuchsia-950 rounded-lg shadow border border-zinc-700 justify-start items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
              <div className="w-5 h-5 relative ">
                <img src={UsdtIcon} alt="" />
              </div>
              <div className="text-neutral-100 text-base font-medium  leading-normal">USDT</div>
            </div>
            <div className="w-5 h-5 relative" />
          </div>
          <div className="w-full h-[164px] bg-fuchsia-900 rounded-lg flex-col justify-start items-start flex">
            <div className="self-stretch h-[164px] px-3 py-4 flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch justify-start items-start gap-4 inline-flex">
                <div className="w-[311px] text-neutral-100 text-base font-semibold  leading-normal">USDT deposit address (Min 2.0 USDT)</div>
              </div>
              <div className="self-stretch h-[92px] flex-col justify-start items-start gap-3 flex">
                <div className="self-stretch h-10 flex-col justify-center items-start gap-1.5 flex">
                  <div className="self-stretch h-11 flex-col justify-start items-start gap-1.5 flex">
                    <div className="truncate self-stretch px-3.5 py-2.5 bg-gray-900 rounded-lg shadow border border-gray-800 justify-start items-center gap-2 inline-flex">
                      <div className="truncate grow shrink basis-0 h-6 justify-start items-center gap-2 flex w-[90%]">
                        <div className="grow shrink basis-0 text-neutral-300 text-base font-normal  leading-normal">TANgZdsgsdlYsdngldfsdgdfgdfslHsdgds</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch px-3.5 py-2.5 bg-gray-900 rounded-lg shadow border border-zinc-700 justify-center items-center gap-1 inline-flex">
                  <div className="w-5 h-5 relative" >
                    <img src={CopyIcon} alt="CopyIcon" />
                  </div>
                  <div className="px-0.5 justify-center items-center flex">
                    <div className="text-neutral-300 text-sm font-semibold  leading-tight">Copy</div>
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
        <div className="px-[16px] text-neutral-400 text-[15px] font-medium  leading-snug">
        
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