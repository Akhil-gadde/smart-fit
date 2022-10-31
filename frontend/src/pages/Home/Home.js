import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

export default function Home() {

    return (
        <div className='home-container'>
            <div className='home-header'>
                <Link to="/" style={{textDecoration:"none"}}><h1 className='home-heading'>SmartFit</h1></Link>
                <Link to='/about'>
                    <button 
                        className="btn btn-secondary" 
                        id="about-btn"
                    >
                        About
                    </button>
                </Link>
                <Link to='/about'>
                    <button 
                        className="btn btn-secondary" 
                        id="about-btn"
                    >
                        Why Us
                    </button>
                </Link>
                <Link to='/about'>
                    <button 
                        className="btn btn-secondary" 
                        id="about-btn"
                    >
                        Services
                    </button>
                </Link>
                <Link to='/about'>
                    <button 
                        className="btn btn-secondary" 
                        id="about-btn"
                    >
                        Store
                    </button>
                </Link>
                <Link to='/tutorials'>
                    <button 
                        className="btn btn-secondary" 
                        id="about-btn"
                    >
                        Help?
                    </button>
                    <i class="fa-solid fa-lock"></i>
                </Link>
            </div>

            {/* <h1 className="description">An AI based Fitnesss Instructor</h1> */}
            <div className="home-main">
                <div className="home-side-heading">
                    <h1 className="head1">"If you want something you've never had, you must be willing to do something you've never done"</h1>
                    <div className="btn-section">
                        <Link to='/start'>
                            <button
                                className="btn start-btn"
                            >Start Workout</button>
                        </Link>
                        <Link to='/'>
                            <button
                                className="btn start-btn"
                            >View Analytics</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
