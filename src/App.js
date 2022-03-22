import React from "react";
import Main from "./Main";
import UpdateGrade from "./UpdateGrade";
import { Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Route path="/" exact>
        <Main />
      </Route> 
      <Route path="/UpdateGrade/:update_week" exact>
        <UpdateGrade />
      </Route>
    </div>
  );
}

export default App;
