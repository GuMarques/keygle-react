import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../src/store'

import Login from './view/login'
import Cadastro from './view/cadastro'
import Home from './view/home'
import Sobre from './view/sobre'
import LostPassword from './view/lostpassword';
import Historico from './view/historico';
import Favoritos from './view/favoritos';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/keygle-react/cadastro' component={Cadastro}/>
        <Route exact path='/keygle-react/login' component={Login}/>
        <Route exact path='/keygle-react/lostpassword' component={LostPassword}/>
        
        <Route exact path='/keygle-react' component={Home}/>

        <Route path='/keygle-react/favoritos/:parametro' component={Favoritos}/>
        <Route path='/keygle-react/historico/:parametro' component={Historico}/>
        <Route exact path='/keygle-react/sobre' component={Sobre}/>
      </Router>
    </Provider>
  );
}

export default App;
