import React from 'react';
import {Card} from 'semantic-ui-react';

export default class Business extends React.Component{

    render(){
        const {name,address,links,number} = this.props;
        return(
            
            <Card
                href = {`${links}`}
                target = 'blank'
                image='https://react.semantic-ui.com/images/avatar/large/matthew.png' 
                wrapped ui={false}
                header={`${name}`} 
                meta={`${number}`}
                description={`${address}`}
                
            />
           
        )
    }
    
}


