import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import MovieList from './components/MovieList';
import NewMovieForm from './components/NewMovieForm';
import MovieDetails from './components/MovieDetails';
import EditMovieForm from './components/EditMovieForm';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/movies/new">Add New Movie</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/movies" component={MovieList} />
        <Route path="/movies/new" component={NewMovieForm} />
        <Route path="/movies/:id/edit" component={EditMovieForm} />
        <Route path="/movies/:id" component={MovieDetails} />
      </Switch>
    </Router>
  );
};

export default App;
