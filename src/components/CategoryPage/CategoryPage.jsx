import React from 'react'
import Banner from '../Banner/Banner'
import productsList from '../Product/productList'
import Card from '../Card/Card'


const CategoryPage = ({ type,title ,bgImage}) => {
    const filteredItem = type === "All" ?
    productsList :  productsList.filter((item) => {
        if (Array.isArray(type)) {
          return type.includes(item.category)
        }
        return item.category === type
      })
    const renderProduct=filteredItem.map((item)=>{
        return(
            <Card key={item.id} value={item}/>
        )
    })
  return (
    <div>
        <Banner value={title} img={bgImage}/>

        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3 md:mt-10 justify-items-center p-4">
        {renderProduct}
        </div>
    </div>
  )
}

export default CategoryPage