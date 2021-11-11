import React, { memo } from 'react';
import { Container, styled, Grid } from "@mui/material";

const StyledContainer = styled(props => (
    <Container {...props} />
))(({theme, ...rest}) => ({
    maxWidth: '100%',
    height: rest.height ? rest.height : '500px',
    backgroundColor: rest.bgColor ? rest.bgColor : '#e3f2fd',
    margin: rest.margin ? rest.margin : '0px',
    border: rest.border ? rest.border : 'none',
    padding: rest.padding ? rest.padding : '20px',
    display: rest.display ? rest.display : 'flex',
    justifyContent: rest.justifyContent ? rest.justifyContent : 'none',
    alignItems: rest.alignItems ? rest.alignItems : 'center',
    ...(rest.bgImage && ({
        backgroundImage: `url(${rest.bgImage})`,
        backgroundPosition: rest.bgPosition ? rest.bgPosition : 'center center',
        backgroundSize: rest.bgSize ? rest.bgSize : 'cover',
        backgroundRepeat: rest.bgRepeat ? rest.bgRepeat : 'no-repeat'
    })),
}))
 
export default function Hero ({children, ...restProps}){
    return (
        <StyledContainer maxWidth={false} {...restProps}>
            {children}
        </StyledContainer>
    );
}

Hero.GridContainer = function HeroGridContainer({children, ...restProps}) {
    return (
        <Grid container {...restProps}>
            {children}
        </Grid>
    );
}

Hero.GridItem = function HeroGridItem({children, xs, md, lg, ...restProps}) {
    return (
        <>
            <Grid item xs={xs} md={md} lg={lg} sx={{ padding: '20px'}} {...restProps}>{children}</Grid>
        </>
    )
}
