import React from 'react';
import './About.css';
import styled from 'styled-components';
import Mousemove from '../../Mousemove';
import ImageSlider from '../../ImageSlider';
import { SliderData } from '../../SliderData';

const AboutSectionStyle = styled.div`
    background-color:white;
    padding: 5rem 0;
    .container{
        
        align-items:center;
        justify-content: flex-start;
        text-align:left;
    }
    .about-image-slider{
        display: flex;
    }
    .aboutSection__left,
    .aboutSection__right{
    
        display:flex;
        padding:0 0 10px 0;
    }
    .section-title{
        text-align: left;

    }
    .para{
        margin-top: 2rem;
        margin-left: 0;

    }

`
function About(){
    return(
        <AboutSectionStyle>
        <div>
            <div className='container'>
               <div className='aboutSection__left'>
                   <Mousemove />
               </div>
               <p>
                   Before taking myself into the IT world, my major was Economics Relation at Foreign Trade University. I known me of the old days struggled with stuffs unsatisfied myself. I made one of the most important decisions - being a Software Developer. Although It is quite late, but I believe with our hardworking there's nothing we cannot do.
                    <br />
                    <br />
                   Before studying as an IT student, I majored in Economics Relation at Foreign Trade University which had lots of course developing critical and creative thinkings. Therefore I will never afraid of changes and improvements. And as  I have been a Business student, in some cases, I know how to develop to meet the end user’s satisfaction. 
                    <br />
                    <br />
                   Following my passion in technology, I made my biggest change in my life – enrolling in RMIT as an IT student. I studied 8-10 hours a day, beside tasks and knowledges from school, I spend almost the study time to teach myself about the Algorithm through LeetCode, Frontend and backend frameworks through online tutorials. I will never stop learning new things.

               </p>
            
               <ImageSlider slides={SliderData} />
            </div>
        </div>
        </AboutSectionStyle>
    )
}

export default About;