import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import MainRight from './MainRight'

export default function Page(){
    return (
        <div className='main-home'>
          <Header/>
          <Main/>
          <MainRight/>
          <Footer/>
        </div>
      )
}