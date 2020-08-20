import React from 'react';
import { Slide } from 'react-slideshow-image';
import './Banner.css';
import 'react-slideshow-image/dist/styles.css';
import img1 from '../image/img1.jpg';
import img2 from '../image/img2.jpg';
import img3 from '../image/img3.jpg';

const Banner = () => {
    return(
        <div>
            <Slide>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${img1})`}}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${img2})`}}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${img3})`}}>
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Banner;