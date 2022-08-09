import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import styles from './RegisterPage.module.css';
import { Box, FormGroup, FormControl, FormLabel, TextField, Button } from '@mui/material';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const isError = useSelector(authSelectors.getError);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));

    if (password.length < 7) {
      setErrorMessage('Your password must be at least 7 characters');
    }
    if (isError) {
      setName('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <Box
          onSubmit={handleSubmit}
          component="form"
          sx={{
            '& > :not(style)': { m: 1 },
          }}
          autoComplete="off"
        >
          <h1>Register page</h1>
          <FormGroup>
            <FormControl>
              <FormLabel sx={{ marginTop: '20px' }}>Name</FormLabel>
              <TextField
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                label="Enter name"
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel sx={{ marginTop: '20px' }}>Email address</FormLabel>

              <TextField
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                label="Enter email"
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel sx={{ marginTop: '20px' }}>Password</FormLabel>

              <TextField
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                label="Password"
                helperText={errorMessage}
                required
              />
            </FormControl>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Button variant="contained" type="submit" sx={{ marginTop: '40px', width: '200px' }}>
                Sign up
              </Button>
            </Box>
          </FormGroup>
        </Box>
      </div>
    </div>
  );
}
