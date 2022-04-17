
import React from 'react';
import { Button } from 'react-bootstrap';
import LnadingPageImage from '../../../images/myimg.png'
import './Banner.css'
const Banner = () => {
    return (
        <div className="container">
        <div  className="align-items-center row">
            <div class="col-md-4"><img src={LnadingPageImage} className="img-fluid" alt="" srcset="" /></div>
            <div class="col-md-8 ">
            <h2 className='text-center' style={{ fontSize: "5vw" }}>High Quality Law Advice And Support</h2>
            <h4 className='text-center' style={{ fontSize: "2vw" }}>Leading Polish Lawyer in your city</h4>
            </div>
        </div>
    </div>
    );
};

export default Banner;