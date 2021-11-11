import React from 'react';
import { Container, styled } from "@mui/material";

const StyledContainer = styled(props => (
    <Container {...props} />
))(({theme, bgColor, padding, margin, responsive}) => ({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    ...(padding && ({
        padding
    })),
    ...(margin && ({
        margin
    })),
    ...(bgColor && ({
        backgroundColor: (typeof bgColor === 'boolean')  ?  theme.palette.primary.main : bgColor
    })),
    ...(responsive && ({
        [theme.breakpoints.down('sm')] : {
            flexDirection: 'column',
            alignItem: 'center'
        }
    }))
}))

const Flexcontainer = ({children, ...restProps}) => {
    return (
        <StyledContainer {...restProps}>
            {children}
        </StyledContainer>
    );
}

export default Flexcontainer;
