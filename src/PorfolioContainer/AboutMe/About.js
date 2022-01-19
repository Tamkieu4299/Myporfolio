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
               </p>
               {/* <div className='about-image-slider'>
                    <div className='aboutSection__right'>
                        <img src={aboutImg} width='100%' alt='' />
                    </div>
                    <div className='aboutSection__right'>
                        <img src={aboutImg2} width='100%' alt='' />
                    </div>
               </div> */}
               <ImageSlider slides={SliderData} />
            </div>
        </div>
        </AboutSectionStyle>
    )
}

export default About;