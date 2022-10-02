import React from 'react'
import ProductCard from './ProductCard'

const ProductsList = ({ data }) => {
  //   console.log(data)
  return (
    <div className='product-list'>
      {data.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductsList
