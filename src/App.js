import React,{Fragment} from "react";
import Main from "./components/Main/Main";
import {Route} from "react-router-dom";
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import First from "./components/FirstPage/First";

function App() {
  return (
    <Fragment>
      <Switch>
            <Route path="/first" exact>
                <First />
            </Route>
            <Route path="/">
                <Main />
            </Route>
            </Switch>
      </Fragment>
  );
}

export default App;
