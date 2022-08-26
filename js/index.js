 
 import React from 'react';
 import { render } from 'react-dom';
 import './index.css';
 import App from './App';
 import reportWebVitals from './reportWebVitals';
 import { createRoot } from 'react-dom/client';


reportWebVitals();

var rootNavbarEL = document.getElementById("root-navbar");
var rootEL = document.getElementById("root");
var rootOneEL = document.getElementById("root1");
var rootTwoEL = document.getElementById("root2");
var rootThreeEL = document.getElementById("root3");
var rootFourEL = document.getElementById("root4");
var rootFiveEL = document.getElementById("root5");
var rootSixEL = document.getElementById("root6");

// Before
 render(<App tab="home" />, rootEL);
// After
const root = createRoot(rootEL);
root.render(<Navbar />);

//const root = ReactDOM.createRoot(document.getElementById('root'));

//root.render(
//    <React.StrictMode>

//        <Navbar />
//        {/*<App />*/}
//    </React.StrictMode>
//);


render(<h1>Hello, everyone!</h1>, rootTwoEL);
const root2 = createRoot(rootTwoEL);
root2.render(<h1>Hello, everyone!</h1>);

// Spend a minute memorizing the line below
// Re-write the line of code as best you can from memory
render(<p>Hi, my name is Bob!</p>, rootThreeEL);
const root3 = createRoot(rootThreeEL);
root3.render(<p>Hi, my name is Bob!</p>);

/* Surprise! You probably thought you could just forget the line of code you just learned! Nope, not on my watch!
Try to write that 1-liner of React code again! This time, see if you can figure out how to render an <ul> with 2+ <li>s inside*/

render(<ul><li>Thing 1</li><li>Thing 2</li></ul>, rootFourEL);
const root4 = createRoot(rootFourEL);
root4.render(<ul><li>Thing 1</li><li>Thing 2</li></ul>);

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

render(e(LikeButton), rootTwoEL);
const root5 = createRoot(domContainer);
root5.render(e(LikeButton));

render(<Navbar />, rootNavbarEL);
const rootavbar = createRoot(rootNavbarEL);
rootavbar.render(<Navbar />);

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div id="dropdown" className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default class NavBarExample extends React.Component {

    constructor(props) {

        super(props);

        this.toggleOpenState = this.toggleOpenState.bind(this);

        this.state = {

            isOpen: false

        };

    }

    toggleOpenState() {

        this.setState({

            isOpen: !this.state.isOpen

        });

    }

    render() {

        return (

            <div>

                <Navbar color="#ffffff" light expand="md">

                    <NavbarBrand href="/">

                        This is a Navbar Demo

            	</NavbarBrand>

                    {/* Below, we'll add toggler for auto-collapse */}

                    <NavbarToggler onClick={this.toggleOpenState} />

                    <Collapse isOpen={this.state.isOpen} navbar>


                        {/*Pull towards left */}

                        <Nav className="ml-auto" navbar>

                            <NavItem>

                                <NavLink href="/link/">

                                    Left Navigation Link

                    </NavLink>

                            </NavItem>

                        </Nav>


                        {/* Pull towards right */}

                        <Nav className="mr-auto" navbar>

                            <UncontrolledDropdown nav inNavbar>

                                <DropdownToggle nav caret>



                                    Chris

                </DropdownToggle>

                                <DropdownMenu >

                                    <DropdownItem>

                                        My Account

                  </DropdownItem>

                                    <DropdownItem>

                                        Page Settings

                  </DropdownItem>

                                    <DropdownItem divider />

                                    <DropdownItem>

                                        Log Out

                  </DropdownItem>

                                </DropdownMenu>

                            </UncontrolledDropdown>

                        </Nav>

                    </Collapse>

                </Navbar>

            </div>

        );

    }

}


render(<NavBarExample />, rootSixEL);
const rootavbar1 = createRoot(rootSixEL);
rootavbar1.render(<NavBarExample />);

