import React, { memo } from 'react';
import { Route } from 'react-router-dom';
import { routes } from './config/routes';

const Routes = () => {    
    return (
        <React.Fragment>
            {routes.map((route , index) => (
                <Route key={index} path={route.path} component={route.component} exact={route.exact} />
            ))}
        </React.Fragment>
    );
}

export default memo(Routes);
