import React from "react";
import styled from "styled-components"

const Container = styled.div`

    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.tertiaryColor};
    color: ${props => props.theme.secondaryColor};
`

const NasaImage = styled.img`
    height: 60%;
    border-radius: 3.5rem;
`
const Header1 = styled.h1`

    width: 100%;
    height: 5%;
    background-color: ${props => props.theme.primaryColor};
`

const Paragraph = styled.p`
    width: 85%;
    margin: 0 auto;
    padding: 1%;
    background-color: ${props => props.theme.primaryColor};
    border-radius: 1.5rem;
`

export default function Apod(props) {
    const {imgData} = props

    return (
        <Container>
            <Header1> NASA Photo of the Day!</Header1>
            <h3> {imgData.date}</h3>
            <NasaImage src={imgData.url} alt="Nasa Photo of the Day" />
            <h2>{imgData.title}</h2>
            <Paragraph>{imgData.explanation}</Paragraph>
        </Container>
    )

}

