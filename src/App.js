// ====================
// Lab 4
// Stanley Nguyen
// Humber College
// CPAN-144-RNA
// Ronak Sheth
// June 9, 2026
// ====================
import logo from './logo.svg';
import './App.css';
// Step 2: Now display those two components within your main App component.(App.js)
import MyComponent1 from './MyComponent1';
import MyComponent2 from './MyComponent2';

function App() {
  return (
    <div className="App">
      <MyComponent1 />
      <MyComponent2 />
    </div>
  );
}

{/*
function App() {
  return (
    <div className="App">
      {/*
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
    </div>
  );
}
*/}

export default App;
