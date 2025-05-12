'use client';

import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { Button, Container, Typography, Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import { auth } from '@/firebase';

export default function Home() {
  const router = useRouter();
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
      router.push('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Typography variant="h4" gutterBottom>
        Necxis
      </Typography>
      <Button variant="contained" onClick={handleLogin} startIcon={
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              style={{ width: 20, height: 20,  backgroundColor: 'white',
                borderRadius: '2px',
                padding: '2px' }}
            />
      }>
        Sign up with Google
      </Button>
    </Box>
  </Container>
  );
}
