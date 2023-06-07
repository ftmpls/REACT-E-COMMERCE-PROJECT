import {React,useState ,useRef, useEffect}from 'react'
import { Container,Row,Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
import Helmet from '../component/Helmet/Helmet'
import CommonSection from '../component/UI/CommonSection'
import ProductList from '../component/UI/ProductList'
import '../styles/product-detail.css'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlice'
import Toast from 'reactstrap'
import { toast } from 'react-toastify'
const ProductDetail = () => {
  const [tab,setTab]=useState('desc')
  const [rating,setRating]=useState(null)
  const reviewUser=useRef('')
  const reviewmsg=useRef('')

  const {id}=useParams()
  const product=products.find(item=>item.id===id)
  const {imgUrl,price,avgRating,productName,reviews,description,category,shortDesc}=product;
 const relatedProducts=products.filter(item=>item.category===category)
 const dispatch=useDispatch()
 const submitHandler=(e)=>{
e.preventDefault()
const reviewUserName=reviewUser.current.value
const reviewUserMsg=reviewmsg.current.value
const reviewObj={
  userName:reviewUserName,
  text:reviewUserMsg,
  rating,
}
console.log(reviewObj)
toast.success("yorum kaydedildi")
};
const addToCart=()=>{
  dispatch(cartActions.addItem({
    id,
    imgUrl:imgUrl,
    productName,
    price,
  }));
  toast.success('Ürün başarılı bir şekilde kaydedildi')

};
useEffect(()=>{
  window.scrollTo(0,0)
})

 return (
<Helmet title={productName}>
<CommonSection/>
<section className='pt-0'>
  <Container>
    <Row>
      <Col lg='6'>
        <img src={imgUrl}></img>
        
      </Col>
      <Col lg='6'>
        <div className='product-detail'>
          <h2 >{productName}</h2>
          
          <div className='product-rating '>
        <div>
          <span ><i className='ri-star-s-fill'></i></span>
          <span ><i className='ri-star-s-fill'></i></span>
          <span><i className='ri-star-s-fill'></i></span>
          <span><i className='ri-star-s-fill'></i></span>
          <span ><i className='ri-star-half-s-line'></i></span>
        </div>
        <p>(<span>{avgRating}</span> oy)</p>
        </div><div className='d-flex align-items-center gap-5'>
        <span className='product-price'>${price}</span>
        <span style={{fontWeight:'bold'}}>Kategori:{category}</span>
        </div>
     
        <p className='mt-3'>{shortDesc}</p>
        <motion.button whileTap={{scale:1.3}} className='buy-btn' onClick={addToCart}>Sepete ekle</motion.button>
        </div>

      </Col>
      <Col lg='6'></Col>
    </Row>
  </Container>
</section>
<section>
 <Container>
  <Row>
    <Col lg='12'>
      <div className='tab-wrapper d-flex align-items-center gap-5'>
        <h6 className={`${tab==='desc' ? 'active-tab' :''}`} onClick={()=>setTab('desc')}>
       Açıklama
        </h6>
        <h6 className={`${tab==='desc' ? 'active-tab' :''}`} onClick={()=>setTab('rev')}>
       Yorum({reviews.length})
        </h6>
      </div>
      {
        tab==='desc' ?  <div className='tab-content mt-5'>
        <p>{description}</p>     </div>: <div className='product-review mt-5'>
          <div className='review-wrapper'>

            <ul>
              {
                reviews.map((item,index)=>(
                  <li key={index} className='mb-4'>
                    <h6>{item.userName}</h6>
                    <span>{item.rating}(oy)</span>
                    <p>{item.text}</p>
                  </li>
                ))
              }
            </ul>
            <div className='review-form'>
              <h4>Yorum bırakın</h4>
              <form action='' onSubmit={submitHandler}>
                 <div className='form-group'>
                  <input  type="text" placeholder="Enter name" ref={reviewUser}></input>
                 </div>
                 <div className='form-group d-flex align-items-center gap-5'>
                <span onClick={()=>setRating(1)}>1<i className='ri-star-s-fill'></i></span>
                <span onClick={()=>setRating(2)}>2<i className='ri-star-s-fill'></i></span>
                <span onClick={()=>setRating(3)}>3<i className='ri-star-s-fill'></i></span>
                <span onClick={()=>setRating(4)}>4<i className='ri-star-s-fill'></i></span>
                <span onClick={()=>setRating(5)}>5<i className='ri-star-s-fill'></i></span>
                 </div>
                 <div className='form-group'>
                  <textarea ref={reviewmsg} rows={4}  type="text" placeholder="Review Message..."></textarea>
                 </div>
                 <button type='submit' className='buy-btn'> Kaydet</button>
              </form>
            </div>
          </div>
        </div>
  
      }
     
    </Col>
    <Col lg='12'>
      <h2 className='related-title'>Ayrıca bunları görmek isteyebilirsiniz</h2>
    </Col>
    <ProductList data={relatedProducts}/>
  </Row>
 </Container>
</section>
</Helmet>
  )
}

export default ProductDetail
