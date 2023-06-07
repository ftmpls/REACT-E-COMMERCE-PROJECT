import React from 'react'
 import { Col } from 'reactstrap'
import { motion } from 'framer-motion'
import '../../styles/product_card.css'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlice'
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify'
const PruductCard = ({item}) => {
  const dispatch=useDispatch();
  const addToCart=()=>{
dispatch(cartActions.addItem({
  id:item.id,
  productName:item.productName,
  price:item.price,
  imgUrl:item.imgUrl
}));
toast.success('Product added sussecfully')

  };
  return (
<Col lg='3' md='4' className='mb-2'>

<div className='product-item'>
     <div className='product-img'>

        <motion.img whileHover={{scale:1.2}} src={item.imgUrl} alt='' ></motion.img>
     </div>
     <div className='p-2 product-info'></div>
     <h3 className='product-name'>
        <Link to={`/shop/${item.id}`}> {item.productName}</Link>
       </h3>
    <span >{item.category}</span>
    <div className='product-card-bottom d-flex align-items-center justify-content-between '>
        <span className='price'>${item.price}</span>
        <motion.span whileTap={{scale:1.2}} onClick={addToCart}>
            <i className='ri-add-line'></i>
        </motion.span>
    </div>
     </div>
</Col>
  )
}

export default PruductCard
