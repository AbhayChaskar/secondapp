import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <header id="sec1" className="header">
            <nav>
                <h2 style={{color: "white", padding: "1%"}}>Insight</h2>
                <small style={{color:"whitesmoke",fontFamily:"monospace", paddingTop:"8px"}}> Dare to Leap</small>
                <div className="nav-content">
                    <ul>
                        <li><a href="">HOW IT WORKS</a></li>
                        <li><a href="./jqValidation.html">SIGN UP</a></li>
                        <li><a href="">LOGIN</a></li>
                        <li><a href="">CONTACT US</a></li>
                    </ul>
                </div>
            </nav>
            <div className="textbox">
                <h1>Don't ignore your dreams</h1>
                <p>The 5 regrets paint a portrait of post-industrial man, who shrinks<br/>
                    himself into a shape that fits his circumstances, then turns<br/>
                    dutifully till he stops.
                </p>
                <a href="" className="button1">See how it works!</a>
                <a href="" className="button2">Join us</a>
            </div>
            </header>
        )
    }
}
export default Header
