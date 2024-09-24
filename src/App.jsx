import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Mainpage from './Components/Mainpage/mainpage'
import Footer from './Components/Footer/Footer'
import Ourcustomer from './Components/Ourcustomer/Ourcustomer'
import Header from './assets/Picture/bangkoks.jpg'

const App = () => {
  return (

    <><div className='container'>
       <img src={Header} alt="" />
     </div>
     <div>
     
        <Navbar />
        <Mainpage />
        <Footer />
        <Ourcustomer />
      </div></>
  )
}

export default App