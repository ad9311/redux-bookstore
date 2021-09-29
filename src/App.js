import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/cofigureStore';
import Navbar from './components/Navbar';
import BookPage from './pages/BookPage';
import CategoriesPage from './pages/CategoriesPage';
import NoMatchPage from './pages/NoMatchPage';

const App = () => (
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/">
            <BookPage />
          </Route>
          <Route path="/categories">
            <CategoriesPage />
          </Route>
          <Route path="*">
            <NoMatchPage />
          </Route>
        </Switch>
      </main>
    </Router>
  </Provider>
);

export default App;
