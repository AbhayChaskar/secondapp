import React, { Component } from 'react'

export class Featured extends Component {
    render() {
        return (
            <section className="sec4">
            <h4>Featured on: </h4>
            <div className="sec4_1">
                <img src="Images/toi-logo.png" className="imggrp4"/>
            </div>
            <div className="sec4_2">
                <img src="Images/fb.png" className="imggrp4"/>
            </div>
            <div className="sec4_3">
                <img src="Images/twit.jpg" className="imggrp4"/>
            </div>
            <div className="sec4_4">
                <img src="Images/wiki.jpg" className="imggrp4"/>
            </div>
            <div className="sec4_5">
                <img src="Images/openbook.jpg" className="imggrp4"/>
            </div>
        </section>

        )
    }
}

export default Featured
