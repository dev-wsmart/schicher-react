import React from 'react';
import Banner from '../Banner';
import car from '../image/car.png';
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
                <div class="home-content row">
                    <div class="title">
                        <div class="title-circle">
                            <img src={car} />
                        </div>
                        
                        <div class="title-text">
                            ผลิตภัณฑ์แนะนำ
                        </div>
                    </div>
                    
                </div>
                <div className="row rec-product">
                    {demoItem.map((item) => 
                        <div className="col-lg-4 col-md-6 product-item">
                            <div className="frame">
                                <div className="box-title">
                                    <div className="title">{item['package']}</div>
                                </div>
                                <img src={img1}/>
                                <div className="des">{item['description']}</div>
                            </div>
                        </div>
                    )}
                    
                </div>
            </div>
        )
    }
}

export default Home;