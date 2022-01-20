import React from 'react';
import './Projects.css';
import MousemoveProjects from '../../MousemoveProjects';
import todo from '../../assets/Projects/todo.jpeg';
import movie from '../../assets/Projects/movie.jpeg';
import blockchain from '../../assets/Projects/blockchain.jpeg';
import social from '../../assets/Projects/social.jpeg';


import { Card } from "react-bootstrap";

const cardInfo = [
    {
      image: todo,
      title: "Todo-List Application",
      text: "ReactJS",
      link: 'https://reactmvapp.herokuapp.com/',
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
        blockchain,
      title: "Budget Apps",
      text: "ReactJS",
      link: 'https://reactmvapp.herokuapp.com/',
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
                <Card.Link href="https://reactmvapp.herokuapp.com/">Visit</Card.Link>
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