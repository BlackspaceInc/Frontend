import React from 'react';
import {Card} from 'semantic-ui-react';
import './business.styles.scss';

export default class Business extends React.Component{

    render(){
        const {name,address,links,number} = this.props.item;
        return(
            
            // <Card
            //     href = {`${links}`}
            //     target = 'blank'
            //     // image='https://react.semantic-ui.com/images/avatar/large/matthew.png' 
            //     wrapped ui={false}
            //     header={`${name}`} 
            //     meta={`${number}`}
            //     description={`${address}`}
                
            // />
            <a href = {`${links}`} target = 'blank'>
                <div className='card-component'>
                    {/* replace with bp logo */}
                    {/* <img src="https://react.semantic-ui.com/images/avatar/large/matthew.png" alt="Company logo" className='business-logo' style="width:100%"/> */}
                    <h3 className='business-name'>{`${name}`} </h3>
                    <span> <p className='business-phone'>{`${number}`}</p></span>
                    <p className='business-address'>{`${address}`}</p>
                </div>
            </a>

            // <div id="container" class="col-lg-3">
            // <div class="img-container">
            //     <img src="https://react.semantic-ui.com/images/avatar/large/matthew.png" alt="Company logo" className='business-logo' style="width:100%"/>
            // </div>
            // </div>
           
        )
    }
    
}


