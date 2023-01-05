import React from "react";
import Navigation from "./Navigation.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer"
function App(){
    return(
        <div>
            <Navigation/>
            <Home/>
            <About/>
            <Contact/>
            <Footer/>
        </div>
    )
}
export default App;