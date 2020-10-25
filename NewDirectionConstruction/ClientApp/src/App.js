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

import { About } from './components/About';

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/Services' component={Services} />
                    <Route path='/Services/Windows/Windows' component={Windows} />

                    <Route exact path='/Team' component={Team} />
                    <Route exact path='/about' component={About} />
                    <Route component={AdditionalServices} />
                </Switch>
            </Layout>
        );
    }
}
