// @mui
import { Box, Card, Container, Typography } from '@mui/material';
// components
import { get_project, get_projects } from '@/utils/api';
import Link from 'next/link'
import { useRouter } from "next/router"
import ImageGallery from "@/sections/project/ImageGallery";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import SEO from '@/components/seo';

// ----------------------------------------------------------------------

// static way:

export async function getStaticPaths() {
    const projects_data = await get_projects(12)
    const paths = projects_data.map((project) => ({
        params: { projectId: project.id.toString() },
    }));
    return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
    const project = await get_project(params.projectId)

    return {
        props: {
            project,
        },
    };
}

// serverside way:

//   export async function getServerSideProps({params}) {
//     const project = await get_project(params.projectId)

//     return {
//       props: {
//         project,
//       },
//     };
//   }

const ProjectDetail = ({
    project
}) => {
    const router = useRouter()
    const projectId = router.query.projectId


    return (
        <>
        <SEO pageTitle={`${project?.name ?? ''} - Detail`} />
            <DashboardLayout>

                <Container>
                    <Box sx={{ display: 'flex' }}>

                        <Link href='/projects'>
                            <ArrowBackIcon sx={{ color: "#5BE9B9", mt: 6 }} />
                        </Link>
                        <Typography variant="h4" sx={{ mt: 5, mx: 2 }}>
                            Project Detail:
                        </Typography>
                    </Box>
                    {project !== null && project && project.id.toString() === projectId.toString() ?
                        <>


                            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                                <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
                                    <ImageGallery data={project} />
                                    {/* project info */}
                                    <Card sx={{ mt: 3, py: 3, px: 3, }} className="md:mt-0">
                                        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                                            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{project && project.name}</h1>

                                            <div className="mt-3">
                                                <h2 className="sr-only">project information</h2>
                                                <p className="text-3xl text-gray-900">{project && project.category}</p>
                                            </div>



                                            <div className="mt-6">
                                                <h3 className="">Description:</h3>

                                                <div
                                                    className="text-base text-gray-700 space-y-6"
                                                    dangerouslySetInnerHTML={{ __html: project && project.description }}
                                                />
                                                <h3 className="mt-3">Website URL:</h3>

                                                <a href={project.url} target="_blank" rel="noreferrer">{project.url}</a>

                                                {/* <a
                                            className="text-base text-gray-700 space-y-6"
                                            dangerouslySetInnerHTML={{ __html: project && project.url }}
                                        /> */}

                                                <h3 className="mt-3">GitHub Repo:</h3>
                                                <a href={project.git_repo} target="_blank" rel="noreferrer">{project.git_repo}</a>

                                                {/* <a
                                            className="text-base text-gray-700 space-y-6"
                                            dangerouslySetInnerHTML={{ __html: project && project.git_repo }}
                                        /> */}
                                            </div>




                                        </div>
                                    </Card>

                                </div>
                            </div>

                            {/* <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <projectFilterSidebar
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort />
          </Stack>
        </Stack>
        {projects !== null && projects && <>
        <ProductList products={projects} />
        </>}
        <ProductCartWidget /> */}
                        </>
                        :
                        <>
                            loading...
                        </>
                    }
                </Container>
            </DashboardLayout>
        </>
    );
}

export default ProjectDetail;
