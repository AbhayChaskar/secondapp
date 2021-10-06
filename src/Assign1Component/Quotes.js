import React, { Component } from 'react'

export class Quotes extends Component {
    render() {
        return (
            <section className="sec3">
            <div className="sec3_1">
                <img src="Images/avoid.jpg" className="imggrp3"/>
                    <h4>I would like to avoid making these mistakes</h4>
            </div>
            <div className="sec3_2">
                <img src="Images/elon.jpg" className="imggrp3"/>
                    <h4>But how do you avoid mistakes you make by default</h4>
            </div>
            <div className="sec3_3">
                <img src="Images/life.jpeg" className="imggrp3"/>
                    <h4>Ideally you transform your life so it has other defaults</h4>
            </div>
        </section>
        )
    }
}

export default Quotes
