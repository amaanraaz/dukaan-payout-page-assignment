import React from 'react'

const PayoutCard = ({text,price,orders,color}) => {
    console.log(text,price,orders);
  return (
    <div className={`p-5 w-[370px] h-[118px] flex flex-col gap-4 border rounded-t-lg ${color?'bg-primaryBlue text-white':''}`}>
        <h1>{text}</h1>
        <div className='flex justify-between'>
            <h1 className='text-2xl font-bold'>₹ {price}</h1>
            {
                orders?<h1 className={`underline ${color?'text-white':'text-primaryBlue'}`}>{orders} orders{' >'}</h1>:''
            }
        </div>

    </div>
  )
}

export default PayoutCard