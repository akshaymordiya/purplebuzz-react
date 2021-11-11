import React from 'react';
import { styled } from "@mui/material";

const StyledButton = styled((props) => (
    <button
        {...props}
        onClick={props.onClickHandler}
    >
    </button>
))(({theme, margin, width, outlined, radius, color, textColor, borderColor, fontsize, fontweight, textOnHover, filled, shadowOnHover, borderOnHover, spacing }) => ({
    ...(width ? ({
        width
    }) : ({
        width: '100%'
    })),
    cursor: 'pointer',
    ...(margin && ({
        margin
    })),
    fontSize: fontsize ? fontsize : '16px',
    fontWeight: fontweight ? fontweight: 'normal',
    textTransform: 'uppercase',
    backgroundColor: 'transparent',
    transition: '.4s ',
    borderRadius: radius ? radius : '20px',
    padding: spacing ? spacing : '13px 20px',
    ...(outlined && ({
        border: borderColor ? `1px solid ${borderColor}` : `1px solid ${color}`,
        color: textColor ? textColor : color
    })),
    ...(filled && ({
        backgroundColor: color,
        opacity: '0.8',
        color: textColor,
        border: 'none'
    })),
    '&:hover': {
        ...(outlined && ({
            backgroundColor: color
        })),
        ...(filled && ({
            opacity: 1
        })),
        ...(textOnHover ? ({ color: textOnHover }) : ({ color: '#fff' })),
        ...(shadowOnHover && ({ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px' })),
        ...(borderOnHover && ({ border: `1px solid ${borderOnHover}` }))
    }
}))

const BrandButton = (props) => {
    return (
        <StyledButton  {...props} onClick={props.onClickHandler}>{props.children}</StyledButton>
    );
}

export default BrandButton;
