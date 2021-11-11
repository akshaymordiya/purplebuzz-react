import React from 'react';
import { Container, Box, styled, Typography, IconButton, Stack, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { ArrowForwardIos, Business, Call, Facebook, LinkedIn, Mail, WhatsApp } from "@mui/icons-material";
import { pageNavigationLinks } from '../../config/routes';
import { NavLink } from 'react-router-dom';
import ButtonMailTo from '../elements/buttonMailTo';

const worklist = [
    {
       name: 'Branding',
       to: '/'  
    },
    {
       name: 'Bussiness',
       to: '/'  
    },
    {
       name: 'Marketing',
       to: '/'  
    },
    {
       name: 'Social Media',
       to: '/'  
    },
    {
       name: 'Digital Solution',
       to: '/'  
    },
    {
       name: 'Graphics',
       to: '/'  
    }
]

const StyledContainer = styled(props => (
    <Container {...props} />
))(({theme, bgcolor, shadow}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  backgroundColor: bgcolor ? bgcolor : theme.palette.primary.main,
  ...(shadow && ({
      boxShadow: 'rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px'
  })),
  color: '#fff',
  padding: '40px',
  [theme.breakpoints.down("sm")] : {
      flexDirection: 'column',
      alignItems: 'flex-start'
  }
}))

const StyleListItem = styled(props => (
    <ListItem {...props} />
))(({theme}) => ({
    cursor: 'pointer',
    transition: '.3s',
    '&:hover': {
        padding: '0px 10px'
    }
}))

const FooterLinks = (props) => {
    return (
        <Box>
            <Typography variant="h5" color="inherit" fontWeight="normal">{props.title}</Typography>
            <List sx={{marginTop: '10px',paddingLeft: '10px'}}>
                {props.list && props.list.map(link => (
                    <StyleListItem key={link.name} disableGutters disablePadding >
                        <ListItemIcon color="#fff" style={{ padding: '0px', margin: '0px', width: '25px', minWidth: '20px'}}>
                            {link.icon ? link.icon : (<ArrowForwardIos  style={{ fontSize: '13px', color: '#fff'}} />) }
                        </ListItemIcon>
                        <ListItemText primary={(
                            <NavLink to={link.to} style={{textDecoration: 'none', color: '#fff'}}>{link.name}</NavLink>
                        )} />   
                    </StyleListItem>
                ))}
                {props.listItem && props.listItem}
            </List>
        </Box>
    )
}

const Footer = () => {
    return (
        <>
            <Grid container spacing={3}  justifyItems="center" padding="40px" color="#fff" style={{backgroundColor: '#1976d2', marginTop: 'auto'}}>
                <Grid item xs={12} md={6} lg={3}>
                    <Box  >
                        <Typography
                            variant="h6"
                            noWrap
                            fontWeight="bold"
                            component="div"
                            padding="0px 10px"
                            >
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                >
                                <Business />
                            </IconButton>
                            Purple Buzz
                        </Typography>
                        <Box sx={{padding: '0px 10px', marginY: '10px'}}>
                            <Typography  component="span" marginY="20px" >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</Typography>
                        </Box>
                        <Stack direction="row">
                            <IconButton color="inherit" size="large">
                                <Facebook style={{ fontSize: '30px' }}/>
                            </IconButton>
                            <IconButton color="inherit">
                                <WhatsApp style={{ fontSize: '30px' }}/>
                            </IconButton>
                            <IconButton color="inherit">
                                <LinkedIn style={{ fontSize: '30px' }}/>
                            </IconButton>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <FooterLinks
                        title="Our Company"
                        list={pageNavigationLinks}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <FooterLinks 
                        title="Our Works"
                        list={worklist}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <FooterLinks 
                        title="For Client"
                        listItem={(
                            <>
                                <ListItem disableGutters disablePadding >
                                    <ListItemIcon color="#fff" style={{ padding: '0px', margin: '0px', width: '25px', minWidth: '20px'}}>
                                        <Call style={{ fontSize: '16px', color: '#fff'}} />
                                    </ListItemIcon>
                                    <ListItemText primary={(
                                        <ButtonMailTo mailto="tel:010-020-0340" label="010-0202-0340" style={{ color: "#fff", textDecoration: 'none' }} />
                                    )} />   
                                </ListItem>
                                <ListItem disableGutters disablePadding >
                                    <ListItemIcon color="#fff" style={{ padding: '0px', margin: '0px', width: '25px', minWidth: '20px'}}>
                                        <Mail style={{ fontSize: '16px', color: '#fff'}} />
                                    </ListItemIcon>
                                    <ListItemText primary={(
                                        <ButtonMailTo mailto="mailto:purplebuzz@example.com" label="purplebuzz@example.com" style={{ color: "#fff", textDecoration: 'none' }} />
                                    )} />   
                                </ListItem>
                            </>
                        )}
                    />
                </Grid>
            </Grid>
            <StyledContainer maxWidth={false} bgcolor="#1565c0" shadow>
                <Typography variant="p" paddingX="40px" color="inherit">© Copyright 2021 Purple Buzz Company. All Rights Reserved.</Typography>
                <Typography variant="p" paddingX="40px">Designed by
                    <Typography component="span" marginLeft="2px" fontWeight="bold">TemplateMo</Typography>
                </Typography>
            </StyledContainer>
        </>
    );
}

export default Footer;
