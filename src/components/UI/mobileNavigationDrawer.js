import React, { Fragment } from 'react';
import { Box, Drawer, List, Divider, ListItem, ListItemText,  ListItemIcon, IconButton, styled } from "@mui/material";
import { NotificationsActive, Settings, Person } from "@mui/icons-material";
import Navigationlink from '../elements/navigationlink';
import { pageNavigationLinks } from '../../config/routes';
import { useLocation } from 'react-router';

const activeLinkStyle = { 
    backgroundColor: '#4232c2', 
    color: '#fff' 
};

const StyleListItem = styled(ListItem, { shouldForwardProp: prop => prop !== 'alingment' })(({theme, alignment}) => ({
    justifyContent: 'center',
   
    ...(alignment && {
        textAlign: alignment
    })
}))

const MobileNavigationDrawer = ({ toggleDrawer, anchor, drawer}) => {
    const { pathname } = useLocation(); 
    return (
        <Fragment>
            <Drawer
                anchor={anchor}
                open={drawer}
                onClose={toggleDrawer(false)}
                sx={{
                    '& .MuiDrawer-paper': {
                        borderRadius: '20px 20px 0px 0px', 
                        padding: '10px'
                    },
                  }}
            >
                <Box
                    sx={{
                        borderRadius: '20px',
                        display: 'block',
                      }}
                    role="presentation"
                   
                    onKeyDown={() => toggleDrawer(false)}
                >
                    <List>
                        {pageNavigationLinks.map(link => (
                            <StyleListItem button key={link.key} alignment="center">
                                <ListItemText sx={{ margin: '10px 0px'}}>
                                    <Navigationlink to={link.to} activeStyle={pathname === link.to ? activeLinkStyle : {}} >{link.name}</Navigationlink>
                                </ListItemText>
                            </StyleListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        <StyleListItem >
                            <ListItemIcon >
                                <IconButton
                                    size="large"
                                    variant="buttons"
                                    iconcolor="primary"
                                    animation="ring"
                                    >
                                    <NotificationsActive />
                                </IconButton>
                                <IconButton
                                    size="large"
                                    variant="buttons"
                                    iconcolor="primary"
                                    >
                                    <Settings />
                                </IconButton>
                                <IconButton
                                    size="large"
                                    variant="buttons"
                                    iconcolor="primary"
                                    >
                                    <Person />
                                </IconButton>
                            </ListItemIcon>
                        </StyleListItem>
                    </List>
                </Box>
            </Drawer>
        </Fragment>
    );
}

export default MobileNavigationDrawer;
