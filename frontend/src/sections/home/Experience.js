// @mui
import PropTypes from 'prop-types';
import { Box, Stack, Link, Card, Button, Divider, Typography, CardHeader } from '@mui/material';
// components
import Iconify from '../../components/iconify';
import Image from 'next/image';

// ----------------------------------------------------------------------

Experience.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};

export default function Experience({ title, subheader, list, ...other }) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
          {list.map((experience) => (
            <ExperienceItem key={experience.id} experience={experience} /> 
          ))}
        </Stack>

      <Divider />

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button size="small" color="inherit" endIcon={<Iconify icon={'eva:arrow-ios-forward-fill'} />}>
          View all
        </Button>
      </Box>
    </Card>
  );
}

// ----------------------------------------------------------------------

ExperienceItem.propTypes = {
  news: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.string,
    postedAt: PropTypes.instanceOf(Date),
    title: PropTypes.string,
  }),
};

function ExperienceItem({ experience }) {
  const { position, year_start, year_end, company, photo, description, detail_1, detail_2, detail_3 } = experience;

  return (
    <Stack direction="row" alignItems="center" spacing={3}>
      <Box component="div"  sx={{ width: 48, height: 48, borderRadius: 1.5, flexShrink: 0 }}>
        <Image 
        alt={''} 
        src={`${photo}`}
        width={1000}
        height={1000}/>
      </Box>

      <Box sx={{  }}>
        <Link color="inherit" variant="subtitle2" underline="hover" sx={{mb:1, pr: 3}} >
          {position} - {company}
        </Link>

        <Typography variant="body1" sx={{ color: 'text.secondary', pr: 3 }} >
          {description}
        </Typography>

        {year_end && year_end !== '' ?
        <>
          <Typography variant="body2" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
            {year_start} to {year_end}
          </Typography>
        </>
        :
        <>
          <Typography variant="body2" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
            {year_start} to Present
          </Typography>
        </>
      }

        <Typography variant="body2" sx={{ pr: 3, color: 'text.secondary', textAlign: 'justify' ,my:1}} >
          {detail_1}
        </Typography>
        {detail_2 && detail_2 !== '' &&
          <>
            <Typography variant="body2" sx={{ pr: 3, color: 'text.secondary', textAlign: 'justify' ,my:1}} >
              {detail_2}
            </Typography>
          </>}

        {detail_3 && detail_3 !== '' &&
          <>
            <Typography variant="body2" sx={{ pr: 3, color: 'text.secondary', textAlign: 'justify' ,my:1}} >
              {detail_3}
            </Typography>
          </>}



      </Box>
     

    </Stack>
  );
}
