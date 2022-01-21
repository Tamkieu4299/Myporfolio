import React from 'react';
import './skill.css';
import { SkillBars } from 'react-skills';
import MousemoveSkill from '../../mousemoveSkill';

const skillsData = [
    {
    name: 'Java',
    level: 80,
    color: '#ADD8E6',
    },
    {
        name: 'Python',
        level: 70,
        color: '#7FFFD4',
    },
    {
        name: 'ReactJS',
        level: 70,
        color: '#FFE4C4',
    },
    {
        name: 'MySQL',
        level: 65,
        color: '#90EE90',
    },
    {
        name: 'HTML & CSS',
        level: 65,
        color: '#5F9EA0',
    },
    {
        name: 'Data Structure and Algorithm',
        level: 75,
        color: '#FF7F50',
    },
    {
        name: 'Problem solving',
        level: 85,
        color: '#6495ED',
    },
    {
        name: 'Critical thinking',
        level: 85,
        color: '#00FFFF',
    },
    {
        name: 'English',
        level: 85,
        color: '#BDB76B',
    },
];

function Skill(){
    return(
        <div>
            <MousemoveSkill />
            <SkillBars 
            skills={skillsData}  
            labelsWidth={400} 
            barsHeight={25}
            spacing={50}
            />

        </div>
    )
}

export default Skill;
