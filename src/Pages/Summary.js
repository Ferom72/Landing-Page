import React from 'react'

function Summary(){
    return(
        <section className='summary-section'>
            <h2 className='summary-title'>SUMMARY</h2>
            <div className='summary-container'>
                <div className='summary-info'>
                    <p> 
                        Hello my name is Felipe Romero, I'm a student at the University of Central Florida seeking a bachelor's
                        in Computer Science. Currently Im looking to gain knowledge and exprience by looking for internships at 
                        amazing companies. 
                    </p>
                </div>

                <div className='summary-info'>
                    <p>
                        I like making Full Stack Projects and figuring out coding problems. Listed below are the languages and 
                        libraries that I know/learning :

                        <ul>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>SQL</li>
                            <li>CSS</li>
                            <li>HTMl</li>
                            <li>JavaScript</li>
                            <li>Java</li>
                            <li>C</li>
                        </ul>
                        
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Summary