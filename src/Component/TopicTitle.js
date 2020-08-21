import React from 'react';
import { Row } from 'react-bootstrap';
import './TopicTitle.css';
import car from '../image/car.png';

class Title extends React.Component{
    render(){
        return(
            <Row className="topic-title">
                <div className="title">
                    <div className="title-circle">
                        <img src={car} />
                    </div>
                    
                    <div className="title-text">
                        {this.props.topictitle}
                    </div>
                </div>
                
            </Row>
        )
    }
}

export default Title;