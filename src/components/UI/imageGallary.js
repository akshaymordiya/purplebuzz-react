import React, {  useState } from 'react';
import { Box, styled } from "@mui/material";

const StyledBox = styled(props => (
    <Box {...props}></Box>
))(({ activeImg}) => ({
    width: activeImg ? '130px' : '100px',
    height: '100px',
    cursor:'pointer',
    borderRadius: '10px',
    position: 'realtive',
    margin: activeImg ? '0 40px' : '0 -25px',
    display: 'inline-block',
    lineHeight: '100px',
    boxShadow: '0 10px 6px -6px #777',
    transform: activeImg ? 'none' : 'skew(-20deg) rotate(-20deg)',
    transition: '.3s'
}));

const ImageGallary = ({images}) => {
    const [activeImage, setActiveImage] = useState(3);

    const changeActiveImage = (index) => {
        setActiveImage(index)
    }

    return (
        <Box  padding="20px 0px">
            <img src={images[activeImage].original} width="100%" height="100%" alt='active-view' style={{borderRadius: '10px', border:'1px solid #e0e0e0'}} />
            <Box padding="50px 20px" display="flex" justifyContent="center">
                {images.map((img, index) => (
                    <StyledBox key={index} activeImg={index === activeImage} onClick={() => changeActiveImage(index)}>
                        <img src={img.thumbnail} width="100%" height="100%" alt={`view-${index}`} style={{ borderRadius:"10px"}} />
                    </StyledBox>
                ))}
            </Box>
        </Box>
    );
}

export default ImageGallary;
