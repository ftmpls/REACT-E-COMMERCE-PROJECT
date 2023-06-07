import React from 'react'
import PruductCard from './PruductCard'
const ProductList = ({data}) => {
  return (
   <>
   {data?.map((item,index)=> <PruductCard item={item} key={index}/> )}


   </>
  )
}

export default ProductList
