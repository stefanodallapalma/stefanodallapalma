import React from "react";

import Avatar from '@mui/material/Avatar';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import radonLogo from '../../../assets/img/logos/radon.png';


class ProjectItem extends React.Component {
    render() {
        return (
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    sx={{ minHeight:"70px", }}
                >

                    
                    <Stack direction="row" spacing={1} sx={{width: '85%', flexShrink: 0}}>

                        <Avatar 
                            alt="Radon" 
                            src={radonLogo} 
                            sx={{ width: 25, height: 25, }}
                        />
                        
                        <Typography sx={{display: "flex", alignItems: "center"}}>
                            <strong>{this.props.title}</strong>
                        </Typography>
                    </Stack>

                    <Typography sx={{ color: 'text.secondary' }}>{this.props.startDate} - {this.props.endDate}</Typography>
                </AccordionSummary>
                    
                <AccordionDetails>

                    <Typography component="span" sx={{ color: 'text.secondary' }}>
                        {this.props.description}
                    </Typography>


                    <Typography sx={{ color: 'text.secondary' }}>
                        <a target='_blank' href={this.props.URL}>Learn more about the project</a>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        );
    }
};


export default class ProjectsList extends React.Component {
    render(){
        return (
            <Box>
                {this.props.projects.map((projectInfo, _) => (
                    <ProjectItem 
                        title = { projectInfo.title }
                        description = { projectInfo.description }
                        startDate = { projectInfo.startDate }
                        endDate = { projectInfo.endDate }
                        URL = { projectInfo.URL }
                    />
                ))}
            </Box>
    )};
}


