import React from "react";
import { Container } from "react-bootstrap";
// import Button from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import "./About.css"
function About()
{
    return(
        <div className="about-wrap">
      
            <div className="wrap" id="about">
                <h5 className="h">
                 About Me
                </h5>
            <p className="pa text-dark">
            Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
                </p>   
                <Container>
            <div className="row text-left">
                    <div className="col-sm">
                        <div>
                            <h4>
                               Get to know about me!!
                            </h4>
                            <p>
                            I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.

I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming

I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
                            </p>

                        </div>
                    </div>
                    <div className="col-sm">
                      <h3>
                        skills
                      </h3>
                      <div className="skills" id="about">
                       
                       <div className="skills_skill">
                         Html
                       </div>
                       <div className="skills_skill">
                         Css
                       </div>  
                       <div className="skills_skill">
                         javascript
                       </div>
                       <div className="skills_skill">
                         bootstrap
                       </div>
                       <div className="skills_skill">
                         React
                       </div>  
                       <div className="skills_skill">
                        Node
                       </div>
                       <div className="skills_skill">
                      Express
                       </div>  
                       <div className="skills_skill">
                         Mongodb
                       </div>
                       <div className="skills_skill">
                        Git
                       </div>
                       <div className="skills_skill">
                   Github
                       </div>  
                       <div className="skills_skill">
                         Mongodb
                       </div>
                       <div className="skills_skill">
                       API
                       </div>
                    </div>  
                                     
                    </div>
                    
                  
                </div>
                </Container>         
            </div>
           
        </div>
    )
}
export default About;