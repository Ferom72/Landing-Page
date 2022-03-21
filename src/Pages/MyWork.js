import React from 'react'
import {Link} from 'react-router-dom'
import '../CSS/StyleSheet.css'
import styled from 'styled-components'
import Header from '../Components/Header'
import Project_Cards from '../Components/Project_Cards'
import Pokedex from '../Images/Pokedex.PNG'
import QForm from '../Images/QuestionForm.jpg'
import NetFlix from '../Images/Netflix.jpg'
import SignIn_Out from '../Images/SignIn_LogOut.jpg'
import Land from '../Images/Landing_Page.PNG'
import Java_Project from '../Images/Java_project.PNG'
import MiniComputer from '../Images/MiniComputer.PNG'
import MovieSearchApp from '../Images/MovieSearchApp.PNG'


function MyWork(){

    const CardHolder = styled.div`
        display: flex;
        justify-content:center;
    `

    return(
        <>
         <Header/>
         <section className="my-work" id="work">
            <h2 className="section_title">My work</h2>
         </section>
         <CardHolder>
            <a className='link' href='https://github.com/Ferom72/Netflix-Clone'><Project_Cards name = 'Pokedex Concept' pic = {Pokedex} disc ='It is a pokedex which stores infromation on certain type of monster'/></a>
            <a className='link' href='https://github.com/Ferom72/Form'><Project_Cards name = 'Question Form' pic = {QForm} disc ='Its is a basic form that ask for your info and then asks you some questions'/></a>
            <a className='link' href='https://github.com/Ferom72/Netflix-Clone'><Project_Cards name = 'Netflix Clone' pic = {NetFlix} disc = 'Its a replica of Netflix, which uses api and firebase.'/></a>
            <a className='link' href='https://github.com/Ferom72/Login-Page'><Project_Cards name = 'Login Page' pic = {SignIn_Out} disc = 'Login and Signout'/></a>
         </CardHolder>

         <CardHolder>
         <a className='link' href='https://github.com/Ferom72/Movie-Search-App'><Project_Cards name = 'Movie App' pic = {MovieSearchApp} disc='It works with an api that gives you different movie titles when you search them up with their information'/></a>
         <a className='link' href='https://github.com/Ferom72/Mini-Computer'><Project_Cards name = 'Mini Computer' pic = {MiniComputer} disc='Its a basic computer with a lexical analyzer and virtual machine.'/></a>
         <a className='link' href='https://github.com/Ferom72/Mini-Computer'><Project_Cards name = 'Landing Page' pic = {Land} disc='Landing'/></a>
         <a className='link' href='https://github.com/Ferom72/Scraggle-'><Project_Cards name = 'Scraggle Game' pic = {Java_Project} disc='Its a game of scraggle made in Java'/></a>
         </CardHolder>
        </>
    )
}

export default MyWork