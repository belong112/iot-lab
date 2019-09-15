import React from 'react';
import Main from "./containers/Main.js"
import "./css/styles.css"
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter basename="/iot-lab">
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
  );
}

export default App;
