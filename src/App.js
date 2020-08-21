import React from 'react';
import { Switch, Route, NavLink, BrowserRouter, Link } from 'react-router-dom';
import { Row, Col, Container, Navbar } from 'react-bootstrap';
import './App.css';
import './fontface.css';
import getTranslation from './lang';
import logo from './schicher-logo.png';
import map from './image/map.png';
import phone from './image/phone.png';

import Home from './Home/Home';
import About from './About/About';
import Service from './Service/Service';
import CustomerInfo from './Service/CustomerInfo';
import Partner from './Partner/Partner';

class App extends React.Component{
  state = { 
    lang: 'en' 
  };
  
  changeLanguageHandler = (lang) => {
    this.setState({ lang: lang });
  }

  render(){
    return(
      <BrowserRouter>
        <Container>
          <div className="d-none d-md-block">
            <div className="d-flex bd-highlight mb-5">
              <div className="mr-auto bd-highlight">
                <NavLink to="/">
                  <div className="logo">
                    <img src={logo}/>
                  </div>
                </NavLink>
              </div>
              <div className="bd-highlight lang-link">
                <Link onClick={this.changeLanguageHandler.bind(this, 'th')}>TH</Link>&nbsp;|&nbsp; 
                <Link onClick={this.changeLanguageHandler.bind(this, 'en')}>EN</Link>&nbsp;|&nbsp;
                <Link onClick={this.changeLanguageHandler.bind(this, 'de')}>DE</Link>
              </div>
            </div>
            <div className="nav d-block justify-content-center">
              <NavLink activeClassName="active" to="/" exact={true}>หน้าหลัก</NavLink>
              <NavLink activeClassName="active" to="/about">เกี่ยวกับเรา</NavLink>
              <div className="service-dropdown">
                <NavLink to="/service">บริการของเรา</NavLink>
                <div className="nav-dropdown">
                    <Link to="/service">บริการคุณภาพ</Link>
                    <Link to="/customerinfo">ฝากข้อมูลติดต่อกลับ</Link>
                </div>
              </div>
              <NavLink activeClassName="active" to="/partner">พาร์ทเนอร์</NavLink>
              <NavLink activeClassName="active" to="/promotion">โปรโมชั่น</NavLink>
              <NavLink activeClassName="active" to="/news">ข่าวสารและกิจกรรม</NavLink>
              <NavLink activeClassName="active" to="/gallery">แกลลอรี่</NavLink>
              <NavLink activeClassName="active" to="/contactus">ติดต่อเรา</NavLink>
            </div>
          </div>
          <div className="d-block d-md-none">
            <Navbar expand="lg" className="mb-3">
              <Navbar.Brand href="/">
                <img src={logo}/>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="collapse"/>
              <Navbar.Collapse id="collapse">
                <div className="navbar-nav">
                  <NavLink className="nav-link" to="/" exact={true} >หน้าหลัก</NavLink>
                  <NavLink className="nav-link" to="/about">เกี่ยวกับเรา</NavLink>
                  <NavLink className="nav-link" to="/service">บริการของเรา</NavLink>
                  <NavLink className="nav-link" to="/partner">พาร์ทเนอร์</NavLink>
                  <NavLink className="nav-link" to="/promotion">โปรโมชั่น</NavLink>
                  <NavLink className="nav-link" to="/news">ข่าวสารและกิจกรรม</NavLink>
                  <NavLink className="nav-link" to="/gallery">แกลลอรี่</NavLink>
                  <NavLink className="nav-link" to="/contactus">ติดต่อเรา</NavLink>
                </div>
                <div className="lang-link-m">
                  <Link to="/">TH</Link>&nbsp;|&nbsp; 
                  <Link to="/">EN</Link>&nbsp;|&nbsp;
                  <Link to="/">DE</Link>
                </div>
              </Navbar.Collapse>
            </Navbar>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/about">
                <About/>
              </Route>
              <Route path="/service">
                <Service/>
              </Route>
              <Route path="/customerinfo">
                <CustomerInfo/>
              </Route>
              <Route path="/partner">
                <Partner/>
              </Route>
            </Switch>
          </div>
          <Row className="footer">
            <Col xs={12} lg={6} className="left-col">
              <div className="sitemap-title">
                แผนผังเว็บไซต์
              </div>
              <Row>
                  <Col xs={12} lg={6}><Link to="/">หน้าหลัก</Link></Col>
                  <Col xs={12} lg={6}><Link to="/partner">พาร์ทเนอร์</Link></Col>
                  <Col xs={12} lg={6}><Link to="/about">เกี่ยวกับเรา</Link></Col>
                  <Col xs={12} lg={6}><Link to="/news">ข่าวสารและกิจกรรม</Link></Col>
                  <Col xs={12} lg={6}><Link to="/service">บริการของเรา</Link></Col>
                  <Col xs={12} lg={6}><Link to="/gallery">แกลลอรี่</Link></Col>
                  <Col xs={12} lg={6}></Col>
                  <Col xs={12} lg={6}><Link to="/contactus">ติดต่อเรา</Link></Col>
              </Row>
            </Col>
            <Col xs={12} lg={6} className="right-col">
              <div className="map">
                <img src={map}/>
              </div>
              <div className="phone">
                <img src={phone}/>
                <b>02-002-1234</b>
              </div>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    )
  }
}

export default App;
