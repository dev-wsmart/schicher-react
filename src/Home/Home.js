import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Banner from '../Component/Banner';
import Title from '../Component/TopicTitle';
import '../Home/Home.css';
import img1 from '../image/img1.jpg';

const demoItem = [{"package": "Basic", "description": "Lorem ipsum dolor sit amet"},
                {"package": "Silver", "description": "Lorem ipsum dolor sit amet"},
                {"package": "Bronze", "description": "Lorem ipsum dolor sit amet"}];

class Home extends React.Component{
    render(){
        return(
            <div className="home">
                <Banner/>
                <Title topictitle="ผลิตภัณฑ์แนะนำ"/>
                <Row className="rec-product">
                    {demoItem.map((item, key) => 
                        <Col md={6} lg={4} key={key} className="product-item">
                            <div className="frame">
                                <div className="box-title">
                                    <div className="title">{item['package']}</div>
                                </div>
                                <img src={img1}/>
                                <div className="des">{item['description']}</div>
                            </div>
                        </Col>
                    )}
                    
                </Row>
                <div className="d-flex flex-row-reverse">
                    <Button variant="dark" className="more-btn">เพิ่มเติม</Button>
                </div>
                <Title topictitle="ทำไมต้อง Schicher"/>
                <Row className="p-3">
                    <Col md={6}>
                        <iframe width="100%" height="250" src="https://www.youtube.com/embed/hsZWOhHQt4k" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </Col>
                    <Col md={6}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis congue nisi, vel tempor lectus euismod vitae. Phasellus rutrum felis vitae mattis faucibus. Vivamus dictum hendrerit faucibus. Maecenas pellentesque quam eget est suscipit, vitae porttitor nulla feugiat. Donec dapibus leo quis sem sollicitudin, id mollis elit bibendum.
                    </Col>
                </Row>
                <Title topictitle="รู้จัก Schicher"/>
                <Row className="p-3">
                    <Col md={6}>
                        <iframe width="100%" height="250" src="https://www.youtube.com/embed/hsZWOhHQt4k" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </Col>
                    <Col md={6}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis congue nisi, vel tempor lectus euismod vitae. Phasellus rutrum felis vitae mattis faucibus. Vivamus dictum hendrerit faucibus. Maecenas pellentesque quam eget est suscipit, vitae porttitor nulla feugiat. Donec dapibus leo quis sem sollicitudin, id mollis elit bibendum.
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home;
    
