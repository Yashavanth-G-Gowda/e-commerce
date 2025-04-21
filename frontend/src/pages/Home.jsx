import React from 'react'
import Hero from '../component/hero'
import LatestCollection from '../component/LatestCollection'
import BestSeller from '../component/BestSeller'
import OurPolicy from '../component/OurPolicy'
import NewsLetterBox from '../component/NewsLetterBox'

const home = () => {
  return (
    <div>
        <Hero />
        <LatestCollection/>
        <BestSeller/>
        <OurPolicy/>
        <NewsLetterBox/>
    </div>
  )
}

export default home