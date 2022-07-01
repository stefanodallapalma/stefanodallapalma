import React from "react";

import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

// Logos
import sklearnLogo from '../../../assets/img/logos/sklearn.png';
import imblearnLogo from '../../../assets/img/logos/imblearn.png';
import deapLogo from '../../../assets/img/logos/deap.png';
import flaskLogo from '../../../assets/img/logos/flask.png';

export default class FrameworksStack extends React.Component {
    render() {
        return (
            <Stack direction="row" spacing={1} sx={this.props.sx}>
                <Chip 
                avatar={<Avatar>PD</Avatar>} 
                label="PyDriller"  
                color="secondary" 
                variant="outlined"
                component="a" href="https://github.com/ishepard/pydriller" target="_blank" sx={{cursor:"pointer"}}
                />
                
                <Chip
                avatar={<Avatar alt="Sklearn" src={sklearnLogo} />}
                label="Scikit-Learn"
                variant="outlined"
                component="a" href="https://github.com/scikit-learn/scikit-learn" target="_blank" sx={{cursor:"pointer"}}
                />
                <Chip
                avatar={<Avatar alt="ImbLearn" src={imblearnLogo} />}
                label="Imbalanced-Learn"
                variant="outlined"
                component="a" href="https://github.com/scikit-learn-contrib/imbalanced-learn" target="_blank" sx={{cursor:"pointer"}}
                />
                <Chip
                avatar={<Avatar alt="Flask" src={flaskLogo} />}
                label="Flask"
                variant="outlined"
                component="a" href="https://github.com/pallets/flask" target="_blank" sx={{cursor:"pointer"}}
                />
                <Chip
                avatar={<Avatar alt="Deap" src={deapLogo} />}
                label="Deap"
                variant="outlined"
                component="a" href="https://github.com/DEAP/deap" target="_blank" sx={{cursor:"pointer"}}
                />
            </Stack>
        )
    }
}