import { Link } from "react-router-dom";
import { useState, Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import Logo from "@/assets/home/logo.png";
import UserIcon from "@/assets/home/user-icon.png";
import UsdtIcon from "@/assets/home/usdt-icon.png";
import EthIcon from "@/assets/home/eth-icon.png";
import BtcIcon from "@/assets/home/btc-icon.png";

const coinList = [
  { id: 1, name: 'USDT', unavailable: true, icon: UsdtIcon, value: '4000.00' },
  { id: 2, name: 'BTC', unavailable: false, icon: BtcIcon, value: '1.2000' },
  { id: 3, name: 'ETH', unavailable: false, icon: EthIcon, value: '500.2000' },
]

const Header = () => {

  const [selected, setSelected] = useState(coinList[0])

  return (
    <>
      <div className="w-full h-[52px] px-4  bg-gray-900 justify-between items-center inline-flex">
        <div className="text-center text-neutral-100 text-[17px] leading-snug">
          BITSTEAM.IO
        </div>
        <div className="w-6 h-6 relative" />
      </div>
      <div className="relative w-full h-[62px] pl-4 pr-3 py-2 bg-fuchsia-500 bg-opacity-20 justify-between items-center inline-flex">
        <div className="w-[34px] h-[34px] relative">
          <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-gradient-to-r from-red-200 via-red-200 to-fuchsia-200 rounded-full" />
          <div className="w-[17.43px] h-[16.36px] left-[8.69px] top-[8.82px] absolute z-[5]">
            <Link to="/">
              <img className="w-[16.36px] h-[16.36px] left-[1.06px] top-[-0px] absolute" src={Logo} />
            </Link>
          </div>
        </div>

        <div className="absolute top-[6px] right-[68px] w-72 z-[4] text-white">
          <Listbox value={selected} onChange={setSelected}>
            <div className=" flex justify-end">
              {/* <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"> */}
              <Listbox.Button className="relative w-[160px] px-3.5 py-2.5 bg-gray-900 rounded-lg shadow border border-zinc-700 justify-center items-center gap-1 flex">
                <div className="w-5 h-5">
                  <img className="w-full" src={selected?.icon} alt="icon" />
                </div>
                <span className="ml-[5px] block truncate">
                  {selected?.value}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute top-12 -right-[50px] max-h-60 w-full overflow-auto rounded-md bg-gray-900 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm text-white">
                  {coinList?.map((items, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-white'
                        }`
                      }
                      value={items}
                    >
                      {({ selected }) => (
                        <div className="flex items-center">
                          <div className="w-5 h-5">
                            <img className="w-full" src={items?.icon} alt="icon" />
                          </div>
                          <span
                            className={`ml-[10px] block truncate ${selected ? 'medium' : 'font-normal'
                              }`}
                          >
                            {items.value}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>

        <Link to="/wallet">
          <img className="w-[38px] h-[38px]" src={UserIcon} />
        </Link>


        <div className="!hidden justify-end items-center gap-3 flex">
          <div className="px-3.5 py-2.5 bg-gray-900 rounded-lg shadow border border-zinc-700 justify-center items-center gap-1 flex">
            <div className="w-5 h-5  ">
              <img className="w-full" src={UsdtIcon} />
            </div>
            <div className=" pl-0.5 pr-6 justify-center items-center flex">
              <div className="text-neutral-300 text-sm font-semibold  leading-tight">0.00000</div>
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

export default Header;