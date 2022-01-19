import React from 'react';
import './MousemoveProjects.css';
import Parallax from 'parallax-js';
import { useEffect, useRef } from 'react';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

export default function MousemoveProjects(){
    return(
        <MouseParallaxContainer className='mouse-containerP'>
            <MouseParallaxChild factorX={-0.2} factorY={-0.2} >
                <span className='textP'>P</span>
            </MouseParallaxChild>
            <MouseParallaxChild factorX={-0.2} factorY={-0.2}>
                <span className='textP'>R</span>
            </MouseParallaxChild>
            <MouseParallaxChild factorX={-0.2} factorY={-0.2}>
                <span className='textP'>O</span>
            </MouseParallaxChild>
            <MouseParallaxChild factorX={-0.2} factorY={-0.2}>
                <span className='textP'>J</span>
            </MouseParallaxChild>
            <MouseParallaxChild factorX={-0.2} factorY={-0.2}>
                <span className='textP'>E</span>
            </MouseParallaxChild>
            <MouseParallaxChild factorX={-0.2} factorY={-0.2}>
                <span className='textP'>C</span>
            </MouseParallaxChild>
            <MouseParallaxChild factorX={-0.2} factorY={-0.2}>
                <span className='textP'>T</span>
            </MouseParallaxChild>
            <MouseParallaxChild factorX={-0.2} factorY={-0.2}>
                <span className='textP'>S</span>
            </MouseParallaxChild>
        </MouseParallaxContainer>
    )
}