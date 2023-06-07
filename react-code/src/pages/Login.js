import React from 'react'
import { useState } from 'react'
import Helmet from '../component/Helmet/Helmet'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/login.css'
import { Container,Row,Col,Form,FormGroup } from 'reactstrap'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase.config'
import {toast} from 'react-toastify'
const Login = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate()
  const signIn=async (e)=>{
    e.preventDefault()
    setLoading(true)
    try {
      const userCredential=await signInWithEmailAndPassword(auth,email,password)
    const user=userCredential.user
    setLoading(false)
    toast.success('successfully loading')
    navigate('/checkout')
    console.log(user)
    } catch (error) {
      setLoading(false)
      toast.error(error.message)
    }
  }
  return (
<Helmet title='Login'>
<section>
  <Container>
    
   <Row>  
    {
      loading ? <Col lg='12' className='text-center'><h5 className='fw-bold'>yükleniyor...</h5></Col> :    <Col lg='6' className='m-auto text-center'>
      <h3 className='fw-bold mb-4'>Giriş</h3>
      <Form className='auth-form' onSubmit={signIn}>
        <FormGroup className='form-group'>
          <input type='email' placeholder='Enter your mail' value={email} onChange={e=>setEmail(e.target.value)}></input>
        </FormGroup>
        <FormGroup className='form-group'>
          <input type='password' placeholder='enter your password' value={password} onChange={e=>setPassword(e.target.value)}></input>
        </FormGroup>
        <button type='submit' className='buy-button auth-btn'>Giriş</button>
        <p>Eğer hala bir hesabınız yoksa...  <Link to='/signup'>Bir hesap oluştur</Link></p>
      </Form>
      </Col>
    }
    </Row>
  
  </Container>
  
</section>
</Helmet>
  )
}

export default Login
