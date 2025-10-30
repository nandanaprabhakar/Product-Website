import React from 'react'
import { LuInstagram } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { RiFacebookCircleLine } from "react-icons/ri";
import { LuTwitter } from "react-icons/lu";
function Footer() {
  return (
    <div>
      <div className="row" style={{background:'black',height:'230px'}}>
        <div className="col-4"></div>
        <div className="col-4">
          <h4 className='text-center mt-5'><LuInstagram /> <FaWhatsapp /> <RiFacebookCircleLine /> <LuTwitter /></h4>
          <h3 className='text-center mt-3 mb-5'>Contact us:hello@luxury.cosmetics</h3>
          <h5></h5>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  )
}

export default Footer