import React from 'react';

import Card from 'react-bootstrap/Card';

export default class Business extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {name,address,links,number} = this.props.item;
        return(
            <div className='business-container'>
                <Card style={{ width: '18rem' }}>
                {/* <Card.Img src="holder.js/100px270" alt="Card image" /> */}
                <Card.ImgOverlay>
                    <Card.Title>{`Company: ${name}`}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{number}</Card.Subtitle>
                    <Card.Text>
                       Located at  {address}
                    </Card.Text>
                    <Card.Link href={`${links}`}>Go to their website</Card.Link>
                </Card.ImgOverlay>
                </Card>
            </div>
        )
    }
    
}


