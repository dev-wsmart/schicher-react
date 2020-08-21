import React from 'react';
import {Form, Row, Col, Button} from 'react-bootstrap';
import './CustomerInfo.css';
import Topictitle from '../Component/TopicTitle';
import Logo from '../image/schicher-logo-white.png';

class CustomerInfo extends React.Component{
    render(){
        return(
            <div>
                <Topictitle topictitle="กรุณาฝากข้อมูลติดต่อกลับ"/>
                <div className="customerinfo-content">
                    <Form>
                        <Row>
                            <Col lg={6}className="customer-form">
                                <div className="form-left">
                                    <Form.Control type="text" placeholder="ยี่ห้อ" required/>
                                    <Form.Control type="text" placeholder="รุ่น" required/>
                                    <Form.Control type="text" placeholder="ปี" required/>
                                    <Form.Control type="text" placeholder="เลขไมล์" required/>
                                </div>
                            </Col>
                            <Col lg={6} className="customer-form">
                                <div className="form-right">
                                    <Form.Control type="text" placeholder="ชื่อ" required/>
                                    <Form.Control type="text" placeholder="นามสกุล" required/>
                                    <Form.Control type="text" placeholder="เบอร์โทร" required/>
                                    <Form.Control type="text" placeholder="อีเมล" required/>
                                </div>
                            </Col>
                        </Row>
                        <div className="btn-call"><Button type="submit" variant="dark">ติดต่อกลับ</Button></div>
                        <div className="thank-you-section">
                            <p>ขอบคุณ</p>
                            <img src={Logo}/>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}

export default CustomerInfo;