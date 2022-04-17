import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const {id ,name, img, description , price} = service;
    const navigate = useNavigate();
    const navigateToServiceDetails = id  => {
        navigate ( `/service/${id}`);
    }
    return (
        <div id="services" className='service'>
            <img src={img} alt="" />
            <h2>SERVICE NAME: {name}</h2>
            <p>PRICE{price}</p>
            <p>{description}</p>
            <button onClick={ () => navigateToServiceDetails(id)} className='btn btn-primary'>BOOK:{name}</button>
        </div>
    );
};

export default Service;