import React from 'react'
import Banner from '../Banner/Banner'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgBannerDairy from '../../assets/dairy-banner.jpg'

const Dairy = () => {
  return (
    <div>
      <CategoryPage title="Dairy & Eggs" bgImage={BgBannerDairy} type="Dairy"/>
    </div>
  )
}

export default Dairy