import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import store from './Utils/store';
import Routes from './routes';
import history from './Utils/history';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

const App = () => (
  <Container>
    <Provider store={store}>
      <Router history={history}>
        <Routes/>
      </Router>
    </Provider>
  </Container>
);

ReactDOM.render(<App />, document.getElementById('root'));