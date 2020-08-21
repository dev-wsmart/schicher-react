import React from 'react';
import Banner from '../Component/Banner';
import TopicTitle from '../Component/TopicTitle';
import { Row, Col, Button } from 'react-bootstrap';
import img1 from '../image/img1.jpg';
import './Partner.css';

const serviceItem = ['A', 'B', 'C'];

class Partner extends React.Component{
    render(){
        return(
            <div>
                <Banner/>
                <TopicTitle topictitle="พาร์ทเนอร์"/>
                <div className="service-content">
                    {serviceItem.map((item, key) => 
                        <div className="service-item" key={key}>
                            <Row>
                                <Col lg={4} className="img-col">
                                    <div className="service-title">
                                        Basic Package
                                    </div>
                                    <img src={img1}/>
                                </Col>
                                <Col lg={8}>
                                    <div className="details-title">รายละเอียดผลิตภัณฑ์</div>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu fringilla mauris, ut condimentum libero. Duis nec velit pharetra, rhoncus tortor a, cursus nulla. Aliquam aliquet iaculis magna quis aliquam. Mauris at massa vel mi sagittis fringilla. Phasellus porttitor eget tellus vitae congue. Curabitur porta, elit quis convallis imperdiet, nulla sem finibus velit, ut pulvinar nibh massa a sem. Donec vel dignissim metus. Integer congue molestie tincidunt. Nunc viverra vestibulum lorem vitae pulvinar
                                    <div className="d-flex flex-row-reverse">
                                        <Button variant="dark">เพิ่มเติม</Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    )}
                    
                </div>
            </div>
        )
    }
}

export default Partner;