import React, {useState} from "react";
import App from "./App"






export default function Apod(props) {
    const {imgData} = props

    return (
        <div className='container'>
            <h1> Nasa Photo of the Day!</h1>
            <h3> {imgData.date}</h3>
            <img src={imgData.url} alt="Nasa Photo of the Day" />
            <h2>{imgData.title}</h2>
            <p>{imgData.explanation}</p>
        </div>
    )

}

