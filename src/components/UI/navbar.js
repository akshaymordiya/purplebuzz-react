import React, { memo, useState } from 'react';
import { Box, AppBar, Toolbar, CssBaseline, Typography, ThemeProvider, Menu, MenuItem, IconButton, styled, Divider } from "@mui/material";
import { Business, Menu as MenuIcon, NotificationsActive, Person, Settings } from '@mui/icons-material';
import Navigationlink from '../elements/navigationlink';
import useWindowDimensions from '../../helpers/hooks/useWindowDimensions';
import { useRouteMatch, useLocation } from "react-router-dom";
import theme from "./themes/navbar.theme";
import MobileNavigationDrawer from './mobileNavigationDrawer';
import { pageNavigationLinks } from '../../config/routes';


const StyledToolbar = styled(Toolbar)(({theme}) => ({
    [theme.breakpoints.between('xs','lg')] : {
        justifyContent: 'space-between'
    },
    [theme.breakpoints.up('lg')] : {
        justifyContent: 'space-around'
    }
}));


const StyledTypography = styled(Typography, { shouldForwardProp: (prop) => prop !== 'leftspace' })(({theme, leftspace}) => ({
    display: 'flex',
    alignItems: 'center',
    padding:'0 12px',
    fontWeight: 'bold',
    ...(leftspace && {
        padding: '0 5px'
    })
}))

const activeLinkStyle = { 
    backgroundColor: '#4232c2', 
    color: '#fff' 
};

const Navbar = () => {

    const { width } = useWindowDimensions();  
    const { pathname } = useLocation();
    const [drawer, setDrawer] = useState(false);
    const toggleDrawer = (value) => (event) => {
        if(event.type === 'keydown' || event.key === 'tab' || event.key === 'shift'){
            return;
        }

        setDrawer(value);
    }
    
    const mobileMenuId = 'primary-search-account-menu-mobile';

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{flexGrow: 1}}>
                <AppBar position="relative" color="inherit">
                    <StyledToolbar >
                        <StyledTypography
                            variant="h6"
                            noWrap
                            color="#212121"
                            component="div"
                            >
                            <IconButton
                                size="large"
                                edge="start"
                                aria-label="open drawer"
                                >
                                <Business />
                            </IconButton>
                            Purple
                            <StyledTypography color="#4232c2" variant="h6" leftspace={true}>Buzz</StyledTypography>
                        </StyledTypography>
                        <Box sx={{ display: { xs: 'none', lg: 'flex'}}}>
                            {pageNavigationLinks.map(link => (
                                <Navigationlink key={link.name} to={link.to} exact={link.exact} activeStyle={link.to === pathname ? activeLinkStyle : {}} >{link.name}</Navigationlink>
                            ))}
                        </Box>
                        <Box sx={{ display: {  lg: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                variant="menu"
                                onClick={toggleDrawer(true)}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        <Box sx={{ display: { xs: 'none', lg: 'flex'}, marginRight: '50px' }}>
                            <IconButton
                                size="large"
                                variant="buttons"
                                animation="ring"
                                >
                                <NotificationsActive color="primary" />
                            </IconButton>
                            <IconButton
                                size="large"
                                variant="buttons"
                                >
                                <Settings color="primary" />
                            </IconButton>
                            <IconButton
                                size="large"
                                variant="buttons"
                                >
                                <Person color="primary" />
                            </IconButton>
                        </Box>
                    </StyledToolbar>
                </AppBar>
                {width <= 1200 && <MobileNavigationDrawer
                    toggleDrawer={toggleDrawer}
                    anchor="bottom"
                    drawer={drawer}
                />}
            </Box>
        </ThemeProvider>
    );
}

export default memo(Navbar);
