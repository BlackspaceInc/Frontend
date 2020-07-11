import React from 'react';
import {Card, Image} from 'semantic-ui-react';

export default class Business extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {name,address,links,number} = this.props.item;
        return(
            
            <Card
                image='https://react.semantic-ui.com/images/avatar/large/matthew.png' 
                wrapped ui={false}
                header={`${name}`} 
                meta={`${number}`}
                description={`${address}`}
                target='blank'
                href={`${links}`}
                color='orange'
                as='h4'
            />
           
        )
    }
    
}


