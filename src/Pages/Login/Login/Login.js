import React, { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passWordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "";
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    let errorElement ;
    if (error) {
      errorElement = <p className='text-danger' >Error: {error?.message}</p>
      
    }
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const handleSubmit = event => {
        event.preventDefault();
        const password = passWordRef.current.value;
        console.log(email , password);
        signInWithEmailAndPassword(email , password);
    }
    const [email, setEmail] = useState("");
    const navigateRegister = event => {
      navigate('/register')
    }
    const resetPassword = async () => {
      if (email) {
        await sendPasswordResetEmail(email);
        toast("Sented email");
      } else {
        toast("please enter your email address");
      }
    };
  useEffect(() => {
    if (user) {
      navigate(from , {replace:true});
    }
  }, [user]);
  return (
    <div className="container w-50 mx-auto">
      <ToastContainer/>
        <h2 className="text-primary text-center mt-2">Please Login</h2>
      <Form onSubmit={handleSubmit} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passWordRef} type="password" placeholder="Password" required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {errorElement}
      <p>New To Lawyer Service <Link to='/register' className="text-danger pe-auto" onClick={navigateRegister}>Please Register</Link> </p>
      <p>Forget Password ?<span  style={{cursor: "pointer"}} className="text-danger pe-auto" onClick={resetPassword}>Reset Password</span> </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
