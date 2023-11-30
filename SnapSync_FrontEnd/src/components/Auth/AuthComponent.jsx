import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { useHistory } from 'react-router-dom';
import { signin, signup } from '../../redux/actions/authActions';
import Input from './InputComponent';
import { GoogleLogin} from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";



const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };


const SignUp = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(form, history));
    } else {
      dispatch(signin(form, history));
    }
  };


  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const clientId = "843186121167-k5jjc6dhamnreq3blmvdiacvbg2uc16k.apps.googleusercontent.com";

  const loginSuccess = (response) => {
    console.log('Login Response:', response);
  
    if (response.credential) {
      const decodedResponse = jwtDecode(response.credential);
      console.log('Decoded JWT:', decodedResponse);
    } else {
      console.log('No JWT found');
    }
  };

  const loginFailure = (response) => {
    console.log('Login Failed:', response);
  };
  

  return (
    <Container component="main" maxWidth="xs">
      <Paper className="paper" elevation={3}>
        <div style={{ marginBottom: "10px" }}>
          <Avatar style={{ backgroundColor: "red" }} className="avatar">
            <LockIcon />
          </Avatar>

          <Typography component="h1" variant="h5">{isSignup ? 'Sign up' : 'Sign in'}</Typography>
        </div>
        <form className="container" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
              </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className="submit">
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
          <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={loginSuccess}
            onFailure={loginFailure}
          />
       


          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
              </Button>
            </Grid>

          </Grid>
        </form>
      
      </Paper>
    </Container>
  );
};

export default SignUp;