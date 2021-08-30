import React, { Component } from 'react';
import './navbar.css'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <ul className='navbar'>
                    <li>HOME</li>
                    <li>PROJECTS</li>
                    <li>SKILLS</li>
                    <li>CONTACT</li>
                </ul>
            </div>
         );
    }
}
 
export default Navbar ;