import React from 'react'
import BodyOverview from './BodyOverview'
import BodyPayoutSection from './BodyPayoutSection'
import { BodyTransactionSection } from './BodyTransactionSection'

const Body = () => {
  return (
    <div className='m-5 w-[1152px] h-[754px] gap-[32px] flex flex-col gap-8'>
        <BodyOverview />
        <BodyPayoutSection />
        <BodyTransactionSection />
    </div>
  )
}

export default Body