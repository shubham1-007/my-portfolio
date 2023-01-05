import React from "react";
import { Container } from "react-bootstrap";
import './Footer.css'
function Footer(){
    return(
        <div className="foot">
        <Container>
            <div className="footer">
            <div className="left">
            <h3>
                    Shubham Khaire
            </h3>
            <p>
            A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
            </p>
            </div>
            <div className="right">
                <h3>
                    Socials
                </h3>
                <div className="Socials d-sm-flex">
                <button>
                <a href="https://www.facebook.com/" class="fa fa-facebook"></a>
                </button>
                <button>
                        <a href="https://www.instagram.com/" class="fa fa-instagram"></a>
                </button>
                <button>
                            <a href="https://www.linkedin.com/in/shubham-khaire-08077a1a0" class="fa fa-linkedin"></a>
                </button>
                <button>
                            <a href="https://github.com/shubham1-007" class="fa fa-github"></a>
                </button>
                </div>
                </div>
            </div>
    
            <h6 className="text-center my-5">
                copyright 2023
            </h6>
        </Container>
        </div>
    )
}
export default Footer;