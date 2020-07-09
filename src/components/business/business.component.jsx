import React from 'react';
import {connect } from 'react-redux';
import Card from 'react-bootstrap/Card';

const Business = (props) => {
    const {  name, address,links, number, id} = props;
    return(
        <div key={id} className='business'>
            {/* this should be a card component  */}
            <p>{`${props.business.name} located at ${props.business.address}`}</p>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180"  className='image'/>
                <Card.ImgOverlay>
                    <Card.Title>${props.business.name}</Card.Title>
                    <Card.Text>
                        ${props.business.address}
                    </Card.Text>
                </Card.ImgOverlay>
                <Card.ImgOverlay>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.ImgOverlay>
            </Card>
        </div>
        
    )
}


export default connect(null, null)(Business);