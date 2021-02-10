import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ApplicationPaths } from './ApiAuthorizationConstants';

const LoginMenu = (props) => {

    const { isAuthenticated, userName } = props;

    const authenticatedView = (userName, profilePath, logoutPath) => {
        return (<Fragment>
            <div className="center">
                <Link className="text-dark" to={profilePath}>Hello {userName}</Link> | <Link className="text-dark" to={logoutPath}>Logout</Link>
            </div>
        </Fragment>);
    }

    const anonymousView = (registerPath, loginPath) => {
        return (<Fragment>
            <div className="center">
                <Link className="text-dark" to={loginPath}>Login</Link>
            </div>
        </Fragment>);
    }

    if (!isAuthenticated) {
        const registerPath = `${ApplicationPaths.Register}`;
        const loginPath = `${ApplicationPaths.Login}`;
        return anonymousView(registerPath, loginPath);
    } else {
        const profilePath = `${ApplicationPaths.Profile}`;
        const logoutPath = { pathname: `${ApplicationPaths.LogOut}`, state: { local: true } };
        return authenticatedView(userName, profilePath, logoutPath);
    }
}

export default LoginMenu;