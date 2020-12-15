import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import store from './Utils/store';
import Routes from './routes';
import history from './Utils/history';
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
export default App;