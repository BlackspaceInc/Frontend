import React from 'react';
import './about-us.styles.scss';


const ABOUT_US = () => {

    return(
        <div className='blk-about'>
            <div className="about-section">
                <h1>About Us Page</h1>
                <p>Some text about who we are and what we do.</p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>

            <h2 className='blk-about-h2'>Our Team</h2>

            <div className="row">
                <div className="column">
                    <div className="card">
                    <img src="https://react.semantic-ui.com/images/avatar/large/matthew.png" alt="Jane" className='blk-img'/>
                    <div className="container">
                        <h2>Jane Doe</h2>
                        <p className="title">CEO & Founder</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>jane@example.com</p>
                        <p><button class="button">Contact</button></p>
                    </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                    <img src="https://react.semantic-ui.com/images/avatar/large/matthew.png" alt="Mike" className='blk-img'/>
                    <div className="container">
                        <h2>Mike Ross</h2>
                        <p className="title">Art Director</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>mike@example.com</p>
                        <p><button class="button">Contact</button></p>
                    </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                    <img src="https://react.semantic-ui.com/images/avatar/large/matthew.png" alt="John" className='blk-img'/>
                    <div className="container">
                        <h2>John Doe</h2>
                        <p className="title">Designer</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>john@example.com</p>
                        <p><button class="button">Contact</button></p>
                    </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                    <img src="https://react.semantic-ui.com/images/avatar/large/matthew.png" alt="John" className='blk-img'/>
                    <div className="container">
                        <h2>John Doe</h2>
                        <p className="title">Designer</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>john@example.com</p>
                        <p><button class="button">Contact</button></p>
                    </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                    <img src="https://react.semantic-ui.com/images/avatar/large/matthew.png" alt="John" className='blk-img'/>
                    <div className="container">
                        <h2>John Doe</h2>
                        <p className="title">Designer</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>john@example.com</p>
                        <p><button class="button">Contact</button></p>
                    </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                    <img src="https://react.semantic-ui.com/images/avatar/large/matthew.png" alt="John" className='blk-img'/>
                    <div className="container">
                        <h2>John Doe</h2>
                        <p className="title">Designer</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>john@example.com</p>
                        <p><button class="button">Contact</button></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ABOUT_US;