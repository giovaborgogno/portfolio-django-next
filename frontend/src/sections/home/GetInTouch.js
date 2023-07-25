import { Box, Grid, Typography, Stack, Divider, Card,} from '@mui/material';
import { styled } from '@mui/material/styles';
import ContactForm from "./ContactForm";
import Image from 'next/image';

const StyledContent = styled('div')(({ theme }) => ({
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(5, 0),
  }));

export default function GetInTouch(){
    return(
        <Grid container spacing={3} sx={{ pt: 16 }} name='contactsection' id="contactsection">
          <Grid item xs={12} md={6} lg={4}>
            <Box sx={{ px: 2.5, py: 3}}>
              <Stack alignItems="center" spacing={3} sx={{ pt: 5, borderRadius: 2, position: 'relative' }}>
                <Image
                  // component="img"
                  src="/assets/illustrations/illustration_contact.png"
                  width={1000}
                  height={1000}
                  alt=''
                />

                <Box sx={{ textAlign: 'center' }}>
                  <Typography gutterBottom variant="h6">
                   Like what you see?
                  </Typography>

                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Thank you for visiting my website, I would love to work with you. Contact me.
                  </Typography>
                </Box>

                
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} lg={8} >
            <Card>
              <StyledContent sx={{ px: 3 }} >
                <Typography variant="h4" gutterBottom>
                  Get in touch
                </Typography>

                <Typography variant="body2" >
                  Send me an email, I appreciate your message.
                </Typography>
                <Divider sx={{ my: 3 }}>
                </Divider>

                <ContactForm />
              </StyledContent>
            </Card>
          </Grid>
        </Grid>
    )
}