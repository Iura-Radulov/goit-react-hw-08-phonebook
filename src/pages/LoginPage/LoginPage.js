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
      {/* <Container>
       <Row className="justify-content-center"> */}
      <div className={styles.form}>
        <Box
          onSubmit={handleSubmit}
          component="form"
          sx={{
            '& > :not(style)': { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <h1>Login page</h1>
          <FormGroup>
            <FormControl>
              <FormLabel>Email address</FormLabel>

              <TextField
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                label="Enter email"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>

              <TextField
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                label="Password"
              />
            </FormControl>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </FormGroup>
        </Box>
      </div>
      {/* </Row>
    </Container> */}
    </div>
  );
}
