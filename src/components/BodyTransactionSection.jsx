import React from 'react';
import TransactionTable from './TransactionTable';
import { FaDownload } from "react-icons/fa";

export const BodyTransactionSection = () => {
  return (
    <div>
        <div className='w-[252px] h-[84px] flex flex-col gap-4'>
            <h1 className="text-xl font-bold">Transaction | This Month</h1>
            <div className='flex justify-between'>
                <h1 className='w-[118px] h-[32px] bg-gray rounded-xl px-2 py-1'>Payouts(22)</h1>
                <h1 className='w-[118px] h-[32px] bg-primaryBlue rounded-xl px-2 py-1 text-white'>Refunds(6)</h1>
            </div>            
        </div>       
        <div className='w-[1152px] flex flex-col gap-6'>
            <div className='flex justify-between'>
                <input type='text' placeholder='🔍 Order Id or transaction id' className='w-[248px] border rounded-sm px-2 mt-4'></input>
                <div className='flex gap-1'>
                    <h1 className='w-[79px] h-[36px] border p-1 cursor-pointer'>Sort ↑↓</h1>
                    <FaDownload className='w-[79px] h-[36px] border p-1 cursor-pointer'/>
                </div>
            </div>
            <TransactionTable />
        </div>
    </div>
  )
}
