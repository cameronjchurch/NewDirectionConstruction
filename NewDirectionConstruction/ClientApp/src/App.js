import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './components/Home';
import { Services } from './components/Services';
import { Team } from './components/Team';
import Windows from './components/Services/Windows/Windows';
//import { Gutters } from './components/Services/Gutters/Gutters';
//import { Roofing } from './components/Services/Roofing/Roofing';
//import { SidingAndPaint } from './components/Services/SidingAndPaint/SidingAndPaint';
import AdditionalServices from './components/Services/AdditionalServices';

import { HomeUnderConstruction } from './components/HomeUnderConstruction';

import { About } from './components/About';

import './custom.css'

import withTracker from './withTracker';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Switch>
                    {
                        //<Route exact path='/' component={withTracker(HomeUnderConstruction, 'Home')} />
                    }
                    <Route exact path='/' component={withTracker(Home, 'Home')} />
                    
                    <Route exact path='/Services' component={withTracker(Services, 'Services')} />
                    <Route path='/Services/Windows' component={withTracker(Windows, 'Windows')} />

                    <Route exact path='/Team' component={withTracker(Team, 'Team')} />
                    <Route exact path='/about' component={withTracker(About, 'About')} />
                    <Route component={withTracker(AdditionalServices, 'AdditionalServices')} />
                </Switch>
            </Layout>
        );
    }
}
