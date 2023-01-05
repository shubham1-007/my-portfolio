import React from "react";
import { Container } from "react-bootstrap";
// import Button from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import "./Home.css"
function Home()
{
    return(
        <div>
            <div className="wrapper" id="home">
                <h3 className="h1">
                   Hey, I'm shubham khaire
                </h3>
            <p className="p1 text-dark">
                    A Frontend focused Web Developer building the Frontend of Websites and Web  Applications that leads to the success of the overall product 
                </p>
            <Button className="button b1" variant="warning"><a href="./#about" >Skills</a></Button>
            </div>
        </div>
    )
}
export default Home;