import React from 'react'
import '../styles/cart.css'
import Helmet from '../component/Helmet/Helmet'
import CommonSection from '../component/UI/CommonSection'
import { Container,Row ,Col} from 'reactstrap'
import { cartActions } from '../redux/slices/cartSlice'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
const Cart = () => {

  const cartItems=useSelector(state=>state.cart.cartItems);

  const totalAmount=useSelector(state=>state.cart.totalAmount)
  return (
    <Helmet title='Cart'> 
    <CommonSection title='Sepet' />
<section>
  <Container>

    <Row>
      <Col lg='9'>{
        cartItems.length===0 ? <h2 className='fs-4 text-center'>No item added</h2>:(
      
        <table className='table bordered'>
          <thead>
            <tr>
              <th>Fotoğraf</th>
              <th>Başlık</th>
              <th>Fiyat</th>
              <th>Adet</th>
              <th>Sil</th>
            </tr>
          </thead>
          <tbody>
  {    
  cartItems.map((item,index)=>(  <Tr item={item} key={index}/> ))

  }

          </tbody>
        </table>)}
      </Col>
      <Col lg='3'>
        <div>
          <h6 className='d-flex align-items-center justify-content-between' >Toplam:   <span className='fs-4 fw-bold'>${totalAmount}</span></h6>
      
        </div>
        <p className='fs-6 mt-2'>toplam kontrol edilecek</p>
        <div>
        <button className='buy-btn w-100'><Link to='/checkout'>Ödeme</Link></button>
          <button className='buy-btn w-100 mt-3'><Link to='/shop'>Devam</Link></button>
        
        </div>
      </Col>
    </Row>
  </Container>
  </section>  
    </Helmet>)
};
const Tr =({item})=>{
  const dispatch=useDispatch();
 
  const deleteProduct=()=>{

    dispatch(cartActions.deleteItem(item.id))
  }
return  <tr>
  
  
    <td><img src={item.imgUrl} alt=''></img></td>
    <td>{item.productName}</td>
    <td>${item.price}</td>
    <td>{item.quantity}</td>
    <td >
      <i onClick={deleteProduct} className='ri-delete-bin-line'></i>

    </td>
  </tr>
}

export default Cart
