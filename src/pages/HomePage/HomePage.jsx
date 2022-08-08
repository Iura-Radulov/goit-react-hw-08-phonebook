import { Box, Link } from '@mui/material';
import authSelectors from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';


export default function HomePage() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      {isLoggedIn ? (
        <Box
          sx={{
            textAlign: 'center',
            fontSize: '30px',
            padding: 8,
          }}
        >
          Welcome on our web site, where you can make your contacts
        </Box>
      ) : (
        <Box
          sx={{
            textAlign: 'center',
            fontSize: '30px',
            padding: 8,
          }}
        >
          You can make contacts after
          <Link
            href="/goit-react-hw-08-phonebook/register"
            color="primary"
            underline="hover"
            sx={{ margin: '0 5px' }}
          >
            sign up
          </Link>
          or
          <Link
            href="/goit-react-hw-08-phonebook/login"
            color="primary"
            underline="hover"
            sx={{ margin: '0 5px' }}
          >
            log in
          </Link>
        </Box>
      )}
      <Box
        sx={{
          paddingTop: 8,
          paddingBottom: 8,
          height: '100vh',
          backgroundImage:
            'url(https://previews.123rf.com/images/mingirov/mingirov2002/mingirov200200873/141015630-black-phone-book-icon-isolated-seamless-pattern-on-white-background-address-book-telephone-directory.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      ></Box>
    </>
  );
}
