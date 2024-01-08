import React from 'react';
import { RiMessage2Line } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";

const Header = () => {
  return (
    <div className='w-[1216px] h-[64px] border-b-2 border-gray px-[12px] py-[32px] flex items-center'>
        <div className='w-[360px] h-[22px] gap-[16px] flex'>
            <h1>Payments</h1>
            <div className='flex items-center justify-between'>
                <CiCircleQuestion/>
                <h2>How it works</h2>
            </div>
        </div>

        <div>
            <input type='text' className='bg-gray w-[400px] h-[40px] rounded-[6px] px-[9px] py-[16px]' placeholder='🔍 Search features, tutorials, etc.'></input>
        </div>

        <div className='w-[360px] h-[40px] gap-[8px] flex items-center justify-end'>
            <div className='w-[40px] h-[40px] bg-gray rounded-full flex justify-center items-center text-xl'>
                <RiMessage2Line/>
            </div>
            <div className='w-[40px] h-[40px] bg-gray rounded-full flex justify-center items-center text-3xl'>
                <IoMdArrowDropdown />
            </div>


        </div>
    </div>
  )
}

export default Header