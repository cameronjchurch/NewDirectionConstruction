import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';

import { HomeTest } from './components/HomeTest'
import { Products } from './components/Services/Products';
import { Services } from './components/Services';
import { Team } from './components/Team';
import { Windows } from './components/Services/Windows';
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
                <Route exact path='/HomeTest' component={HomeTest} />       
                <Route exact path='/Services/Windows' component={Windows} />
                <Route exact path='/Services' component={Services} />
                
                <Route exact path='/Team' component={Team} />

                <Route exact path='/about' component={About} />
                <Route exact path='/contact' component={Contact} />
                {
                    //<Route path='/fetch-data' component={FetchData} />
                }

            </Layout>
        );
    }
}
