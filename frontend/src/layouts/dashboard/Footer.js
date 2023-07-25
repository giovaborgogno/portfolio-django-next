
import { Container, Box, Typography, Divider } from '@mui/material';




export default function Footer() {

  return (
    <footer >
        <Box >
            
      <Container maxWidth="lg" >
      <Divider sx={{ borderStyle: 'dashed' }} />
        <Box py={6} display="flex" flexWrap="wrap" alignItems="center" justifyContent='center'  className={''}>
            <Typography>
            © {new Date().getFullYear()} Giovanni Borgogno |
            </Typography>
            <Typography>
            | Built with Django Rest & Next.js
            </Typography>
         </Box>
      </Container>
        </Box>
    </footer>
  );
}