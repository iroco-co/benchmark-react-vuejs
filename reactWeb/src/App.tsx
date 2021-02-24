import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './modules/navigation/header';
import { Landing as Mails } from './modules/mails';

function App() {
  return (
    <div className="App">
      <div className="frame">
        <Header />

        <Switch>
          <Route exact path="/" component={Mails} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
