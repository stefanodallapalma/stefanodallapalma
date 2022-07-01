import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

// MaterialIcons
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';



export default function EducationTimeline() {
  return (
    <Timeline position="alternate">
        <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2">
            2019 - Current
        </TimelineOppositeContent>
        <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
            <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography component="span">
            Ph.D.
            </Typography>
            <Typography variant="h5">Defect Prediction of Infrastructure-as-Code</Typography>
            <Typography variant="h6">Jheronimus Academy of Data Science - Tilburg University</Typography>
        </TimelineContent>
        </TimelineItem>

        {/* Datasound */}
        <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary">
            2017 - 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
                <BusinessIcon />
            </TimelineDot>
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent 
            color="text.secondary"
            sx={{ py: '12px', px: 2 }}>
            <Typography component="span">Co-founded Datasound s.r.l</Typography>
            <Typography variant="h6">Spin-off of the University of Molise</Typography>
        </TimelineContent>
        </TimelineItem>


        {/* Erasmus */}
        <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary">
            Apr 2018 - Jul 2018
        </TimelineOppositeContent>
        <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
            <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent 
            color="text.secondary"
            sx={{ py: '12px', px: 2 }}>
            <Typography component="span">Erasmus Traineeship</Typography>
            <Typography variant="h6">University College London</Typography>
        </TimelineContent>
        </TimelineItem>


        {/* MSc */}
        <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary">
            2016 - 2018
        </TimelineOppositeContent>
        <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
            <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent 
            color="text.secondary"
            sx={{ py: '12px', px: 2 }}>
            <Typography component="span">MSc Degree</Typography>
            <Typography variant="h5">Software System Security</Typography>
            <Typography variant="h6">University of Molise</Typography>
        </TimelineContent>
        </TimelineItem>

        {/* BSc */}
        <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary">
            2013 - 2016
        </TimelineOppositeContent>
        <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
            <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent 
            color="text.secondary"
            sx={{ py: '12px', px: 2 }}>
            <Typography component="span">BSc Degree</Typography>
            <Typography variant="h5">Computer Science</Typography>
            <Typography variant="h6">University of Molise</Typography>
        </TimelineContent>
        </TimelineItem>
    </Timeline>
  );
}
