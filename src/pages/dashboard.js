import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { onAuthStateChanged, signOut } from 'firebase/auth';
// import { auth } fro../app/pageapp/page';
import { Container, Typography, Avatar, Button } from '@mui/material';
import { auth } from '../firebase';

export default function Dashboard() {

  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      if (u) setUser(u);
      else router.push('/');
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/');
  };

  if (!user) return null;

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem', textAlign: 'center' }}>
      <Avatar src={user.photoURL} sx={{ width: 80, height: 80, margin: '0 auto' }} />
      <Typography variant="h5" mt={2}>Welcome, {user.displayName}</Typography>
      <Typography>{user.email}</Typography>
      <Button onClick={handleLogout} variant="contained" color="error" sx={{ mt: 3 }}>
        Logout
      </Button>
    </Container>
  );
}