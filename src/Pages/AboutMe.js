import '../CSS/StyleSheet.css'
import Header from '../Components/Header'
import React from 'react'

function AboutMe(){
    return(
        <>
            <Header/>
            <section className="about-me" id="about">
                <h2 className="section_title section_title--intro">Who am I?</h2>
                <p className="section_subtitle section_subtitle--about">
                    A Full Stack Dev & Software Developer 
                </p>
            </section>
            <div className='aboutMe-container'>
                <div className='aboutMe-info'>
                    <p>
                        I was born in Havanna,Cuba but I was raised in Miami, Florida. I started to code when I was a junior in highschool and immediately 
                        loved it. Right now I'm a junior at the University of Central Florida looking to find work exprience and knowledge through internships 
                        to further develop my skills in computer science. I really enjoy, doing coding projects in groups because I like seeing how different people
                        approach the same problem because it lets me learn how to aprroach a problem in different ways other than what I was thinking.
                    </p>
                </div>

                <div className='aboutMe-info'>
                    
                    
                </div>
            </div>
        </>
    )
}

export default AboutMe