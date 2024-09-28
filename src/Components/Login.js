import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Checkbox, FormControlLabel, Typography, Box } from '@mui/material';

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, rememberMe: e.target.checked });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(formData);
  };

  return (
    <Box className="flex justify-center items-center h-screen bg-gray-100">
      <Box className="bg-white p-8 rounded-lg shadow-lg w-[400px]">
        <Typography variant="h4" align="center" className="mb-4">
          Login Page
        </Typography>

        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
            className="w-full"
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            required
            className="w-full"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.rememberMe}
                onChange={handleCheckboxChange}
              />
            }
            label="Remember Me"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="mt-2"
          >
            Login
          </Button>
          <Box className="flex justify-between mt-2">
            <Button color="secondary" className="text-xs" onClick={() => navigate('/forgot-password')}>
              Forgot Password?
            </Button>
            <Button color="secondary" className="text-xs"
            onClick={() => navigate('/Singup')}
            >
              Sign Up Here
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default LoginPage;

// import {useState} from 'react';
// import {Box, Button, TextField, Typography} from '@mui/material';

// function Login() {

//   const [data, setData] = useState({
//     email: '',
//     password: '',
//     rememberMe: false,
//   });
    
//   const handleChange = (e) => {
//         setData({...data, [e.target.name]: e.target.value});
//   };

//   const handleSubmit = (e) => {
//          e.preventDefault();
//       }
//    return(
//     <>
//      <Box  className="bg-white p-8 rounded-lg shadow-lg w-[400px]">
//       <Typography variant="h4" align="center" className="mb-4">
//         Login 
//       </Typography>
//       <form onSubmit={handleSubmit} className="space-y-4">
//       <TextField
//              fullWidth
//              label="Email"
//              name="email"
//              value={data.email}
//              onChange={handleChange}
//              margin="normal"
//              required
//              className="w-full"
//           />
//        <TextField
//         fullwidth
//         label= 'Password'
//         name= 'password'
//         value={data.password}
//         onChange={handleChange}
//       />
       
//        <Button 
//         type="submit"
//         variant="contained"
//         color="primary"
//         fullWidth
//         className="mt-2"
//         >Login
//         </Button>

//       </form>

//      </Box>
//     </>
//    );


// };

// export default Login;