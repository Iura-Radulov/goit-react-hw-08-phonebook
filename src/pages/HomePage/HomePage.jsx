import { Box } from '@mui/material';

export default function HomePage() {
  return (
    <>
      <Box
        sx={{
          alignItems: 'center',
          fontSize: '22px',
          padding: 8,
        }}
      >
        You can make contacts after registration
      </Box>
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
