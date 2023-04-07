import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.css'

const Header = () => {
    const navigate = useNavigate();
    const [toggle, settoggle]=useState(false)
    const homeclick=()=>{
     navigate('/')   
    }
    const bollywoodclick=()=>{
        navigate('/bollywood')   
       }
       const technologyclick=()=>{
        navigate('/technology')   
       }
       const hollywoodclick=()=>{
        navigate('/hollywood')   
       }
       const fitnessclick=()=>{
        navigate('/fitness')   
       }
       const foodclick=()=>{
        navigate('/food')   
       }
       const hidenav=()=>{
        settoggle(!toggle)
       }
    return (
        <div className='navbar-head'>
            <div className='heading'>
                <span className='the'>The</span>
                <span className='sieren'>Sieren</span>
            </div>
           
            <div className='navbar'>
                <span className={toggle ? 'mobile-view' : 'navbar-span'} onClick={homeclick}>Home</span>
                <span className={toggle ? 'mobile-view' : 'navbar-span'} onClick={bollywoodclick}>Bollywood</span>
                <span className={toggle ? 'mobile-view' : 'navbar-span'} onClick={technologyclick}>Technology</span>
                <span className={toggle ? 'mobile-view' : 'navbar-span'} onClick={hollywoodclick}>Hollywood</span>
                <span className={toggle ? 'mobile-view' : 'navbar-span'} onClick={fitnessclick}>Fitness</span>
                <span className={toggle ? 'mobile-view' : 'navbar-span'} onClick={foodclick}>Food</span>
                <span className='hide-nav-btn' onClick={hidenav}>|||</span>
            </div>
            


        </div>
    )
}

export default Header