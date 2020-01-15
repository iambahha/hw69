import React from 'react';
import {Route, Switch} from "react-router-dom";


function App() {
  return (
    <Switch>
      <Route path="/" exact component={DishesMenu} />
    </Switch>
  );
}

export default App;
