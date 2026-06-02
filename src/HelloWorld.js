// ====================
// Lab 3
// Stanley Nguyen
// Humber College
// CPAN-144-RNA
// Ronak Sheth
// June 2, 2026
// --------------------
// This program demonstrates how to create a simple React component that displays "Hello World" on the screen. It also shows how to import and render this component in the main application file (index.js).
// ====================
// Create a new file "HelloWolrd.js" in /src/ and add the following code:
import React, { Component } from 'react';
class HelloWorld extends Component {
    render() {
        return (
            <div className="HelloContainer">
                <h1>Hello World</h1>
            </div>
        )
    }
}
export default HelloWorld;