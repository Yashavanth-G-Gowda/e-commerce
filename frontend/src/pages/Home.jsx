import React from 'react'
import Hero from '../component/hero'
import LatestCollection from '../component/LatestCollection'
import BestSeller from '../component/BestSeller'

const home = () => {
  return (
    <div>
        <Hero />
        <LatestCollection/>
        <BestSeller/>
    </div>
  )
}

export default home