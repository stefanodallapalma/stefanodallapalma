import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import GitHubIcon from '@mui/icons-material/GitHub';

class ToolItem extends React.Component {
  
    render(){
        return (
            <ListItem disablePadding>
                <ListItemButton component="a" href={this.props.link} target="_blank">
                    <ListItemIcon>
                        <GitHubIcon />
                    </ListItemIcon>
                    <ListItemText primary={this.props.name} secondary={this.props.role}/>
                </ListItemButton>
            </ListItem>
    )};
}


class ToolsList extends React.Component {
    render(){
        return (
            <List>
                {this.props.tools.map((tool, _) => (
                    <ToolItem 
                        name = {tool.name}
                        role = {tool.role}
                        link = {tool.link}
                    />
                ))}
            </List>
    )};
}

export default ToolsList