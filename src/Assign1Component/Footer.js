import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <footer id="sec5" className="footer1">
            <div>
                <h3>Main</h3><br/>
                <ul>
                    <li><a href="">Start Here</a></li>
                    <li><a href="">Portfolio</a></li>
                    <li><a href="">Meet Us</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contact</a></li>                        
                </ul>
            </div>

            <div>
                <h3>Company</h3><br/>
                <ul>
                    <li><a href="">About</a></li>
                    <li><a href="">Help</a></li>
                    <li><a href="">Support</a></li>
                    <li><a href="">Jobs</a></li>
                    <li><a href="">Directory</a></li>                        
                </ul>
            </div>

            <div>
                <h3>Structure</h3><br/>
            <ul>
                <li><a href="">Meetups</a></li>
                <li><a href="">Handbook</a></li>
                <li><a href="">Privacy</a></li>
                <li><a href="">API</a></li>
                <li><a href="">Equipment</a></li>                    
            </ul>
            </div>

            <div>
                <h3>Clients</h3><br/>
            <ul>
                <li><a href="">Rules</a></li>
                <li><a href="">Location</a></li>
                <li><a href="">Privacy</a></li>
                <li><a href="">API</a></li>
                <li><a href="">Tools</a></li>      
            </ul>
            </div>

            <div id="footer2">
                <div id="footer3">                    
                <img src="Images/twitter.png" alt="no-image" className="imggrp5"/>
                <img src="Images/facebook.png" alt="no_image" className="imggrp5"/>
                <img src="Images/v.png" alt="no_image" className="imggrp5"/>
                </div>
                <p id="footer4">
                <img src="Images/copyright.jpg" width="20px" height="20px" alt="no_image"/> <span> 2011 Copyright</span>
                <br/><span>Privacy Policy - Terms of Services</span>
                </p>
            </div>
        </footer>
        )
    }
}

export default Footer
