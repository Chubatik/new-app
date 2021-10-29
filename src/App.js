import React from 'react';
import './styles/App.css';
import {HashRouter, Route} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";

const App = () => {



  return (
      <HashRouter>
          <Route path={'/about'}>
              <About/>
          </Route>
          <Route path={'/posts'}>
              <Posts />
          </Route>
      </HashRouter>
  );
}

export default App;
