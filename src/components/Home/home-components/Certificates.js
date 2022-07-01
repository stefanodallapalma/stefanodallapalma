import React from "react";

import Avatar from '@mui/material/Avatar';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import PushPinIcon from '@mui/icons-material/PushPin';

// List
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


import courseraLogo from '../../../assets/img/logos/coursera.png';


class Certificate extends React.Component {
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
                            alt="StackOverflow" 
                            src={courseraLogo} 
                            sx={{ width: 25, height: 25, }}
                        />
                        
                        <Typography sx={{display: "flex", alignItems: "center"}}>
                            <strong>{this.props.title}</strong>
                        </Typography>
                    </Stack>

                    <Typography sx={{ color: 'text.secondary' }}>{this.props.issuingOrganization}</Typography>
                </AccordionSummary>
                    
                <AccordionDetails>

                    <Typography sx={{ color: 'text.secondary' }}>
                        <strong>Learning Objectives:</strong>
                    </Typography>

                    <List>
                    {this.props.learningObjectives.map((objective, _) => (
                        <ListItem disablePadding>
                        <ListItemIcon>
                            <PushPinIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={objective} sx={{ color: 'text.secondary' }}/>
                    </ListItem>
                    ))}
                    </List>
                    
                    <Button 
                        component="a" href={this.props.credentialURL} target="_blank" 
                        variant="outlined"
                        color="primary"
                    >
                        Verify
                    </Button>

                </AccordionDetails>
            </Accordion>
        );
    }
};


class CertificatesList extends React.Component {
    render(){
        return (
            <Box alignItems="center">
                {this.props.certificates.map((certificateInfo, _) => (
                    <Certificate
                    title = { certificateInfo.title }
                    issuingOrganization = { certificateInfo.issuingOrganization }
                    credentialURL = { certificateInfo.credentialURL }
                    description = { certificateInfo.description }
                    learningObjectives = { certificateInfo.learningObjectives }
                    />
                ))}
            </Box>
    )};
}


export default CertificatesList;



