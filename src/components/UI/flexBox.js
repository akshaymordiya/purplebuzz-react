import { Box, styled } from '@material-ui/core';
import React from 'react';

const StyledBox = styled(props => (
    <Box {...props} />
))(({theme, ...rest}) => ({
    width: '100%',
    padding: rest.padding ? rest.padding : '0px',
    margin: rest.margin ? rest.margin : '0px',
    display: 'flex',
    flexWrap: rest.wrap ? rest.wrap : 'wrap',
    ...(rest.flexDirection && ({
        flexDirection: rest.flexDirection
    })),
    justifyContent: rest.justifyContent ? rest.justifyContent : 'center',
    ...(rest.alignItems && ({
        alignItems: rest.alignItems
    }))
}))

const FlexBox = ({children, ...restProps}) => {
    return (
        <StyledBox {...restProps}>
            {children}
        </StyledBox>
    );
}

export default FlexBox;
