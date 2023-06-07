import React from 'react'
import { useState, useEffect} from 'react'
import Helmet from '../component/Helmet/Helmet'
import { Container,Row,Col } from 'reactstrap'
import heroImg from '../assets/images/hepsi2.jpg'
import '../styles/home.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Hizmet from '../hizmet/Hizmet'
import ProductList from '../component/UI/ProductList'
import products from '../assets/data/products'


const Home = () => {
const [data,setData]=useState(products)
const [bestProduct,setBestProduct]=useState([]);
const [mobileProducts,setMobileProducts]=useState([]);
const [wirelessProducts,setWirelessProducts]=useState([]);
const [popularProducts,setPopularProducts]=useState([]);

const year=new Date().getFullYear()
useEffect(()=>{
  const filteredProducts=products.filter(item=> item.category==="bilgisayar");
 const bestfilteredProducts=products.filter(item=>item.category==="tablet")
 const filteredMobileProducts=products.filter(item=> item.category==="telefon");
 
 const filteredWirelessProducts=products.filter(item=> item.category==="wireless");
 const filteredPopularProducts=products.filter(item=>item.category==='saat')
 setData(filteredProducts);
setBestProduct(bestfilteredProducts);
setWirelessProducts(filteredWirelessProducts);
setMobileProducts(filteredMobileProducts);
setPopularProducts(filteredPopularProducts)
},[]);
 return (
<Helmet title={'Home'}>
  <section className='hero-section'>

    <Container> 
      <Row>
        <Col lg='6' md='6'>
          <div className='hero-content '>
            <p className='hero-subtitle'> Trend ürünler {year}</p>
          <h2>Yeni modern ürünleri seç</h2>
          
 
          <p>Sana ve trende uygun en ekonomik modernler ürünleri seç</p> 
 <motion.button whileTap={{scale: 1.2}} className='buy-button'><Link to='/shop'>Şimdi al</Link></motion.button>
        </div>
        </Col>
        <Col lg='6' md='6'>
<div className='hero-image'>
  <img src={heroImg} alt=""></img>
</div>

        </Col>
      </Row>
    </Container>
  </section>
<Hizmet/>
<section className='trend-urun'>
  <Container>
    <Row>
      <Col lg='12' className='text-center'>
        <h2 className='section-title'>Trend Ürünler</h2>
      </Col>
      <ProductList data={data}/>
    </Row>
  </Container>
</section>
<section className='best-saller'>
<Container>
    <Row>
      <Col lg='12' className='text-center'>
        <h2 className='section-title'>En çok satanlar</h2>
      </Col>
      <ProductList data={bestProduct}/>
     
    </Row>
  </Container>
</section>
{/* <section className='timer-count'>
  <Container>
    <Row>
      <Col lg='6' md='6'>
        <div className='clock-top-content'>
          <h4 className='text-white fs-6 mb-2'> Limited Offer</h4>
          <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
        </div>
        <Clock/>
        <motion.button whileTap={{scale:1.2}} className='buy-button store-btn'>
          <Link to='/shop'>Visit</Link>
        </motion.button>
      </Col>
      <Col lg='6' md='6' className='text-end'>

        <img src={counterImg} alt=''></img>
      </Col>
    </Row>
  </Container>
</section> */}
<section className='new-arrivals'>
 <Container>
  <Row>
    <Col lg='12' className='text-center mb-5'>
      <h2 className='section-title'>Yeni Gelenler</h2>
    </Col>
    <ProductList data={mobileProducts}/>
    <ProductList data={wirelessProducts}/>
  </Row>
 </Container>
</section>
<section className='popular-category'>
  <Container>
  <Row>
    <Col lg='12' className='text-center mb-5'>
      <h2 className='section-title'>Kategoride Populer</h2>
    </Col>
    <ProductList data={popularProducts}/>

  </Row>
  </Container>
</section>
</Helmet>
  )
}

export default Home
