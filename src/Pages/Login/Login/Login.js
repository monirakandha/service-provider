import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";


const Login = () => {
    const emailRef = useRef('');
    const passWordRef = useRef('');
    const navigate = useNavigate();
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
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passWordRef.current.value;
        console.log(email , password);
        signInWithEmailAndPassword(email , password);
    }

    if(user){
      navigate('/home');
  }
    const navigateRegister = event => {
      navigate('/register')
    }
  return (
    <div className="container w-50 mx-auto">
        <h2 className="text-primary text-center mt-2">Please Login</h2>
      <Form onSubmit={handleSubmit} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passWordRef} type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {errorElement}
      <p>New To Genius Car <Link to='/register' className="text-danger pe-auto" onClick={navigateRegister}>Please Register</Link> </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
