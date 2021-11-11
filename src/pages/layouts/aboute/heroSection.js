import { Container,styled, SvgIcon, Box } from '@mui/material';
import React from 'react';
import DetailsCard from '../../../components/UI/detailsCard';
import Hero from '../../../components/UI/hero';
import Banner from "../../../assets/images/banner-img-02.svg";

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

const HeroSection = () => {
    return (
        <Hero height="50%">
            <Hero.GridContainer spacing={-1}>
                <Hero.GridItem xs={12} md={6} lg={6} style={{ display: 'flex' , alignItem: 'center'}}>
                    <StyledContainer>
                        <DetailsCard
                            titleVarient="h3"
                            titleTextColor="#1976d2"
                            dividerColor="#1976d2"
                            title="About Us"
                            subTitle={(
                                <span>
                                    Vector illustration credit goes to <a href="http://freepik.com/" target="_blank">FreePik</a> website. Purple Buzz is provided by TemplateMo. Lorem ipsum dolor sit amet, consectetur.
                                </span>
                            )}
                            divider
                        />
                    </StyledContainer>
                </Hero.GridItem>
                <Hero.GridItem xs={12} md={6} lg={6} >
                    <Box sx={{ padding: { xs: '0px', md: '40px', lg: '40px' }}}>
                        <img src={Banner} ></img>
                    </Box>
                </Hero.GridItem>
            </Hero.GridContainer>
        </Hero>
    );
}

export default HeroSection;
