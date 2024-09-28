import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [showResetForm, setShowResetForm] = useState(false); // Toggle between forms
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle new password input change
  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  // Handle confirm password input change
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  // Submit email for password reset link
  const handleSubmitEmail = (e) => {
    e.preventDefault();
    // You can add email validation or API call to send reset email
    //
    //console.log("Reset link sent to:", email);
    setShowResetForm(true); // Show reset password form after submitting email
  };

  // Submit new password
  const handleSubmitNewPassword = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // You can handle password reset logic here (e.g., API call)
    //console.log("New password set:", newPassword);
    // Optionally navigate user to the login page or show success message
  };

  return (
    <Box className="flex justify-center items-center h-screen bg-gray-100">
      <Box className="bg-white p-8 rounded-lg shadow-lg w-[400px]">
        <Typography variant="h4" align="center" className="mb-4">
          {/* // {showResetForm ? "Reset Password" : "Forgot Password"} */}
        </Typography>
        
        {/* Email form */}
        {!showResetForm && (
          <>
            <Typography variant="body2" align="center" className="mb-4">
              Enter your email address to reset your password.
            </Typography>
            <form onSubmit={handleSubmitEmail} className="space-y-4">
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                margin="normal"
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                className="mt-2"
              >
                Send Reset Link
              </Button>
            </form>
          </>
        )}

        {/* New password form */}
        {showResetForm && (
          <>
            <Typography variant="body2" align="center" className="mb-4">
              Enter your new password below.
            </Typography>
            <form onSubmit={handleSubmitNewPassword} className="space-y-4">
              <TextField
                fullWidth
                label="New Password"
                name="newPassword"
                type="password"
                value={newPassword}
                onChange={handleNewPasswordChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                margin="normal"
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                className="mt-2"
              >
                Set New Password
              </Button>
            </form>
          </>
        )}
      </Box>
    </Box>
  );
}

export default ForgotPasswordPage;
 
// import React from 'react';
// import { useState } from 'react';
// import { Box,TextField,Typography,Button } from '@mui/material';
// function ForgotPassword() {
      
//   const [data, setData] = useState('');

//   const handleEmailChange = (e) => {
//     setData(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDafault();
//   }
//   return(
//     <>
//       <Box>
//         <Typography>
//         enter your email address to reset password
//         </Typography>
//         <form onSubmit={handleSubmit}>
//         <TextField
//           label='Email'
//           name='email'
//           value={data}
//           onChange={handleEmailChange}
//           required
//         />
//         <Button
//          type='submit'
//          variant='contained'
//          color='primary'
//         >
//           submit
//         </Button>
//         </form>
//       </Box>
//     </>
//   );

// };
// export default ForgotPassword;
