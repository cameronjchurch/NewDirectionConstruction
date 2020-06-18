import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Contact } from './components/Contact';
import { About } from './components/About';

import { HomeTest } from './components/HomeTest'

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                {
                    //<Route path='/fetch-data' component={FetchData} />
                }
                <Route path='/HomeTest' component={HomeTest} />
            </Layout>
        );
    }
}
