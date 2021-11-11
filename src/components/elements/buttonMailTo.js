import React from 'react';
import { NavLink } from "react-router-dom";

const ButtonMailTo = ({ label, mailto, ...rest}) => {
    return (
        <NavLink to="#" onClick={(e) => {
            window.location = mailto;
            e.preventDefault();
        }} {...rest}>
            {label}
        </NavLink>
    );
}

export default ButtonMailTo;
