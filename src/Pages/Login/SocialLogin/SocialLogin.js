import React from 'react';
import google from '../../../images/social-icons/google.png';
import facebook from '../../../images/social-icons/facebook.png';
import github from '../../../images/social-icons/github.png'
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
    const navigate = useNavigate();

    let errorElement ;
    if(loading || loading1 || loading2){
        return <Loading></Loading>
    }
    if (error || error1 || error2) {
        errorElement = <div>
            <p className='text-danger' >Error: {error?.message} {error1?.message} {error2?.message}</p>
          </div>
        
      }

      if(user || user1 || user2){
        navigate('/home');
      }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height:"1px"}} className='bg-primary w-50' ></div>
                <p className='mt-2 px-2' >or</p>
                <div style={{height:"1px"}} className='bg-primary w-50' ></div>
            </div>
            {errorElement}
            <div>
                <button
                onClick={() => signInWithGoogle()}
                
                
                className='btn btn-info w-50 mx-auto d-block my-3'>
                    <img style={{width:"30px"}} src={google} alt="" srcset="" />
                    <span  className='px-2'>Login With Google</span> 
                    </button>
                    <button
                     onClick={() => signInWithGithub()}
                    className='btn btn-info w-50 mx-auto d-block my-3'>
                    <img style={{width:"30px"}} src={github} alt="" srcset="" />
                    <span  className='px-2'>Login With Github</span> 
                    </button>

            </div>

        </div>
    );
};

export default SocialLogin;