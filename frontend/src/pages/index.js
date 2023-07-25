import Link from 'next/link';
import { styled } from '@mui/material/styles';
// @mui
import { Box, Button, Grid, Container, Typography, Stack } from '@mui/material';
// components
import Iconify from '../components/iconify';

// api
import { get_projects, get_education, get_experience } from '@/utils/api'

// ------------------- sections
import ListTools from 'src/sections/home/ListTools';
import ProjectsList from 'src/sections/project/ProjectsList';
import GetInTouch from 'src/sections/home/GetInTouch';
import Experience from 'src/sections/home/Experience';
import Education from 'src/sections/home/Education';
import Services from 'src/sections/home/Services'
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import Image from 'next/image';
import SEO from '@/components/seo';


const StyledContent = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(5, 0),
}));


// ----------------------------------------------------------------------

export async function getStaticProps(context) {
  const projects = await get_projects(4)
  const experience = await get_experience()
  const education = await get_education()
  return {
    props: {
      projects,
      experience,
      education,
    },
  };
}

const Home = ({
  projects,
  experience,
  education,
}) => {

  return (
    <>
      <SEO index={true} />
      <DashboardLayout>

        <Container maxWidth="xl">
          <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
            <Typography variant="h1" paragraph>
              Giovanni Borgogno
            </Typography>

            <Typography variant="h3" sx={{ color: '#5BE9B9' }}>
              I'm a Backend Developer
            </Typography>

            <Box
              sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
              component="div" // Aquí también podrías usar 'div' en lugar de 'img', ya que NextImage se renderizará como una imagen dentro de un div.
            >
              <Image
                src="/assets/images/hero-devices.svg"
                alt=""
                width={700}
                height={700}
              // layout="fill" // O ajusta el valor según tus necesidades ('fill', 'responsive', 'intrinsic', 'fixed')
              />
            </Box>
            <Button href='#contactsection' size="large" variant="contained"
              sx={{ backgroundColor: '#5BE9B9', '&:hover': { backgroundColor: "#6E07F3" } }}
            >
              Get in touch
            </Button>
          </StyledContent>
        </Container>

        <Container >
          <Typography variant="h4" sx={{ mt: 10, mb: 10, textAlign: 'center' }}>
            Hi, Nice to meet you,
          </Typography>
          <Grid container spacing={3} sx={{ alignItems: 'center' }}>
            <Grid item xs={12} md={6} lg={4}>

              <Image src='/assets/images/avatars/avatar_default.jpg' style={{ borderRadius: "2%" }} width={1000} height={1000} alt='' />
            </Grid>

            <Grid item xs={12} md={6} lg={8}>

              <Typography sx={{ color: 'text.secondary', textAlign: 'justify' }}>
                I'm Giovanni, a Backend Developer and Systems Engineering student currently in my 6th semester.
                My specialty is building web applications using Next.js, Django & Docker, and I also have experience working with a lot of technologies.
                As a tech enthusiast, I'm constantly learning new technologies and expanding my skillset. I'm also the founder at IT Virtuous, a software development agency, where I apply my leadership skills.
                Tools & Frameworks:
                {/* <br /> */}

              </Typography>
              <ListTools />

            </Grid>
          </Grid>

          <Grid container spacing={3} sx={{ mt: 5 }}>
            <Grid item xs={12} sm={12} md={4} >
              <Services title="Web development using the most recent frameworks & SEO optimization." total={'Web Development'} icon={'ant-design:code-filled'}
                sx={{
                  transition: 'transform 250ms',
                  '&:hover': {
                    transform: 'scale(0.9)',
                  }
                }}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
              <Services title="Development of custom software solutions tailored to the client's needs." total={'Software Development'} color="info" icon={'cib:bitcoin'}
                sx={{
                  transition: 'transform 250ms',
                  '&:hover': {
                    transform: 'scale(0.9)',
                  }
                }}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
              <Services title="Creation of online stores and shopping cart solutions for businesses." total={'E-commerce Development'} color="warning" icon={'cib:google-ads'}
                sx={{
                  transition: 'transform 250ms',
                  '&:hover': {
                    transform: 'scale(0.9)',
                  }
                }}
              />
            </Grid>


          </Grid>

          <Typography variant="h4" sx={{ mt: 10, textAlign: 'center' }}>
            Portfolio
          </Typography>
          <Container maxWidth='md'>
            <Typography sx={{ color: 'text.secondary', textAlign: 'center' }}>
              These are some of the latest projects I've worked on. Built with different technologies such as React, PHP, Python/Django, WordPress.
            </Typography>
          </Container>

          {projects !== null && projects && <>
            <ProjectsList projects={projects} sx={{ my: 2 }} />
          </>}

          <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" >
            <Stack direction="row" spacing={1} flexShrink={0} sx={{ mt: 2, mr: 2 }}>
              <Link href={'/projects'} style={{ textDecoration: 'none', color: '#6E07F3', }} >

                <Button size="small" color="inherit" endIcon={<Iconify icon={'eva:arrow-ios-forward-fill'} />}>
                  View all
                </Button>
              </Link>

            </Stack>
          </Stack>

          <GetInTouch />

          <Grid container spacing={3} sx={{ mt: 5 }}>

            <Grid item xs={12} md={6} lg={8}>

              {experience !== null && experience &&
                <>
                  <Experience
                    title="Professional Experience"
                    list={experience}
                  />
                </>}

            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              {education !== null && education &&
                <>
                  <Education
                    title="Education"
                    list={education}
                  />
                </>}

            </Grid>


          </Grid>
        </Container>
      </DashboardLayout>
    </>
  );
}

export default Home;