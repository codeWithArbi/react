 import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
 import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
 import React from 'react';
 import { render } from 'react-dom';
 import './index.css';
 import App from './App';
 import reportWebVitals from './reportWebVitals';
 import { createRoot } from 'react-dom/client';
 import './App.js'



 // importing components from react-router-dom package
  import { BrowserRouter as Router, Routes, Route, Link  } from "react-router-dom";

 // import Home component
import Home from "./components/Home";
 // import About component
import AboutUs from "./components/AboutUs";
 // import ContactUs component
import ContactUs from "./components/ContactUs";

import Services from "./components/Services";

import User from "./components/User";



 var rootNavbarEL = document.getElementById("root-navbar");
 var rootEL = document.getElementById("root");

 var rootOneEL = document.getElementById("root1");
 var rootTwoEL = document.getElementById("root2");
 var rootThreeEL = document.getElementById("root3");
 var rootFourEL = document.getElementById("root4");
 var rootFiveEL = document.getElementById("root5");


// const rootNavbar = createRoot(rootNavbarEL);
// rootNavbar.render(<Navbar />);

    

const Homepage = () => {
    return (
		<div>
			<Header/>
			<h1>Homepage </h1>
		</div>
	)
};

const rootHome = createRoot(rootEL);
rootHome.render(<Homepage />);

const Header = () => { 
    return(<Navbar />)
};


function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navbarSupportedContent" class="collapse navbar-collapse">       
                <MainMenu />
            </div>
          </div>
        </nav>
    )
}

function MainMenu() {
    return (
        <Router> 
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">   
                <li class="nav-item">
                    <Link to="/" className="nav-link active">Home</Link>
                </li>
                <li class="nav-item">
                    <Link to="/aboutus" className="nav-link">About Us</Link>
                </li>
                <li class="nav-item">
                    <Link to="/contactus" className="nav-link">Contact Us</Link>
                </li>
                <li class="nav-item">
                    <Link to="/user" className="nav-link">User</Link>
                </li>
            </ul> 
       
            <Routes>
                <Route path="/" element = {<Home />} />
                <Route path="/aboutus" element = {<AboutUs />} />
                <Route path="/contactus" element = {<ContactUs />} />
            </Routes>
        </Router>
  );
}



reportWebVitals();


// render(<h1>Hello, everyone!</h1>, rootTwoEL);
const root2 = createRoot(rootTwoEL);
root2.render(<h1>Hello, everyone!</h1>);

// Spend a minute memorizing the line below
// Re-write the line of code as best you can from memory
// render(<p>Hi, my name is Bob!</p>, rootThreeEL);
const root3 = createRoot(rootThreeEL);
root3.render(<p>Hi, my name is Bob!</p>);

/* Surprise! You probably thought you could just forget the line of code you just learned! Nope, not on my watch!
Try to write that 1-liner of React code again! This time, see if you can figure out how to render an <ul> with 2+ <li>s inside*/

const root4 = createRoot(rootFourEL);
root4.render(<ul><li>Thing 1</li><li>Thing 2</li></ul>);

/* --------------------------------------------------------------------------- */

const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

const nameEL = document.getElementById('name');
const rootName = createRoot(nameEL);
rootName.render(element);


/* --------------------------------------------------------------------------- */

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};


function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const formatNameEL = document.getElementById('format-name');
const rootFormatName = createRoot(formatNameEL);
rootFormatName.render(formatName(user));


/* --------------------------------------------------------------------------- */

const elementHeader = (
  <h1> Hello! Mr./Mrs.  {formatName(user)}!  </h1>
);

const headerEL = document.getElementById('header');
const rootHeader = createRoot(headerEL);
rootHeader.render(elementHeader);

function getGreeting(user) {
    if (user) {
        return <div><h1>Hello! How are you?</h1><h2>{formatName(user)}!</h2></div>;  
    }
    
    return <h1>Hello, Stranger.</h1>;
}

const greetingEL = document.getElementById('greeting');
const rootGreeting = createRoot(greetingEL);
rootGreeting.render(getGreeting(user));

/* --------------------------------------------------------------------------- */

const elementLink = <a href="https://www.reactjs.org"> link </a>;

const linkEL = document.getElementById('link');
const rootLink = createRoot(linkEL);
rootLink.render(elementLink);


// const elementImage = <img src={user.avatarUrl}></img>;
const elementImage = <img src={user.avatarUrl} />;

const imageEL = document.getElementById('image');
const rootImage = createRoot(imageEL);
rootImage.render(elementImage);


/* --------------------------------------------------------------------------- */


const elementDOM = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);

const domEL = document.getElementById('dom');
const rootDom = createRoot(domEL);
rootDom.render(elementDOM);

/* --------------------------------------------------------------------------- */

/*
const title = response.potentiallyMaliciousInput;
// This is safe:
const elementTitle = <h1>{title}</h1>;

const titleEL = document.getElementById('title');
const rootTitle = createRoot(titleEL);
rootTitle.render(elementTitle);
*/

const elementGreeting1 = (
  <h1 className="greeting">
    Hello, world! What is up? 
  </h1>
);

// OR 

const elementGreeting2 = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);

const greeting1EL = document.getElementById('greeting1');
const rootGreeting1 =  createRoot(greeting1EL);
rootGreeting1.render(elementGreeting1);


const greeting2EL = document.getElementById('greeting2');
const rootGreeting2 =  createRoot(greeting2EL);
rootGreeting2.render(elementGreeting2);


// Note: this structure is simplified
const elementSimplified = {
    type: 'h1',
    props: {
        className: 'greeting',
        children: 'Hello world!'
    }
};

const simplifiedEL = document.getElementById('simplified');
const rootSimplified =  createRoot(simplifiedEL);
rootSimplified.render(elementSimplified.type + ' ' + elementSimplified.props.className + ' ' + elementSimplified.props.children);

/* --------------------------------------------------------------------------------------------------------------------------------------- */

const e = React.createElement;

class LikeButton extends React.Component {
        constructor(props) {
          super(props);
            this.state = { liked: false };
        }

        render() {
            if (this.state.liked) {
                return 'You liked this.';
            }

            return e(
              'button',
              { onClick: () => this.setState({ liked: true }) },
              'Like'
            );
        }
    }

const domContainer = document.querySelector('#like_button_container');

const root5 = createRoot(domContainer);
root5.render(e(LikeButton));


/* ------------------------------------------------------------------------------------------------------------------------------------------------- */

