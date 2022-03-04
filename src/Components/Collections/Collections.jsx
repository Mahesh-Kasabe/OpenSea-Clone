import React, { useState, useEffect, useMemo } from 'react'
import bg from "../../../assets/bg.jpg"
import pf from "../../../assets/unnamed.png"
import nft1 from "../../../assets/unnamed.png"
import "./collection.css"
import { BiHeart } from "react-icons/bi"
import axios from "axios"

const Collections = () => {
    const [nfts, setNFTS] = useState([])

    useEffect(() => {
        const getNft = async() => {
             const Data = await axios.get('https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=0xE60348DF7838202429A639b16964C34C512BCE09&order_direction=asc')
             setNFTS(Data.data.assets);
             console.log(Data.data.assets);
        }
        return getNft();
    }, [])
    
    return (
        <div className='collection'>

            <div className='back'>
                <img src={bg} alt='' id='bgimg' />
                <img src={pf} alt='' id='profile' />
                <h1>Zombie Ape Yacht Club</h1>
                <p> created by <a href='#home'> mahi </a> </p>
                <div className='infobox'>
                    <div id='1'>
                        <p>{nfts.length} <br /> items</p>
                    </div>
                    <div id='2'>
                        <p> 1 <br /> owners</p>
                    </div>
                    <div id='3'>
                        <p> 0 <br /> floor price</p>
                    </div>
                    <div id='4'>
                        <p> 22.5k <br /> volume traded</p>
                    </div>

                </div>

                <p className='desc'> The Zombie Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs </p>
            </div>

            <div className='nfts'>
                {
                    nfts.map((nft) => {
                    return (
                    <div className='nft'>
                        <img src={nft.image_preview_url} alt='' />
                        <div className='card'>
                            <p> {nft.asset_contract.name} <br /> {nft.name} </p>
                            <p id='price'>{nft.traits}</p>
                            <BiHeart className='heart' />
                        </div>
                    </div>
                    )
   
                    })
                }
                
            </div>
        </div>
    )
}

export default Collections