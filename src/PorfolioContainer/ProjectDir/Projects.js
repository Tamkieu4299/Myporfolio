import React from 'react';
import './Projects.css';
import MousemoveProjects from '../../MousemoveProjects';
import hospital from '../../assets/Projects/hospital.png';
import movie from '../../assets/Projects/movie.jpeg';
import education from '../../assets/Projects/education.png';
import algo from '../../assets/Projects/algo.png';
import social from '../../assets/Projects/social.jpeg';
import coviddata from '../../assets/Projects/coviddata.png';


import { Card } from "react-bootstrap";

const cardInfo = [
    {
      image: hospital,
      title: "Hospital Application",
      text: "ReactJS, NodeJS, MongoDB, Express",
      link: 'https://mernultimatehospitalclient.onrender.com/',
    },
    {
      image:
        algo,
      title: "Algorithm Visualizing Application",
      text: "ReactJS",
      link: 'https://algoproject.onrender.com/',
    },
    {
      image:
        education,
      title: "Education Website",
      text: "CSS, HTML",
      link: 'https://nifty-euclid-48aa17.netlify.app/',
    }
  ];
const Projects = () => {
  const renderCard = (card, index) => {
    return (
        <div>
        
            <Card style={{ width: "18rem" }} key={index} className="box">
                <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
                <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                <Card.Link href={card.link}>Visit</Card.Link>
                </Card.Body>
            </Card>
      </div>
    );
  };
  return <div>
        <MousemoveProjects />
       <div className="grid">{cardInfo.map(renderCard)}</div>;
       </div>
};

export default Projects;