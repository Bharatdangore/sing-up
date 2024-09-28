 
import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Box, 
  Typography, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function SingUp() {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    companyName: '',
    contactName: '',
    termsAccepted: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (event) => {
    setFormData({ ...formData, role: event.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, termsAccepted: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      // Form submit logic here
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <Box className="flex justify-center items-center h-screen bg-gray-100">
      <Box className="bg-white p-4 rounded-lg shadow-lg w-[320px] space-y-3">
        <Typography variant="h6" align="center" gutterBottom className="text-gray-800">
          Sign Up
        </Typography>

        <form onSubmit={handleSubmit} className="space-y-3">
          <TextField
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            className="bg-gray-50"
            size="small"
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            className="bg-gray-50"
            size="small"
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            className="bg-gray-50"
            size="small"
          />
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            className="bg-gray-50"
            size="small"
          />

          <FormControl fullWidth className="bg-gray-50" size="small">
            <InputLabel>Role</InputLabel>
            <Select value={formData.role} onChange={handleSelectChange} size="small">
              <MenuItem value="Admin">Admin</MenuItem>
              <MenuItem value="Project Manager">Project Manager</MenuItem>
              <MenuItem value="Team Lead">Team Lead</MenuItem>
              <MenuItem value="Employee">Employee</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Company/Organization Name"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            className="bg-gray-50"
            size="small"
          />
          <TextField
            label="Contact Number"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            className="bg-gray-50"
            size="small"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={formData.termsAccepted}
                onChange={handleCheckboxChange}
                className="text-blue-500"
              />
            }
            label="I agree to the Terms and Conditions"
          />

          <Button type="submit" variant="contained" fullWidth className="bg-blue-500 text-white hover:bg-blue-600">
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default SingUp;
