import '../CSS/StyleSheet.css'
import {Link} from 'react-router-dom'
import React from 'react'

function Header(){

    const hamburger = () =>{
        document.body.classList.toggle('nav-open')
    }

    const hamburgerClose = () =>{
        document.body.classList.remove('nav-open')
    }

    return(
        <section className='header'>
            <div>
                <h3>{`<Felipe Romero>`}</h3>
            </div>
            <button className ='nav-toggle' onClick={hamburger} aria-label ='toggle navigation'>
                <span className='hamburger'></span>
            </button>
            <nav className = 'nav'>
                <ul className = 'nav_list'>
                    <li class="nav_item"><Link to = '/' class="nav_link" onClick={hamburgerClose}>Home</Link></li>
                    <li class="nav_item"><Link to = '/aboutMe' class="nav_link" onClick={hamburgerClose}>About me</Link></li>
                    <li class="nav_item"><Link to = '/myWork' class="nav_link" onClick={hamburgerClose}>My Work</Link></li>
                </ul>
            </nav>
        </section>
    )
}

export default Header