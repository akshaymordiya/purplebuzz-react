import React from 'react';
import { Container, Box, styled, Paper, Typography, Stack, IconButton, Divider} from "@mui/material";
import Carousel from 'react-material-ui-carousel';
import Banner from "../../../assets/images/banner-bg-01.jpg";
import BrandButton from "../../../components/elements/brandButton";
import {  HorizontalRule } from '@mui/icons-material';

const items = [
    {
        title: `Develop Strategies for your business`,
        subTitle: 'Purple Buzz is a corporate HTML template with Bootstrap 5 Beta 1. This CSS template is 100% free to download provided by TemplateMo. Total 6 HTML pages included in this template. Icon fonts by Boxicons. Photos are from Unsplash and Icons 8.',
        divider: true
    },
    {
        title: 'HTML CSS Template with Bootstrap 5 Beta 1',
        subTitle: 'You are not allowed to re-distribute this Purple Buzz HTML template as a downloadable ZIP file on any kind of Free CSS collection websites. This is strongly prohibited. Please contact TemplateMo for more information.',
        divider: false
    },
    {
        title: 'Cupidatat non proident, sunt in culpa qui officia',
        subTitle: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.',
        divider: false
    },
];

const StyledPaper = styled(Paper)(({theme}) => ({
    backgroundImage: `url(${Banner})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    height: '100%',
    position: 'relative',
    minHeight: '80vh',
    width: '100%',
    [theme.breakpoints.between('sm', 'md')] : {
        minHeight: '50vh'
    },
    [theme.breakpoints.down('sm')] : {
        minHeight: '100vh'
    }
}))

const StyledTypography = styled(Typography)(({theme}) => ({
    color: '#4232c2',
    maxWidth: '50%',
    lineHeight: '1.2em',
    fontWeight: 'bold',
    [theme.breakpoints.between('sm', 'lg')]: {
        maxWidth: '100%',
    },
    [theme.breakpoints.down('sm')] : {
        maxWidth: '100%',
        fontSize: '35px'
    }
}))

const StyledContainer = styled(Container)(({theme}) => ({
    position: 'absolute',
    bottom: '10',
    height: '100%',
    minHeight: '80vh',
    [theme.breakpoints.between('sm', 'md')] : {
        minHeight: '50vh'
    },
    [theme.breakpoints.down('sm')] : {
        minHeight: '100vh'
    }
}))


const StyledCarousel = styled(Carousel)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    minHeight: '80vh',
    [theme.breakpoints.between('sm', 'md')] : {
        minHeight: '50vh',
    },
    [theme.breakpoints.down('sm')] : {
        minHeight: '100vh'
    }
}))


const HeroSectionWithCarousel = () => {
    return (
        <StyledPaper >
            <StyledContainer maxWidth="false">
               <StyledCarousel
                    autoPlay
                    animation="slide"
                    indicators
                    timeout={500}
                    IndicatorIcon={(<HorizontalRule  />)}
                    navButtonsProps={{
                        style: {
                            backgroundColor: 'transparent',
                            color: '#4232c2',
                            fontSize: "53px"
                        }
                    }}
                    indicatorIconButtonProps={{
                        style: {
                            color: '#c5cae9',
                            padding: '10px'
                        }
                    }}
                    activeIndicatorIconButtonProps={{
                        style: {
                            backgroundColor: 'transparent',
                            color: '#4232c2',
                            padding: '10px'
                        }
                    }}
                    indicatorContainerProps={{
                        style: {
                            textAlign: 'center',
                        }
                    }}
                    cycleNavigation
                    navButtonsAlwaysVisible
               >
                   {items.map((item, index) => (
                        <Container key={index} style={{ margin: 'auto'}}>   
                            <Stack spacing={4} sx={{padding: '5% 0%'}} >
                                <StyledTypography  varient="h1" fontSize="50px">{item.title}</StyledTypography>
                                {item.divider && (<Divider variant="inset"  sx={{ borderBottom:'5px solid #4232c2', width: '20%'}} />)}
                                <Box>
                                    <Typography  varient="p" color="secondary"  minWidth="250px" maxWidth="1000px">{item.subTitle}</Typography>
                                </Box>
                                <Box sx={{ maxWidth: '300px', minWidth: '200px' }}>
                                    <BrandButton outlined color="#4232c2" shadowOnHover>
                                        Get Started
                                    </BrandButton>
                                </Box>
                            </Stack>
                        </Container>
                   ))}
               </StyledCarousel>
            </StyledContainer>
        </StyledPaper>
    );
}

export default HeroSectionWithCarousel;
