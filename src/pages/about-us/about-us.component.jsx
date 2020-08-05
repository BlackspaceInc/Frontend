import React from 'react';
import './about-us.styles.scss';


const AboutUs = () => {

    return(
        <div className='blk-about'>
            <div className="about-section">
                <h1>FOUNDERS</h1>
                {/* <p>why are we doing this?</p>
                <p>our mission statement, values and core principles</p> */}
            </div>

            <div className="row">
                <div className="column">
                    <div className="card">
                    <img src="https://react.semantic-ui.com/images/avatar/large/matthew.png" alt="Jane" className='blk-img'/>
                    <div className="container">
                        <h2>ALEXIS SERRA</h2>
                        <p className="title">BUSINESS</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        
                    </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                    <img src="https://react.semantic-ui.com/images/avatar/large/matthew.png" alt="Mike" className='blk-img'/>
                    <div className="container">
                        <h2>JERED BUTLER</h2>
                        <p className="title">BUSINESS</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                    <img src="https://react.semantic-ui.com/images/avatar/large/matthew.png" alt="John" className='blk-img'/>
                    <div className="container">
                        <h2>CALEB ATEMIE</h2>
                        <p className="title">BUSINESS</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                    <img src="https://react.semantic-ui.com/images/avatar/large/matthew.png" alt="John" className='blk-img'/>
                    <div className="container">
                        <h2>CAMERON BURFORD</h2>
                        <p className="title">ENGINEERING</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                    <img src="https://react.semantic-ui.com/images/avatar/large/matthew.png" alt="John" className='blk-img'/>
                    <div className="container">
                        <h2>SAMIRA OURAGA</h2>
                        <p className="title">ENGINEERING</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                    <img src="https://react.semantic-ui.com/images/avatar/large/matthew.png" alt="John" className='blk-img'/>
                    <div className="container">
                        <h2>YOAN YOMBA</h2>
                        <p className="title">ENGINEERING</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;