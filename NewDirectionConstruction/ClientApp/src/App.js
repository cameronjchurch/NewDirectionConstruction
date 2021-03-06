import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Windows } from './components/Services/Windows/Windows';
import { AdditionalServices } from './components/Services/AdditionalServices';
import { Gallery } from './components/Services/Gallery/Gallery';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';
import AdminHome from './components/Admin/AdminHome';
import withTracker from './withTracker';

import './custom.css'

export default class App extends Component {    
    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path='/' component={withTracker(Home)} />
                    <Route path='/Services/Windows' component={withTracker(Windows)} />
                    <Route path='/Services/Gallery' component={withTracker(Gallery)} />
                    <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
                    <AuthorizeRoute path='/Admin' component={AdminHome} />
                    <Route component={withTracker(AdditionalServices)} />
                </Switch>
            </Layout>
        );
    }
}
