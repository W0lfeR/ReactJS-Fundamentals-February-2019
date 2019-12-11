import React, { Component } from 'react'
import './style.css'

class Homepage extends Component {
    render() {
        return (
            <div className="App">
                <video autoPlay loop muted id="video-background">       
                    <source src="/Video.mp4" type="video/mp4" />
                </video>
            </div>
        )
    }
}

export default Homepage
