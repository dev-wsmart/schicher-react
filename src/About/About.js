import React from 'react';
import './About.css';
import PageTitle from '../Component/PageTitle';
import img1 from '../image/img1.jpg';

class About extends React.Component{
    render(){
        return(
            <div>
                <PageTitle pagetitle="About"/>
                <div className="content-about">
                    <img src={img1}/>
                </div>
            </div>
        )
    }
}

export default About;