import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';

import { Products } from './components/Services/Products';

import { Services } from './components/Services';
import { Team } from './components/Team';
import { Windows } from './components/Services/Windows/Windows';
import { Gutters } from './components/Services/Gutters/Gutters';
import { Roofing } from './components/Services/Roofing/Roofing';
import { SidingAndPaint } from './components/Services/SidingAndPaint/SidingAndPaint';


import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

import { About } from './components/About';



import './custom.css'


export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />                                 
                <Route exact path='/Services' component={Services} />
                <Route exact path='/Services/Windows' component={Windows} />
                <Route exact path='/Services/Gutters' component={Gutters} />
                <Route exact path='/Services/Roofing' component={Roofing} />
                <Route exact path='/Services/SidingAndPaint' component={SidingAndPaint} />
                <Route exact path='/Team' component={Team} />
                <Route exact path='/about' component={About} />
                
                {
                    //<Route path='/fetch-data' component={FetchData} />
                }

            </Layout>
        );
    }
}
