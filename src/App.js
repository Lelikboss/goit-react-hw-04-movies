import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';

import LoaderContainer from './components/LoaderContainer/LoaderContainer';
// import MoviesDetailsPage from './views/MovieDetailsPage/MovieDetailsPage';
import Container from './components/Container/Container';
const HomePage = lazy(() =>
  import('./views/Home/Home' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./views/Movies/Movies' /* webpackChunkName: "movies-page" */),
);
const MoviesDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movies-details-page" */
  ),
);
export default function App() {
  return (
    <div className="App">
      <Container>
        <Navigation />
        <Suspense fallback={<LoaderContainer />}>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/movies" exact>
              <MoviesPage />
            </Route>
            <Route path="/movies/:movieId">
              <MoviesDetailsPage />
            </Route>
            <Route>
              <p>page not found</p>
            </Route>
          </Switch>
        </Suspense>
      </Container>
    </div>
  );
}
