import React from 'react';
import './business.styles.scss';

export default class Business extends React.Component{

    render(){
        const {name,address,links,number} = this.props.item;
        return(
            
            <div className='card-component'>
                <a href = {`${links}`} target = 'blank'>
                    <img 
                        className='business-logo-top' 
                        src='https://react.semantic-ui.com/images/avatar/large/matthew.png' 
                        target='blank'
                        alt='logo of blackspace'/>
                    <div className='business-some-text'>  
                        <h3 className='business-name'>{`${name}`} </h3>
                        <span> <p className='business-phone'>{`${number}`}</p></span>
                        <p className='business-address'>{`${address}`}</p>
                    </div>
                </a>
            </div>
            
           
        )
    }
    
}


