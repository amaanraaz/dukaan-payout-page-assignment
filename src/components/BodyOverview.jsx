import React from 'react'

const BodyOverview = () => {
  return (
    <div className='w-[1152px] h-[36px] flex justify-between items-center'>
        <h1>Overview</h1>        
        <div>
            <select  className=' flex items-center border border-gray w-[137px] h-[36px] rounded-[4px]'>
                <option>This Month</option>
                <option>Last Month</option>
            </select>
        </div>
    </div>
  )
}

export default BodyOverview