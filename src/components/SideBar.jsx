import React from 'react';
import sidebarOptions from '../utils/sidebarOptions'
import SideBarOption from './SideBarOption';
import logo from '../assets/logo.jpg';
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiWallet } from "react-icons/ci";

const SideBar = () => {
  return (
    <div className='flex flex-col justify-between w-[224px] h-[1482px] bg-blue p-3'>
        <div className=''>
            <div className='flex w-[192px] h-[42px] items-center justify-between'>
                <img src={logo} className='h-[39px] w-[39px] rounded-[4px]'></img>
                <div className='text-white'>
                    <h1>Nishyan</h1>
                    <h1 className='cursor-pointer underline'>Visit store</h1>
                </div>
                <RiArrowDropDownLine className='text-4xl cursor-pointer text-white' />
            </div>
            {
                sidebarOptions.map((data,id)=>{
                    return <SideBarOption {...data} key={id} />
                })
            }
        </div>
        <div className='flex w-[192px] h-[54px] px-2 py-1 bg-lightBlue text-white items-center'>
            <div>
                <CiWallet/>
            </div>
            <div className='ml-2'>
                <h2>Available Credits</h2>
                <h2>222.22</h2>
            </div>
        </div>
    </div>
  )
}

export default SideBar