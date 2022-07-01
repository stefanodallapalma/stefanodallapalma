import React from "react";

import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default class InterestsStack extends React.Component {
    render() {
        return (
            <Stack direction="row" spacing={1} sx={this.props.sx}>
                <Chip avatar={<Avatar>SE</Avatar>} label="Software Engineering"  color="primary" variant="outlined"/>
                <Chip avatar={<Avatar>ML</Avatar>} label="Machine Learning" color="primary" variant="outlined" />
                <Chip avatar={<Avatar>QA</Avatar>} label="Quality Assurance"  color="primary" variant="outlined"/>
                <Chip avatar={<Avatar>PM</Avatar>} label="Project Management"  color="primary" variant="outlined"/>
            </Stack>
        )
    }
}