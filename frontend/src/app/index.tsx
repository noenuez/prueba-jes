/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './containers/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';
import {Fiscalia} from  './containers/Fiscalia/Loadable'
import {FiscaliasList} from  './containers/FiscaliasList/Loadable'
export function App() {
  const { i18n } = useTranslation();
  return (
    <Container>
      <BrowserRouter>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
          <a className="navbar-brand" href="#">
            Prueba tecnica
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/fiscalia-lista">
                  Fiscalias crud
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/fiscalia-lista" component={FiscaliasList} />
          <Route exact path="/fiscalia" component={Fiscalia} />
          <Route exact path="/fiscalia/:id" component={Fiscalia} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </BrowserRouter>
    </Container>
  );
}
