import React from 'react';
import './MousemoveProjects.css';
import Parallax from 'parallax-js';
import { useEffect, useRef } from 'react';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

export default function MousemoveProjects(){
    return(
        <MouseParallaxContainer className='mouse-containerP'>
            <MouseParallaxChild factorX={-0.2} factorY={-0.2} >
                <span className='textP'>S</span>
            </MouseParallaxChild>
            <MouseParallaxChild factorX={-0.2} factorY={-0.2}>
                <span className='textP'>K</span>
            </MouseParallaxChild>
            <MouseParallaxChild factorX={-0.2} factorY={-0.2}>
                <span className='textP'>I</span>
            </MouseParallaxChild>
            <MouseParallaxChild factorX={-0.2} factorY={-0.2}>
                <span className='textP'>L</span>
            </MouseParallaxChild>
            <MouseParallaxChild factorX={-0.2} factorY={-0.2}>
                <span className='textP'>L</span>
            </MouseParallaxChild>
            <MouseParallaxChild factorX={-0.2} factorY={-0.2}>
                <span className='textP'>S</span>
            </MouseParallaxChild>
        </MouseParallaxContainer>
    )
}