import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const NavigationLink = ({ to, children, className, ...rest}) => {
    return (
        <Fragment>
            <NavLink to={to} className={className}  {...rest}>{ children }</NavLink>
        </Fragment>
    );
}

export default styled(NavigationLink)`
    text-decoration: none;
    padding: 8px 20px;
    color: rgba(0,0,0,.55);
    border-radius: 20px;
    margin: 0 50px;
    transition: 0.3s;
    &:hover {
        color: #fff;
        background-color: #4232c2;
    };
`;
