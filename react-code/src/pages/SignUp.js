import React from 'react'
import { useState } from 'react'
import Helmet from '../component/Helmet/Helmet'
import { Link } from 'react-router-dom'
import '../styles/login.css'
import {  createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../firebase.config'
import {ref,uploadBytesResumable,getDownloadURL} from 'firebase/storage'
import { Container,Row,Col,Form,FormGroup } from 'reactstrap'
import {storage} from '../firebase.config'
import {toast} from 'react-toastify'
import {setDoc,doc} from 'firebase/firestore'
import {db} from '../firebase.config'
import { useNavigate } from 'react-router-dom'
const SignUp = () => {
const navigate=useNavigate()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [userName,setUsername]=useState('')
  const [file,setFile]=useState(null)
  const [loading,setLoading]=useState(false);
    const signup=async(e)=>{
    e.preventDefault();
    setLoading(true);
  try {
    const userCredential=await createUserWithEmailAndPassword(auth,email,password);
    const user=userCredential.user;
    const storageRef=ref(storage,`images/${Date.now()+userName}`)
    const uploadTask=uploadBytesResumable(storageRef,file)
    uploadTask.on((error)=>{toast.error(error.message)},()=>{getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL)=>{
  await updateProfile(user,{displayName:userName,photoURL:downloadURL});
  await setDoc(doc(db,'users',user.uid),{
    uid:user.uid,
    displayName:userName,
    email,
    photoURL:downloadURL,
  })
  })})
setLoading(false)
toast.success('account created')
navigate('/login')
  } catch (error) {
   setLoading(false)
    toast.error('something went wrong')
  }
  }
  return (
<Helmet title='SignUp'>
<section>
  <Container>
    
   <Row> 
 {
loading ? <Col lg='12'className='text-center'><h5 className='fw-bold'>yükleniyor...</h5></Col>:    <Col lg='6' className='m-auto text-center'>
<h3 className='fw-bold mb-4'>Kayıt ol</h3>
<Form className='auth-form' onSubmit={signup}>
<FormGroup className='form-group'>
    <input type='text' placeholder='userName' value={userName} onChange={e=>setUsername(e.target.value)}></input>
  </FormGroup>
  <FormGroup className='form-group'>
    <input type='email' placeholder='Enter your mail' value={email} onChange={e=>setEmail(e.target.value)}></input>
  </FormGroup>
  <FormGroup className='form-group'>
    <input type='password' placeholder='enter your password' value={password} onChange={e=>setPassword(e.target.value)}></input>
  </FormGroup>

  <FormGroup className='form-group'>
    <input type='file'  onChange={e=>setFile(e.target.files[0])}></input>
  </FormGroup>
  <button type='submit' className='buy-button auth-btn'>Kayıt ol</button>
  <p>Eğer hala bir hesabınız yoksa  <Link to='/login'>Hesap oluştur</Link></p>
</Form>
</Col>
 }
  </Row>
  </Container>
  
</section>
</Helmet>
  )
}

export default SignUp;
