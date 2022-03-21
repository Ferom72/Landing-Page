import '../CSS/StyleSheet.css'
import React from 'react'
import styled from 'styled-components'


function Project_Cards(props){
    
    const CardsContainer = styled.div`
        background: #16e0bd;
        color: white;
        outline-style: solid;
        outline-color: rgba(0, 0, 0, 0.7);
        width: 270px;
        margin: 10px;
        border-radius: 15px;
        text-align:center;

        &:hover{
            box-shadow: 5px 5px 15px  rgba(0, 0, 0, 0.9);
            transition: 0.5s;
            cursor: pointer;
        }
    `

    const Title = styled.h3`
        padding: 1em;
    `
   
    const ImageContainer = styled.div`
        background-color: aqua;
        height: 200px;
        margin-bottom: 15px;
        background-size: cover;
        background-image: url(${props.pic});
        border-radius: 15px 15px 0 0;
    `

    return(
        <CardsContainer>
            <ImageContainer></ImageContainer>
                <Title>{props.name}</Title>
                {/* <p>{props.disc}</p> */}
        </CardsContainer>
    )
}

export default Project_Cards