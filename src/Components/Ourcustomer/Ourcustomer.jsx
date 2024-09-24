import React from 'react'
import './Ourcustomer.css'
import BBL from '../../assets/Picture/BBL.jpg'
import SCB from '../../assets/Picture/SCB.png'
import UOB from '../../assets/Picture/UOB.png'


const Ourcustomer = () => {
  return (
    <>
    <div>Ourcustomer</div>
    <div className='customer'>
        <img src={BBL} alt="" />
        <img src={SCB} alt="" />
        <img src={UOB} alt="" />
    </div>
    </>
  )
}

export default Ourcustomer