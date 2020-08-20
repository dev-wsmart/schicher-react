import React from 'react';
import { Switch, Route, NavLink, BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import './fontface.css';
import logo from './schicher-logo.png';
import map from './image/map.png';
import phone from './image/phone.png';

import Home from './Home/Home';

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <div className="container">
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
                <Link>TH</Link>&nbsp;|&nbsp; 
                <Link>EN</Link>&nbsp;|&nbsp;
                <Link>DE</Link>
              </div>
            </div>
            <div className="nav d-block justify-content-center">
              <NavLink activeClassName="active" to="/" exact={true}>หน้าหลัก</NavLink>
              <NavLink activeClassName="active" to="/about">เกี่ยวกับเรา</NavLink>
              <NavLink activeClassName="active" to="/service">บริการของเรา</NavLink>
              <NavLink activeClassName="active" to="/partner">พาร์ทเนอร์</NavLink>
              <NavLink activeClassName="active" to="/promotion">โปรโมชั่น</NavLink>
              <NavLink activeClassName="active" to="/news">ข่าวสารและกิจกรรม</NavLink>
              <NavLink activeClassName="active" to="/gallery">แกลลอรี่</NavLink>
              <NavLink activeClassName="active" to="/contactus">ติดต่อเรา</NavLink>
            </div>
          </div>
          <div className="d-block d-md-none">
            <nav class="navbar navbar-expand-lg navbar-dark mb-3">
              <a class="navbar-brand animate__animated animate__fadeInDown" href="javascript:void(0)">
                  <img src={logo}/>
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
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
                  <Link>TH</Link>&nbsp;|&nbsp; 
                  <Link>EN</Link>&nbsp;|&nbsp;
                  <Link>DE</Link>
                </div>
              </div>
            </nav>
          </div>
          <div className="content">
            <Switch>
              <Route path="/">
                <Home/>
              </Route>
            </Switch>
          </div>
          <div className="footer row">
            <div className="col-12 col-lg-6 left-col">
              <div className="sitemap-title">
                แผนผังเว็บไซต์
              </div>
              <table>
                <tr>
                  <td><Link to="/">หน้าหลัก</Link></td>
                  <td><Link to="/partner">พาร์ทเนอร์</Link></td>
                </tr>
                <tr>
                  <td><Link to="/about">เกี่ยวกับเรา</Link></td>
                  <td><Link to="/news">ข่าวสารและกิจกรรม</Link></td>
                </tr>
                <tr>
                  <td><Link to="/service">บริการของเรา</Link></td>
                  <td><Link to="/gallary">แกลลอรี่</Link></td>
                </tr>
                <tr>
                  <td></td>
                  <td><Link to="/contactus">ติดต่อเรา</Link></td>
                </tr>
              </table>
            </div>
            <div className="col-12 col-lg-6 right-col">
              <div className="map">
                <img src={map}/>
              </div>
              <div className="phone">
                <img src={phone}/>
                <b>02-002-1234</b>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
