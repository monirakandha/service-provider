import React from 'react';
import './NotFound.css'
import NotFoundImg from '../../../images/404.png';
const NotFound = () => {
    return (
        <div>
            <h2 className='notfoundtitle'>NOT FOUND 404 </h2>
            <img className='w-100' src={NotFoundImg} alt="" srcset="" />
        </div>
    );
};

export default NotFound;