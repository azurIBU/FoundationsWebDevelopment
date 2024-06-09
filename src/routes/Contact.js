import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formValues.name) {
      errors.name = 'Name is required';
    } else if (formValues.name.length < 2) {
      errors.name = 'Name should be at least 2 characters long';
    }

    if (!formValues.email) {
      errors.email = 'Email is required';
    } 

    if (!formValues.message) {
      errors.message = 'Message is required';
    } else if (formValues.message.length < 10) {
      errors.message = 'Message should be at least 10 characters long';
    }

    setFormErrors(errors);
    return JSON.stringify(errors) === "{}";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <Box 
      sx={{ 
        maxWidth: 400, 
        mx: 'auto', 
        mt: 5,
        p: 3, 
        border: '1px solid #ccc', 
        borderRadius: 1 
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Contact Us
      </Typography>
      {submitted ? (
        <Typography variant="h6" component="p" color="primary">
          Thank you for your message!
        </Typography>
      ) : (
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            value={formValues.name}
            onChange={handleInputChange}
            error={formErrors.name}
            helperText={formErrors.name}
            margin="normal"
          />
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formValues.email}
            onChange={handleInputChange}
            error={formErrors.email}
            helperText={formErrors.email}
            margin="normal"
          />
          <TextField
            fullWidth
            id="message"
            name="message"
            label="Message"
            multiline
            rows={4}
            value={formValues.message}
            onChange={handleInputChange}
            error={formErrors.message}
            helperText={formErrors.message}
            margin="normal"
          />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
      )}
    </Box>
  );
};

export default Contact;
