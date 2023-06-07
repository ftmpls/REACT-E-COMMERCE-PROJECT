import React from 'react'
import './footer.css'
import { Container,Row,Col,ListGroup,ListGroupItem } from 'reactstrap'
import {Link} from 'react-router-dom';
import logo from '../../assets/images/eco-logo.png';
const Footer = () => {
  const year=new Date().getFullYear()
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4'>
          <div className='logo '>
           
            <div><h1 className='text-white'>Shopping</h1>
           
            </div>                  
          </div>
          <p className='footer-text mt-4'>
            
            </p>
          </Col>
          <Col lg='3' >
          
          <div className='footer-quick-links'>
            <h4 className='footer-quick-links-title'>Top Category</h4>
            <ListGroup className='mb-3'>
              <ListGroupItem className='ps-0 border-0 '>
                <Link to='#'>Mobile phones</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 '>
                <Link to='#'>Modern Safa</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 '>
                <Link to='#'>Arm chair</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 '>
                <Link to='#'>Smart Watching</Link>
              </ListGroupItem>
            </ListGroup>
            </div>
          </Col>
          <Col lg='2'>
          <div className='footer-quick-links'>
            <h4 className='footer-quick-links-title'>Userful Links</h4>
            <ListGroup className='mb-3'>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='/shop'>Shop</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='/cart'>Cart</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='/Login'>Login</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Privacy Policy</Link>
              </ListGroupItem>
            </ListGroup>
            </div>
          </Col>
          <Col lg='3'>
          <div className='footer-quick-links'>
            <h4 className='footer-quick-links-title'>Contact</h4>
            <ListGroup className=' footer-contact'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
               <span>
                <i className='ri-map-pin-line'></i>
               </span>
               <p>123,Zindabazar</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
              <span>
                <i className='ri-phone-line'></i>
               </span>
               <p>05252627</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
              <span>
                <i className='ri-mail-line'></i>
               </span>
               <p>example@gmail.com</p>
              </ListGroupItem>

            </ListGroup>
            </div>
          </Col>
          <Col lg='12'>
            <p className='footer-copyright'>Copy right {year} developed by Fatma Ünal</p>
          </Col>

        </Row>
      </Container>
    </footer>
  )
}

export default Footer
