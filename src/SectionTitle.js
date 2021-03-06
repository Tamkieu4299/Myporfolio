import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle= styled.div`
text-align: center;
    p{
        font-family: "Poppins Light";
        font-size: 24px;
    }
    h2{
        font-family: "Poppins SemiBold";
        font-size: 40px;
        margin-top: 0.5rem;
        text-transform: uppercase;
    }
    @media only screen and(max-width: 768px){
        p{
            font-size: 1.2rem;
        }
        h2{
            font-size:3.6rem;
        }
    }
`
export default function SectionTitle({
    heading='This is heading'
}){
    return(
        <SectionTitleStyle>

            <h2>{heading}</h2>
        </SectionTitleStyle>
    )
}