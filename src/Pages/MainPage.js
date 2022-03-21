import React from 'react'
import Header from '../Components/Header'
import Introduction from '../Components/Introduction'
import Footer from '../Components/Footer'
import Summary from './Summary'

function MainPage(){
    return(
        <div>
            <Header/>
            <Introduction/>
            <Summary/>
            <Footer/>
        </div>
    )
}

export default MainPage