import React from 'react'
import { Container,Row,Col,Form,FormGroup } from 'reactstrap'
import Helmet from '../component/Helmet/Helmet'
import '../styles/checkout.css'
import CommonSection from '../component/UI/CommonSection'
import { useSelector } from 'react-redux'
const Checkout = () => {
  const totalQty=useSelector(state=>state.cart.totalQuantity)
  const totalAmount=useSelector(state=>state.cart.totalAmount)
  return (
    <Helmet title="Checkout">
      <CommonSection title="Ödeme Sayfası"></CommonSection>
   <section>
    <Container>
      <Row>
<Col lg='8'>
  <h6 className='mb-4 fw-bold'>Fatura Bilgisi</h6>

<Form className='billing-form'>
  <FormGroup className='form-group'>
<input type='text' placeholder='İsminizi girin '></input>

  </FormGroup>
  <FormGroup className='form-group'>
<input type='email' placeholder='Mail adresinizi girin '></input>

  </FormGroup>
  <FormGroup className='form-group'>
<input type='text' placeholder='Adresinizi girin '></input>

  </FormGroup>
  <FormGroup className='form-group'>
<input type='number' placeholder='Telefon numaranızı girin '></input>

  </FormGroup>
  <FormGroup className='form-group'>
<input type='text' placeholder='Şehrinizi girin'></input>

  </FormGroup>
  <FormGroup className='form-group'>
<input type='text' placeholder='Posta kodunuzu girin'></input>

  </FormGroup>
  <FormGroup className='form-group'>
<input type='text' placeholder='Ülkenizi girin '></input>

  </FormGroup>
</Form>
</Col>
<Col lg='4'>
  <div className='checkout-cart'>
    <h6>Toplam ürün sayısı:<span>{totalQty} ürün</span></h6>
    <h6>Toplam:<span>${totalAmount}</span></h6>
    <h6><span>Alışveriş:<br/>Ücretsiz kargo</span><span>$0</span></h6>
 
    <h4>Total cost:<span>${totalAmount}</span></h4>
    <button className='buy-button auth-btn w-100 '> Sipariş ver </button>
  </div>

</Col>
      </Row>
    </Container>
   </section>
    </Helmet>
  )
}

export default Checkout
