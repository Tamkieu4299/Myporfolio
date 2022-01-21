import React from 'react';
import './Projects.css';
import MousemoveProjects from '../../MousemoveProjects';
import todo from '../../assets/Projects/todo.jpeg';
import movie from '../../assets/Projects/movie.jpeg';
import education from '../../assets/Projects/education.png';
import social from '../../assets/Projects/social.jpeg';
import coviddata from '../../assets/Projects/coviddata.png';


import { Card } from "react-bootstrap";

const cardInfo = [
    {
      image: todo,
      title: "Todo-List Application",
      text: "ReactJS",
      link: 'https://reacttodoktc.herokuapp.com/',
    },
    {
      image:
        movie,
      title: "Movie Application",
      text: "ReactJS, Java",
      link: 'https://reactmvapp.herokuapp.com/',
    },
    {
      image:
        education,
      title: "Education Website",
      text: "CSS, HTML",
      link: 'https://nifty-euclid-48aa17.netlify.app/',
    },
    {
      image:
        coviddata,
      title: "Covid data CLI",
      text: "Java",
      link: 'https://youtu.be/YHgrUoOitlc',
    },
    {
      image:
        social,
      title: "Ready player Application",
      text: "ReactJS, Java",
      link: 'https://reactmvapp.herokuapp.com/',
    },
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