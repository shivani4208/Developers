import React from 'react'
import './services.css'
import two from './Images/2.svg'
import one from './Images/1.svg'
import three from './Images/3.svg'

const Services = () => {
    return (
        <>
            <div className="service-container">
                <div className="service-card">
                    <div className="imgBox">
                        <img src={one} alt="img"/>
                    </div>
                    <div className="contentBox">
                        <h3>Service</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi placeat cum quod necessitatibus alias maxime corrupti accusantium a qui quaerat!</p>
                    </div>
                </div>

                <div className="service-card">
                    <div className="imgBox">
                    <img src={two} alt="img"/>
                    </div>
                    <div className="contentBox">
                        <h3>Service</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi placeat cum quod necessitatibus alias maxime corrupti accusantium a qui quaerat!</p>
                    </div>
                </div>

                <div className="service-card">
                    <div className="imgBox">
                    <img src={three} alt="img"/>
                    </div>
                    <div className="contentBox">
                        <h3>Service</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi placeat cum quod necessitatibus alias maxime corrupti accusantium a qui quaerat!</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Services
