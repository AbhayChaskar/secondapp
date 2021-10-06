import React, { Component } from 'react'

export class Campain extends Component {
    render() {
        return (
            <section className="sec2">
            <div className="row">
                <div className="camp fl">
                    <img src="Images/fruit.jpg" className="imggrp1"/>
                    <h4> <img src="Images/fruit.jpg" className="imggrp2"/>You should stay healthy</h4>
                </div>
                <div className="camp new">
                    <img src="Images/mobile.jpg" className="imggrp1"/>
                    <h4><img src="Images/mobile.jpg" className="imggrp2"/>Choose better technology </h4>
                </div>
                <div className="camp fr">
                    <img src="Images/city2.jpg" className="imggrp1"/>
                    <h4><img src="Images/city2.jpg" className="imggrp2"/>Dream big, Work hard</h4>
                </div>
            </div>
        </section>
        )
    }
}
export default Campain
