import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import styles from './LoginPage.module.css';

import { Box, FormGroup, FormControl, FormLabel, TextField, Button } from '@mui/material';

export default function LoginPage() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
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
          <h1>Login page</h1>
          <FormGroup>
            <FormControl>
              <FormLabel sx={{ marginTop: '20px' }}>Email address</FormLabel>

              <TextField
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                label="Enter email"
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
                Log in
              </Button>
            </Box>
          </FormGroup>
        </Box>
      </div>
    </div>
  );
}
