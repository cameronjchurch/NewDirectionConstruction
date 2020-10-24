import React, { Component } from 'react';
//import { Route } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Services } from './components/Services';
import { Team } from './components/Team';
import Windows from './components/Services/Windows/Windows';
//import { Gutters } from './components/Services/Gutters/Gutters';
//import { Roofing } from './components/Services/Roofing/Roofing';
//import { SidingAndPaint } from './components/Services/SidingAndPaint/SidingAndPaint';
import AdditionalServices from './components/Services/AdditionalServices';

import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

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
                {
                    //<Route exact path='/Services/Roofing' component={Roofing} />
                    //<Route exact path='/Services/SidingAndPaint' component={SidingAndPaint} />
                    //<Route exact path='/Services/Gutters' component={Gutters} />

                    //<Route path='/fetch-data' component={FetchData} />
                }

            </Layout>
        );
    }
}
