import React from 'react'

const SideBarOption = ({text,icon}) => {
  return (
    <div className='flex items-center h-[36px] w-[208px] p-2 cursor-pointer mt-2 hover:bg-lightBlue'>
        <h1 className='text-white'>{icon}</h1>
        <h1 className='text-white ml-4'>{text}</h1>
    </div>
  )
}

export default SideBarOption