import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export class HomeTest extends Component {
    static displayName = HomeTest.name;

    render() {
        return (
            <div>
                <h1>Example Content</h1>
                <div>
                    <h3>Mission Statement</h3>
                    <p>TODO... fill in here</p>
                    <div>
                        <p>
                            Providing superior service and the highest quality products to Jacksnville and surrounding areas.
                        </p>
                    </div>
                </div>
                <div>
                    <h3>Services</h3>
                    <ul>
                        <li>Windows</li>
                        <li>Gutters</li>
                        <li>Roofing</li>
                    </ul>
                </div>
                <div>
                    <h3>Reviews</h3>
                    <ul>
                        <li>FB</li>
                        <li>BBB</li>
                        <li>Angie's list</li>
                        <li>Home Advisor</li>
                    </ul>
                </div>
                <div>
                    <h3>Vendors</h3>
                    <ul>
                        <li>Pella</li>
                        <li>Simonton</li>
                        <li>Etc...</li>
                    </ul>
                </div>

                <div>
                    <Carousel>
                        <Carousel.Item>
                            <p>Item 1</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <p>Item 2</p>
                        </Carousel.Item>
                    </Carousel>
                </div>

                {/*
                <p>We can put what ever you want here, there, and wherever</p>
                <ul>
                    <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
                    <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
                    <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
                </ul>
                <p>To help you get started, we have also set up:</p>
                <ul>
                    <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
                    <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
                    <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
                </ul>
                <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
            */}
            </div>
        );
    }
}
