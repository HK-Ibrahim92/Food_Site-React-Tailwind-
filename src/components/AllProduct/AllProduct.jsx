import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgBannelAll from '../../assets/all-banner.jpg'

const AllProduct = () => {
  return (
    <div>
      <CategoryPage  title="All Products" bgImage={BgBannelAll} type="All"/>
    </div>
  )
}

export default AllProduct