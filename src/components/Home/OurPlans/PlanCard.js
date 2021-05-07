import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './PlanCard.css'
const PlanCard = ({ plan }) => {
    return (
        <div>
            <Card className='m-4 plan-card' style={{ width: '22rem' }}>
                <div className="image" >
                    <img className='card-image w-100' style={{ height: '13rem' }} src={plan.img} alt="" />
                </div>
                <Card.Body>
                    <Card.Title>{plan.title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                    <Button variant="primary">Learn More</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default PlanCard;