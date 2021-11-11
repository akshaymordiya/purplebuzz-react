import React from 'react';
import { Grid, Typography, Box, ImageList, ImageListItem } from "@mui/material";
import Flexcontainer from '../../../components/UI/flexContainer';
import { work } from "../../../config/static";

const FeatureWork = () => {
    return (
        <Flexcontainer maxWidth={false} bgColor="#e8eaf6" >
            <Grid container sx={{ padding: { xs:'20px', lg:'60px' }}}>
                <Grid item xs={12} md={6} sx={{ padding: {xs: '0px', lg: '50px 100px'}}} display="flex" justifyContent="center" alignItems="center">
                    <Box >
                        <Typography variant="body2" fontSize="20px" marginY="10px" color="text.secondary">Featured Work</Typography>
                        <Typography variant="h4" fontWeight="bold" marginY="13px" color="#000">Transform with us</Typography>
                        <Typography variant="body2" color="text.secondary" marginBottom="15px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</Typography>    
                        <Typography variant="body2" color="text.secondary">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Typography>    
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} >
                    <Box>
                        <ImageList variant="masonry" cols={2} gap={30}>
                            {work.gallary.map((item) => (
                            <ImageListItem key={item}>
                                <img
                                src={`${item}?w=248&fit=crop&auto=format`}
                                srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item}
                                loading="lazy"
                                />
                            </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>
                </Grid>
            </Grid>
        </Flexcontainer>
    );
}

export default FeatureWork;
