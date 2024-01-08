import React from 'react'
import PayoutCard from './PayoutCard'

const BodyPayoutSection = () => {
  return (
    <div className='w-[1152px] h-[154px]'>
        <div className='flex gap-5'>
            <div className='flex flex-col'>
                <PayoutCard text='Next Payout' price='2312.23' orders='23' color='primaryBlue'/>
                <div className='h-[36px] rounded-b-md bg-cardBlue px-2 py-1 flex justify-between text-white'>
                    <h1>Next Payout Date:</h1>
                    <h1>Today, 04:00PM</h1>
                </div>
            </div>
            <PayoutCard text='Amount Pending' price='92,312' orders='13' />
            <PayoutCard text='Amount Processed' price='23,92,312.19' />
        </div>

    </div>
  )
}

export default BodyPayoutSection