import {React,useState,useEffect} from 'react'
import CommonSection from '../component/UI/CommonSection'
import Helmet from '../component/Helmet/Helmet'
import { Container,Row,Col } from 'reactstrap'
import '../styles/shop.css'
import products from '../assets/data/products'
import ProductList from '../component/UI/ProductList'
const Shop = () => {
  const [productsData,setProductsData]=useState(products)
  const handleFilter=(e)=>{
    const filterValue=e.target.value
    if(filterValue==='bilgisayar'){
      const filteredProducts=products.filter(item=>item.category==='bilgisayar')
    setProductsData(filteredProducts)
    }
    if(filterValue==='mobile'){
      const filteredProducts=products.filter(item=>item.category==='mobile')
    setProductsData(filteredProducts)
    }
    if(filterValue==='tablet'){
      const filteredProducts=products.filter(item=>item.category==='tablet')
    setProductsData(filteredProducts)
    }
    if(filterValue==='watch'){
      const filteredProducts=products.filter(item=>item.category==='watch')
    setProductsData(filteredProducts)
    }
    if(filterValue==='wireless'){
      const filteredProducts=products.filter(item=>item.category==='wireless')
    setProductsData(filteredProducts)
    }
 
  }
  const handlechange=(e)=>{
const searchTerm=e.target.value;
const searchProducts=products.filter(item=>item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
 setProductsData(searchProducts);
  }
  
  return (
    <Helmet title='Shop'>
      
      <CommonSection title="Products"></CommonSection>
    <section>
      <Container>
        <Row>
          <Col lg='3' md='6'>
            <div className='filter-widget'>
              <select onChange={handleFilter}>
              <option >Filter by category</option>
                <option value="telefon">Telefon</option>
                <option value="bilgisayar">Bilgisayar</option>
                <option value="tablet">Tablet</option>
                <option value="watch">Watch</option>
                <option value="wireless">Wireless</option>
              </select>
            </div>
          
          
          </Col>
          <Col lg='3' md='6' className='text-end'>
          <div className='filter-widget'>
              <select name="" id="">
              <option >Sort by category</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
          
              </select>
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className='search-box'>
              <input type='text' placeholder='search...' onChange={handlechange}></input>
           <span>
            <i className='ri-search-line'></i>
            </span>
            </div>
          </Col>
         
        </Row>
      </Container>
    </section>
    <section className='pt-0'>
      <Container>
        <Row>
          {productsData.length===0 ? <h1>no products are found</h1> :
          <ProductList data={productsData}/>
          }
        </Row>
      </Container>
    </section>
    </Helmet>
  )
}

export default Shop;
