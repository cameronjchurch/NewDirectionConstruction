import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';

import { HomeTest } from './components/HomeTest'
import { Products } from './components/Products';
import { Services } from './components/Services';
import { Team } from './components/Team';

import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Contact } from './components/Contact';
import { About } from './components/About';



import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/HomeTest' component={HomeTest} />
                <Route path='/Products' components={Products} />
                <Route path='/Services' components={Services} />
                <Route path='/Team' components={Team} />

                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                {
                    //<Route path='/fetch-data' component={FetchData} />
                }

            </Layout>
        );
    }
}
