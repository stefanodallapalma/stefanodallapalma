import React from "react";

import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

// Logos
import pythonLogo from '../../../assets/img/logos/python.png';
import javaLogo from '../../../assets/img/logos/java.png';
import kotlinLogo from '../../../assets/img/logos/kotlin.png';
import jsLogo from '../../../assets/img/logos/js.png';
import prologLogo from '../../../assets/img/logos/prolog.png';


export default class LangaugesStack extends React.Component {
    render() {
        return (
            <Stack direction="row" spacing={1} sx={this.props.sx}>
                <Chip
                    avatar={<Avatar alt="Python" src={pythonLogo} />}
                    label="Python"
                    variant="outlined"
                />
                <Chip
                    avatar={<Avatar alt="Java" src={javaLogo} />}
                    label="Java"
                    variant="outlined"
                />
                <Chip
                    avatar={<Avatar alt="Kotlin" src={kotlinLogo} />}
                    label="Kotlin"
                    variant="outlined"
                />
                <Chip
                    avatar={<Avatar alt="Javascript" src={jsLogo} />}
                    label="Javascript"
                    variant="outlined"
                />
                <Chip
                    avatar={<Avatar alt="Prolog" src={prologLogo} />}
                    label="Prolog"
                    variant="outlined"
                />
            </Stack>
        )
    }
}