import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgBannerFruits from '../../assets/fruits-banner.jpg'

const Fruits = () => {
  return (
    <div>
      <CategoryPage title="Fruits & Veggies" bgImage={BgBannerFruits} type={["Fruits","Vegetables"]}/>
    </div>
  )
}

export default Fruits