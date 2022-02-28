import React from 'react'
import logo from "../../assets/opensea.png"
import { CgProfile } from "react-icons/cg"
import { MdOutlineAccountBalanceWallet } from "react-icons/md"
import { AiOutlineSearch } from 'react-icons/ai'
import "./navbar.css"
import { useNavigate } from "react-router-dom"


const Navbar = () => {
  let navigate = useNavigate();

    return (
    <div className="navbar">
        <div className='logo-txt'>
            <img src={logo} alt='' />
            <h1>OpenSea</h1>
        </div>
        
        <div className='search'>
            <AiOutlineSearch className='icon' />    
        
            <div className='bar'>
            <input type="search" placeholder=' Search OpeanSea' />
            </div>
        
        </div>
        
        <p onClick={() => {navigate("/collections")}}>Explore</p>
        <p>Stats</p>
        <p>Resources</p>
        <p>Create</p>
        <CgProfile className="profile"/>
        <MdOutlineAccountBalanceWallet className="wallet" />
    </div>
  )
}

export default Navbar