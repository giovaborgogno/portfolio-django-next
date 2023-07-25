// @mui
import { Box, Container, Stack, Typography } from '@mui/material';
// components
import ProjectsList from 'src/sections/project/ProjectsList';
// mock
import { get_projects } from '@/utils/api';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import SEO from '@/components/seo';

// ----------------------------------------------------------------------
// export async function getServerSideProps(context) {
export async function getStaticProps(context) {
  const projects = await get_projects(12)
  return {
    props: {
      projects,
    },
  };
}

const ProjectsPage = ({
  projects
}) => {

  return (
    <>
    <SEO pageTitle={'Projects'} />
    <DashboardLayout>

      <Container>
    <Box sx={{display: 'flex'}}>

        <Link href='/'>
          <ArrowBackIcon sx={{ color: "#5BE9B9", mt: 6 }} />
        </Link>
        <Typography variant="h4" sx={{ mt: 5, mx: 2 }}>
          Projects:
        </Typography>
    </Box>

        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            
          </Stack>
        </Stack>
        {projects !== null && projects && <>
          <ProjectsList projects={projects} />
        </>}
      </Container>
    </DashboardLayout>
    </>
  );
}

export default ProjectsPage