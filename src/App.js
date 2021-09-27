import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookPage from './pages/BookPage';
import CategoriesPage from './pages/CategoriesPage';
import NoMatchPage from './pages/NoMatchPage';

const App = () => (
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
); 

export default App;
