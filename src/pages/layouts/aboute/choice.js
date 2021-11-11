import React, { memo } from 'react';
import { Grid, Box, styled } from "@mui/material";
import Flexcontainer from '../../../components/UI/flexContainer';
import Banner from "../../../assets/images/work.svg";
import DetailsCard from '../../../components/UI/detailsCard';

const StyleGrid = styled(props => (
    <Grid {...props} />
))(() => ({
    backgroundColor:"#e8eaf6",
    padding: '40px 0px',
}))

const StyledImage = styled(props => (
    <img {...props}></img>
))(({theme}) => ({
    position: 'absolute',
    top: '0px',
    left: '10%',
    zIndex:'3',
    width: '450px',
    [theme.breakpoints.down('lg')]: {
        left: '0px',
        top:'0px',
        width: '300px'
    },
}))

const Choice = () => {
    return (
        <Flexcontainer maxWidth={false} maxHeight="300px"  margin="0px" sx={{ padding:{ xs: "240px 0px 0px 0px", md: '240px 0px 0px 0px', lg: '210px 0px 0px 0px'}, position: 'relative', top: '0px'}}>
            <StyleGrid container margin="auto">
                <Grid item xs={12} md={12} lg={5} margin="auto">
                    <StyledImage src={Banner} alt="Why we are"/>
                </Grid>
                <Grid item xs={12} md={12} lg={7}  padding="15px">
                    <DetailsCard 
                        title="Why you choose us?"
                        fontweight="bold"
                        subTitle={(
                            <span>
                                You are allowed to download and use this Purple Buzz template for your websites. 
                                You are not allowed to re-distribute this template ZIP file on other template websites. 
                                It is quite easy to simply copy and repost the ZIP file on any  
                                <a href="https://www.google.com/search?q=free+css" target="_blank" style={{ color:"#4232c2", margin: '0px 5px' }}>Free CSS collection</a>websites.
                            </span>
                        )}
                        />                    
                </Grid>
            </StyleGrid>
        </Flexcontainer>
    );
}

export default memo(Choice);
