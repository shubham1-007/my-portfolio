import React from "react";
import { Container } from "react-bootstrap";
// import Button from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import "./Contact.css"
function Contact()
{
    return(
        <div className="body">
            <div className="wrapp" id="contact">
                <h5 className="h">
              Contact me
                </h5>
            </div>
            <div className="Container">
            <form>
  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="text" class="form-control" id="field name"/>
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="field email"></input>
    <label for="msg" class="form-label">Message</label>
    <textarea id="msg field" class="md-textarea form-control" rows="5"></textarea>
  </div>
  <button type="submit" class="btn btn-warning">Submit</button>
</form>
</div>
        </div>
    )
}
export default Contact;