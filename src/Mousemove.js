import React from 'react';
import './Mousemove.css';
import Parallax from 'parallax-js';
import { useEffect, useRef } from 'react';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

export default function Mousemove(){
    return(
        <MouseParallaxContainer className='mouse-container'>
            <MouseParallaxChild factorX={-0.2} factorY={-0.2} >
                <span className='text'>A</span>
            </MouseParallaxChild>
            <MouseParallaxChild factorX={-0.2} factorY={-0.2}>
                <span className='text'>B</span>
            </MouseParallaxChild>
            <MouseParallaxChild factorX={-0.2} factorY={-0.2}>
                <span className='text'>O</span>
            </MouseParallaxChild>
            <MouseParallaxChild factorX={-0.2} factorY={-0.2}>
                <span className='text'>U</span>
            </MouseParallaxChild>
            <MouseParallaxChild factorX={-0.2} factorY={-0.2}>
                <span className='text'>T</span>
            </MouseParallaxChild>
        </MouseParallaxContainer>
    )
}