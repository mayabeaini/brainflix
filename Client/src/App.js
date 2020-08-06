import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header';
import Main from './Pages/Main/Main'
import Upload from './Pages/Upload/Upload'
import './styles/App.scss';

function App () {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/' exact component={Main}/>
        <Route path='/upload' component={Upload}/>
        <Route path='/video/:id' component= {Main}/>
      </Switch>
    </>
  );
}

export default App;