import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import { motion } from 'framer-motion'
import './hizmet.css'
import serviceData from '../assets/data/serviceData'
const Hizmet = () => {
  return (
    <div>
        <section className='hizmetler'>
          <Container>
        <Row>
          {
            serviceData.map((data,index)=>            
            <Col lg='3' md='4' key={index}>
            <motion.div whileHover={{scale:1.1}} className='services-item' style={{background: `${data.bg}` }}>
                <span>
                    <i className={data.icon}></i>
                </span>
                <div>
                 <h3>{data.title}</h3>
                 <p>{data.subtitle}</p>
                </div>
            </motion.div>
        </Col>)
          }

        </Row>
    </Container>
    </section>
    </div>
  )
}

export default Hizmet
