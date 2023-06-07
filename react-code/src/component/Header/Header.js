import './Header.css';
import { motion } from 'framer-motion';
import {React,useRef,useEffect} from 'react';
import logo from '../../assets/images/eco-logo.png';
import userIcon from '../../assets/images/user-icon.png';
import { Container,Row } from 'reactstrap';
import { Link, NavLink ,useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import useAuth from '../../custom-hooks/useAuth';
import {signOut} from 'firebase/auth';
import { auth } from "../../firebase.config";

 const nav_links=[
  {
  path:'home',
  display:'Anasayfa'},
  {
    path:'shop',
    display:'Alışveriş'},
    {
      path:'cart',
      display:'Sepet'},
   {
    path:'login',
    display:'Giris'
   }
]


const Header = () => {

  const headerRef=useRef(null);
  const totalQuantity=useSelector(state=>state.cart.totalQuantity);
const profileActionRef=useRef(null)
  const menuRef=useRef(null);
  const navigate=useNavigate();
  const {currentUser}=useAuth();
  const stickyHeaderFunc=() =>{window.addEventListener('scroll',()=>{
    if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
      headerRef.current.classList.add('sticky-header')
    }
    else{
    headerRef.current.classList.remove('sticky-header')  
    }
  })} ;
  const logout = ()=>{
    signOut(auth).then(()=>{navigate('/home')}).catch(err=>{
  
    })
  }
  useEffect(()=>{
    stickyHeaderFunc();
    
    return()=>window.removeEventListener('scroll',stickyHeaderFunc)
  });
  const menuToggle=()=>
  menuRef.current.classList.toggle('active-menu')
  const navigateToCart=()=>{
    navigate("/cart")
  };
  const toggleProfileActions=()=>profileActionRef.current.classList.toggle('show-profileActions')
  return(
   <header className='header ' ref={headerRef}>
    <Container>
      <Row>
        <div className='nav_wrapper '>
          <div className='logo '>
            <img src={logo} alt="logo"/>
            <div><h1>Alisveris</h1>
 
            </div>
           
           
          </div>
          <div className='navigation' ref={menuRef} onClick={menuToggle}>
            <ul className='menu'>
                {
                nav_links.map((item,index)=> <li className='nav-item' key={index
               }>
                 <NavLink to={item.path} className={({ isActive }) => isActive ? 'nav-active' : ''} >{item.display}</NavLink>
      
               </li>)
                }
            </ul>
          </div>
          <div className='nav-icons'>
          <span className='fav-icon'>
              <i class='ri-heart-line'></i>
              <span className='badge'>2</span>
            </span>
            <span className='cart-icon' onClick={navigateToCart}>
              <i class='ri-shopping-bag-line'></i>
              <span className='badge'>{totalQuantity}</span>
            </span>
          <div className='profile'><motion.img whileTap={{scale:1.3}} src={currentUser? currentUser.photoURL:  userIcon} alt='' onClick={toggleProfileActions}/>
       <div className='profile-actions' ref={profileActionRef} onClick={toggleProfileActions}>
        {currentUser ? ( <span onClick={logout}>LogOut</span>) : (<div className='d-flex align-items-center justify-content-center flex-column'>
          <Link to="/signup"> SignUp</Link>
          <Link to="/login"> Login</Link>
          </div>)
          }
       </div>
            </div>
            <div className='mobile_menu'>
            <span onClick={menuToggle}><i className='ri-menu-line'></i></span>
          </div>
          </div>

        </div>
        
      </Row>
    </Container>
    
    
    </header>
  )
  
};

export default Header;
