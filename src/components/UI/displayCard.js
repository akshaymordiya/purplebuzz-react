import React, { useRef, useState, forwardRef } from 'react';
import { Box, styled } from "@mui/material";
import { Flipped } from "react-flip-toolkit";

const StyledBox = styled(forwardRef((props, ref) => (
    <Box
        ref={ref}
        {...props}
    >    
    </Box>
)))(({theme, width, height, bgImage, gradient, hoverGradient, hover, fadeInAnimation}) => ({
    display: 'flex',
    flexWrap: 'wrap',
    position: 'absolute',
    backgroundImage: `linear-gradient(${gradient.direction}, ${gradient.colors.join("").toString()})`,
    backgroundPosition: 'center center',
    backgroundSize: '100% 100%',
    transition: '.4s',
    zIndex: 1,
    cursor: 'pointer',
    borderRadius: '20px',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    maxWidth: '600px',
    minWidth: '100px',
    ...(width ? ({
        width
    }) : ({ width: '400px'}) ),
    maxHeight: '500px',
    minHeight: '100px',
    
    ...(height ? ({
        height
    }) : ({ height: '350px' })),
    flexDirection: 'column',
    '&:hover': {
        backgroundImage: `linear-gradient(${hoverGradient.direction}, ${hoverGradient.colors.join("").toString()})`,
        animation: `animateBg 0.8s linear`,
        backgroundSize: '100% 200%',
        "@keyframes animateBg": {
            "0%": {
              backgroundPosition: 'center bottom',
            },
            '100%': {
              backgroundPosition: 'center center'
            }
        }
    }
}))

const StyledDiv = styled('div')(({theme, hover}) => ({
    position: 'absolute',
    bottom: '5px',
    margin: '15px',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
   ...(hover && ({
        animation: 'text ease 1s',
        animationFillMode: 'forwards',
        transition: '0.4s',
        "@keyframes text": {
            "0%" : {
                bottom: '5px'
            },
            "100%": {
                bottom: '25%'
            }
        }
    })),
}))

const StyledImage = styled('img')(({theme}) => ({
    position: 'relative',
    top: '0%',
    zIndex: 0,
    borderRadius: '20px'
}))

const AnimatedDiv = styled('div')(({ fadeInAnimation }) => ({
    position: 'relative',
    margin: '15px',
    ...(fadeInAnimation && ({
        animation: 'fadeIn 2s',
        '@keyframes fadeIn': {
            "from": {
                opacity: "0"
            },
            "to": {
                opacity: "1"
            }
        },
    })),
})); 

const DisplayCard = (props) => {
    const boxRef = useRef(null);
    const [ hover, setHover ] = useState(false);

    const handleMouseHover = (value) => {
        if(props.changeAlignmentOnHover){
            setHover(value)
        }

        if(props.onMouseHoverCallback){
            props.onMouseHoverCallback(value);
        }
    }

    return (
        <Flipped flipId={props.flipId}>
            <AnimatedDiv {...props} >
                <StyledBox  {...props} hover={hover} ref={boxRef} onMouseEnter={() => handleMouseHover(true)} onMouseLeave={() => handleMouseHover(false)} >
                    <StyledDiv hover={hover} >
                        {props.children}
                    </StyledDiv>
                </StyledBox>
                <StyledImage src={props.bgImage} width={props.width} height={props.height} ></StyledImage>
            </AnimatedDiv>
        </Flipped>
    );
}

export default DisplayCard;
