import React from 'react';
import {Route, Switch} from "react-router-dom";
import MainPage from "./containers/MainPage/MainPage";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
    </Switch>
  );
}

export default App;
