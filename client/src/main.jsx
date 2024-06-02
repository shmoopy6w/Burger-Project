import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import Navbar from './components/Navbar.jsx'
import Burger from './components/Burger.jsx';
import Footer from './components/Footer.jsx';
import "./App.css";
import PopularPackage from './components/PopularPackage.jsx';
import OurChef from './components/OurChef.jsx';
import Statistics from './components/Statistics.jsx';
import ContactForm from './components/ContactForm.jsx';
import Order_now from './components/Order_now.jsx';
import BigBurger from './components/BigBurger.jsx';
import Extra from './components/Extra.jsx';
import Updates from './components/Updates.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path = "/signup" element = {<Signup/>}/>
    <Route path = "/" element = {<Login/>}/>
    <Route path = "/login" element = {<Login/>}/>
    <Route path = "/product" element = {<><Burger/><BigBurger/></>} />
    <Route path = "/promo" element = {<PopularPackage/>}/>
    <Route path = "/about" element = {<><OurChef/><Statistics/><Extra/></>}/>
    <Route path = "/home" element = {<App/>}/>
    <Route path = "/stats" element = {<Statistics/>}/>
    <Route path = "/contact" element = {<ContactForm/>}/>
    <Route path = "/order" element = { <Order_now /> }/> 
    <Route path = "/extra" element = {<Extra/>}/>  
    <Route path = "/updates" element = {<Updates/>}/>      
    </Routes>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
)
// export default function app()


