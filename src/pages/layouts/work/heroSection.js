import { Container,styled, Box, Typography, Divider } from '@mui/material';
import React from 'react';
import DetailsCard from '../../../components/UI/detailsCard';
import Hero from '../../../components/UI/hero';
import Banner from "../../../assets/images/banner-bg-02.jpg";
import BrandButton from '../../../components/elements/brandButton';
import FlexBox from '../../../components/UI/flexBox';

const StyledContainer = styled(props => (
    <Container {...props} />
))(({theme, ...rest}) =>({
    padding: rest.padding ? rest.padding : '0px',
    margin: 'auto',
    width: '80%',
    [theme.breakpoints.down('sm')] : {
        width: '100%',
        padding: '0px'
    }
}))

const HeroSection = ({ title, excerpt, description, children }) => {
    return (
        <Hero height="500px" bgImage={Banner} justifyContent="center">
            <DetailsCard 
                title={title}
                titleVarient="h3"
                titleTextColor="#fff"
            >
                <Box sx={{ display: 'flex', justifyContent:'center' ,width: { xs: '100%', md: '80%', lg: '60%'}}}>
                    <Divider variant="middle" sx={{ borderBottom: '5px solid #1976d2' , width: '20%'}} />
                </Box>
                <Box sx={{ textAlign: 'center', width: { xs: '100%', md: '80%', lg: '60%', marginTop: '20px'}}}>
                    <Typography variant="h5" color="#fff" >{excerpt}</Typography>
                    <Box marginTop="10px">
                        <Typography variant="p" color="#fff" fontWeight="lighter">{description}</Typography>
                    </Box>
                    {children}
                </Box>
            </DetailsCard>
        </Hero>
    );
}

export default HeroSection;
