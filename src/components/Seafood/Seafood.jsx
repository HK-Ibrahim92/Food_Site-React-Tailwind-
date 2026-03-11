import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgBannerSeaFood from '../../assets/seafood-banner.jpg'
const Seafood = () => {
  return (
    <div>
      <CategoryPage title="Meat & SeaFoods" bgImage={BgBannerSeaFood} type={["SeaFood","Meat"]}/>

    </div>
  )
}

export default Seafood