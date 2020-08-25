import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import './Promotion.css';
import Banner from '../Component/Banner';
import TopicTitle from '../Component/TopicTitle';
import img1 from '../image/img1.jpg';

export default function Promotion() {
    return (
        <div>
            <Banner/>
            <TopicTitle topictitle="โปรโมชั่น"/>
            <div className="promotion-content">
                <Frame/>
                <Frame/>
            </div>
        </div>
    )
}

class Frame extends React.Component{
    render(){
        return(
            <div className="frame-promotion">
                <div className="title">title</div>
                <Row className="frame-content">
                    <Col lg={4}>
                        <img src={img1}/>
                    </Col>
                    <Col lg={8}>
                        Content
                        <div className="button">
                            <Button variant="dark">อ่านต่อ</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
