import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';

function App() {

  React.useEffect(()=>{

    axios.get(process.env.REACT_APP_API)

    
    //такая запись равна ('http://localhost:3000/cart')
    // axios.get(process.env.REACT_APP_API+'/cart')
    


  },[])

  const array=[
    {
      type:'shell',
      value: process.env.REACT_APP_SHELL || 'нет данных'
    },
    {
      name:'env',
      value: process.env.REACT_APP_ENV_FILE || 'нет данных env'
    }
  ]

  return (
    <div className="App">
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
      <div>
        {
          array.map(({type, value}, index)=>(
            <div>
              <p>
                <b>Index: {index+1}</b>
              </p>
              <p>
                <b>Type: {type}</b>
              </p>
              <p>
                <b>Value: {value}</b>
              </p>
            </div>
          ))
        }
      </div>

    </div>
  );
}

export default App;
