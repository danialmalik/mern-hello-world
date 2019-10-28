import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class HelloWorld extends Component {
    render() {
        return (
            <div>
                <h1>Boiler Plate!</h1>
                <div>
                    This is basic boiler plate i follow for my mern stack projects.
                </div>
            </div>
        );
    }
}

export default hot(module)(HelloWorld);
