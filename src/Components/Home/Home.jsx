import React from 'react'
import bg from "../../../assets/art.png"
import "./home.css"
import { useNavigate } from "react-router-dom"

function Home() {
    let navigate = useNavigate();
  return (
    <div className='home'>
        <div className='bg'>

        </div>
            
        <div className='text'>
            <p>
            Discover, collect, and sell <br/> extraordinary NFTs        
            </p>

            <h1>
            OpenSea is the world's first and <br/> largest NFT marketplace
            </h1>
            <div className='buttons'>
            <button onClick={() => {navigate("/collections")}} className='one' > Explore </button>
            <button className='second'> Create </button>
            </div>
        </div>

        <div className='card'>
            <img src={bg} alt=''/>
            <div className='info'>
                <img src='https://lh3.googleusercontent.com/D4G8qyNkB6lLYpiDsy7HpEjjErxJGoJH8SR_xnbBJNPQdWkfOk1djAQRuSB6j7kLJgSm5c7AuoX8sP-01q5loJg1IG-pYDSVQYju=s80'/>
                <p>Digital Abstraction #93 <br/> <a href='https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/67428853302242778530511456259079558737499986186560837533912873241419486068737'> zannetpodobed </a>  </p>
            </div>
        </div>

        
    </div>
  )
}

export default Home