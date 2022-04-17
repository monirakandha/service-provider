import React from 'react';
import google from '../../../images/social-icons/google.png';
import facebook from '../../../images/social-icons/facebook.png';
import github from '../../../images/social-icons/github.png'
const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height:"1px"}} className='bg-primary w-50' ></div>
                <p className='mt-2 px-2' >or</p>
                <div style={{height:"1px"}} className='bg-primary w-50' ></div>
            </div>
            <div>
                <button className='btn btn-info w-50 mx-auto d-block my-3'>
                    <img style={{width:"30px"}} src={google} alt="" srcset="" />
                    <span  className='px-2'>Login With Google</span> 
                    </button>
                    <button className='btn btn-info w-50 mx-auto d-block my-3'>
                    <img style={{width:"30px"}} src={facebook} alt="" srcset="" />
                    <span  className='px-2'>Login With Facebook</span> 
                    </button>
                    <button className='btn btn-info w-50 mx-auto d-block my-3'>
                    <img style={{width:"30px"}} src={github} alt="" srcset="" />
                    <span  className='px-2'>Login With Github</span> 
                    </button>

            </div>

        </div>
    );
};

export default SocialLogin;