import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import MotDePasseOublie from './views/mot-de-passe-oublie'
import DetailsContrat from './views/details-contrat'
import GrilleDeControle from './views/grille-de-controle'
import Login from './views/login'
import Backup from './views/backup'
import Validation from './views/validation'
import Contrats from './views/contrats'
import CreerContrat from './views/creer-contrat'
import ValiderContrat from './views/valider-contrat'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={MotDePasseOublie} exact path="/mot-de-passe-oublie" />
        <Route component={DetailsContrat} exact path="/details-contrat" />
        <Route component={GrilleDeControle} exact path="/grille-de-controle" />
        <Route component={Login} exact path="/" />
        <Route component={Backup} exact path="/backup" />
        <Route component={Validation} exact path="/validation" />
        <Route component={Contrats} exact path="/contrats" />
        <Route component={CreerContrat} exact path="/creer-contrat" />
        <Route component={ValiderContrat} exact path="/valider-contrat" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
