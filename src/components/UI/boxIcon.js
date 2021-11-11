import React from 'react';
import { Box, styled, Typography } from "@mui/material";

const StyledBox = styled(props => (
    <Box {...props} />
))(({ theme, ...restProps }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: '.4s',
    flexDirection: 'column',
    color: restProps.color ? restProps.color : '#fff' ,
    ...(restProps.bgColor && ({
        backgroundColor: restProps.bgColor,
    })),
    ...(restProps.outlined && ({
        border: restProps.outlined
    })),
    ...(restProps.shadow && ({
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'
    })),
    '&:hover': {
        ...(restProps.bgColorOnHover && ({
            backgroundColor: restProps.bgColorOnHover
        })),
        ...(restProps.shadowOnHover && ({
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'
        })),
        ...(restProps.textOnHover && ({
            color: restProps.textOnHover
        }))
    }
}));

const BoxIcon = ({iconComponent: Component, ...restProps}) => {
    return (
        <StyledBox width={restProps.dimensions} height={restProps.dimensions} borderRadius={restProps.boxRadius} {...restProps}>
            <Component style={{ fontSize: restProps.iconFontSize}}  />
            {restProps.text && (
                <Typography variant="h6" color="inherit">{restProps.text}</Typography>
                )}
            {restProps.children}
        </StyledBox>
    );
}

export default BoxIcon;
