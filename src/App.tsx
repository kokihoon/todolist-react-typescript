import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import PageLoading from './components/PageLoading';

const Home = lazy(() => import('./pages/home/index'));
const Memo = lazy(() => import('./pages/memo/index'));
const Movie = lazy(() => import('./pages/movie/index'));

const Root: React.FC = () => (
    <BrowserRouter>
     <Suspense fallback={<PageLoading />}>
    <Header/>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/memo" component={Memo} />
      <Route path="/movie" component={Movie} />
      <Redirect path="*" to="/" />
    </Switch>
    </Suspense>
  </BrowserRouter>
)

export default Root;
