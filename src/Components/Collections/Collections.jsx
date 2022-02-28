import React from 'react'
import bg from "../../../assets/bg.jpg"
import pf from "../../../assets/unnamed.png"
import nft1 from "../../../assets/unnamed.png"
import nft2 from "../../../assets/unnamed (1).png"
import "./collection.css"
import { BiHeart } from "react-icons/bi" 

const Collections = () => {
    return (
        <div className='collection'>

            <div className='back'>
                <img src={bg} alt='' id='bgimg' />
                <img src={pf} alt='' id='profile' />
                <h1>Zombie Ape Yacht Club</h1>
                <p> created by <a href='#home'> mahi </a> </p>
                <div className='infobox'>
                    <div id='1'>
                        <p>18 <br /> items</p>
                    </div>
                    <div id='2'>
                        <p> 1 <br /> owners</p>
                    </div>
                    <div id='3'>
                        <p>93 <br /> floor price</p>
                    </div>
                    <div id='4'>
                        <p> 22.5k <br /> volume traded</p>
                    </div>

                </div>

                <p className='desc'> The Zombie Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs </p>
            </div>

            <div className='nfts'>
                <div className='nft'>
                    <img src={nft1} alt='' />
                    <div className='card'>
                        <p>Zombie Ape yacht club <br /> #2312 </p>
                        <BiHeart className='heart' />
                    </div>
                </div>


                <div className='nft'>
                    <img src={nft2} alt='' />
                    <div className='card'>
                        <p>Zombie Ape yacht club <br /> #2312 </p>
                        <BiHeart className='heart' />
                    </div>
                </div>

                <div className='nft'>
                    <img src={nft2} alt='' />
                    <div className='card'>
                        <p>Zombie Ape yacht club <br /> #2312 </p>
                        <BiHeart className='heart' />
                    </div>
                </div>

                <div className='nft'>
                    <img src={nft2} alt='' />
                    <div className='card'>
                        <p>Zombie Ape yacht club <br /> #2312 </p>
                        <BiHeart className='heart' />
                    </div>
                </div>

            </div>
            <div className='nfts'>
                <div className='nft'>
                    <img src={nft1} alt='' />
                    <div className='card'>
                        <p>Zombie Ape yacht club <br /> #2312 </p>
                        <BiHeart className='heart' />
                    </div>
                </div>


                <div className='nft'>
                    <img src={nft2} alt='' />
                    <div className='card'>
                        <p>Zombie Ape yacht club <br /> #2312 </p>
                        <BiHeart className='heart' />
                    </div>
                </div>

                <div className='nft'>
                    <img src={nft2} alt='' />
                    <div className='card'>
                        <p>Zombie Ape yacht club <br /> #2312 </p>
                        <BiHeart className='heart' />
                    </div>
                </div>

                <div className='nft'>
                    <img src={nft2} alt='' />
                    <div className='card'>
                        <p>Zombie Ape yacht club <br /> #2312 </p>
                        <BiHeart className='heart' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Collections