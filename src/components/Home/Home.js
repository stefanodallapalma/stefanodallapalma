import React from "react";

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';


// MaterialIcons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import {
  CertificatesList,
  EducationTimeline,
  FrameworksStack,
  InterestsStack,
  LangaugesStack,
  ProjectsList,
  ToolsList  
} from "./home-components";

import certificates from './certificates.js'
import projects from './projects.js'
import tools from './tools.js'

import avatar from '../../assets/img/avatar.jpg';


import stackoverflowLogo from '../../assets/img/logos/stackoverflow.png';


const Home = () => {

  return (

      <Box alignItems="center">
        
        <Paper elevation={3} sx={{ padding: "20px", backgroundColor: '#e6f4ff !important' }}>
        
          <Container 
            sx={{ display: "flex", justifyContent: "center", }}>

            <Avatar
              alt="Stefano Dalla Palma"
              src={avatar}
              sx={{ width: 150, height: 150, }}
            />              
          </Container>
          
          <Container 
            sx={{ display: "flex", justifyContent: "center", }}>

            <Typography sx={{ color: 'text.primary' }}>
                  <h1>Stefano Dalla Palma</h1>
            </Typography>    
          </Container>
            
        
          <ButtonGroup variant="outlined" aria-label="outlined primary button group"
            sx={{display: "flex", justifyContent: "center"}}>
            
            <Button component="a" href="https://github.com/stefanodallapalma" target="_blank">
              <GitHubIcon sx={{color:"black"}}/>
            </Button>
            <Button component="a" href="https://www.linkedin.com/in/stefanodallapalma/" target="_blank">
              <LinkedInIcon/>
            </Button>
            <Button component="a" href="https://stackoverflow.com/users/3673842/s-dallapalma" target="_blank">
              <Avatar 
                alt="StackOverflow" 
                src={stackoverflowLogo} 
                sx={{ width: 20, height: 22, }}
              />
            </Button>
          </ButtonGroup>

        </Paper>

        <Paper elevation={3} sx={{ minWidth: 275, padding: "20px", marginTop: "20px" }}>
          
          {/* Interests */}
          <InterestsStack sx={{marginTop: "40px"}}/>
          
          {/* Languages */}
          <LangaugesStack sx={{marginTop: "20px"}}/>

          {/* Frameworks */}
          <FrameworksStack sx={{marginTop: "20px", marginBottom: "40px"}}/>
          

          {/* <Typography sx={{ color: 'text.secondary' }}>
            <h1><strong>Education and Professional Experience</strong></h1>
          </Typography> */}

          <EducationTimeline/>

          <Typography sx={{ color: 'text.secondary' }}>
            <h1><strong>Projects</strong></h1>
          </Typography>


          <ProjectsList projects = { projects } />

          <Typography sx={{ color: 'text.secondary' }}>
            <h1><strong>Certificates</strong></h1>
          </Typography>

          <CertificatesList certificates = { certificates } />


          <Typography sx={{ color: 'text.secondary' }}>
            <h1><strong>Tools</strong></h1>
          </Typography>
          <Paper elevation={3} sx={{ minWidth: 275 }}>
            {/* <CardContent> */}
              <ToolsList tools = { tools } />
            {/* </CardContent> */}
          </Paper>

        </Paper>
      
      </Box>
    );
};

export default Home;
