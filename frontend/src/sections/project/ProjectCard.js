import PropTypes from 'prop-types';
// @mui
import { Box, Card,Typography, Stack, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
// components
import Link from 'next/link';
import Image from 'next/image'

// ----------------------------------------------------------------------

const StyledProjectImg = styled(Image)({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
  transition: 'transform 250ms',
  '&:hover': {
    transform: 'scale(0.9)',
    cursor: 'pointer'
  }
});

// ----------------------------------------------------------------------

ProjectCard.propTypes = {
  project: PropTypes.object,
};

export default function ProjectCard({ project }) {
  const { id, name, photo_1, category } = project;

  return (
    <Card
    >
      <Box sx={{ pt: '100%', position: 'relative' }}>

        <Link href={`/projects/detail/${id}`}>
          <StyledProjectImg alt={name} src={`${photo_1}`} width={1000} height={1000} />
        </Link>
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Typography variant="body2" noWrap>
        {category}
        </Typography>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="subtitle1" noWrap>

            {name}
          </Typography>
          <Link href={`/projects/detail/${id}`} sx={{ textDecoration: 'none' }} style={{ textDecoration: 'none' }}>
            <Button
              sx={{ color: '#6E07F3', '&:hover': { backgroundColor: "#5BE9B9", color: 'white' } }}
            >Detail</Button>
          </Link>
        </Stack>
      </Stack>
    </Card>
  );
}
