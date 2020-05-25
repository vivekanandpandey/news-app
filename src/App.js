import React from 'react';
import NewsComponent from './Components/NewsComponent'
import { Route,BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <Router>
        <switch>
      <Route exact path="/" component ={NewsComponent}/>
      <Route  path="/news/:pageNo" component ={NewsComponent}/>
      </switch>
    </Router>
    </div>
  );
}
export default App;
