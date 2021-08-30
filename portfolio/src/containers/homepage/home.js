import React, { Component } from 'react';
import './home.css'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div class="context">
            <div className='name-header'>
                <div className='names'>
                    <h1>INNOCENT</h1>
                    <h1>EDEM</h1>
                    <h1>KUWORNU</h1>
                </div>
                <div>|</div>
            </div>
            <div class="message">
                <p>
                Hi, my name is Edem. I am into Software development and Electrical Engineering.
                I am currently a Graduate Trainee in AmaliTech, and I do freelance development
                in my free time.
                </p> 
                <br/>

                <p> I have skills in HTML, CSS, JavaScript, and Java. I am continuosly learning new
                skills, and I hope to become a certified fullstack developer soon. I also write 
                Programs for PLCs like Siemens and Alan Bradley,and construct control panels for 
                Industrial Applications.
                </p>
                <img src="./me.png" alt=""/>
               
               
               
            </div>
        </div>  
         );
    }
}
 
export default Home;