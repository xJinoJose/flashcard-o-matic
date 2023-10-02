import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Header from './Header';
import NotFound from './NotFound';
import Home from './Home/Home';
import StudyDeck from './Decks/StudyDeck';
import CreateDeck from './Decks/CreateDeck';
import ViewDeck from './Decks/ViewDeck';
import EditDeck from './Decks/EditDeck';
import AddCard from './Cards/AddCard';
import EditCard from './Cards/EditCard';

function Layout() {
  return (
    <React.Fragment>
      <Header />
      <div className='container'>
        <Switch>
          <Route exact path='/'>
            <Link to='/decks/new'>
              <button className='btn btn-primary'>
              <i class="bi bi-plus-lg"></i> Create Deck
              </button>
            </Link>
            <p> </p>
            <Home />
          </Route>

          <Route exact path='/decks/new'>
            <CreateDeck />
          </Route>

          <Route exact path='/decks/:deckId/study'>
            <StudyDeck />
          </Route>

          <Route exact path='/decks/:deckId/edit'>
            <EditDeck />
          </Route>

          <Route exact path='/decks/:deckId'>
            <ViewDeck />
          </Route>

          <Route exact path='/decks/:deckId/cards/new'>
            <AddCard />
          </Route>

          <Route exact path='/decks/:deckId/cards/:cardId/edit'>
            <EditCard />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default Layout;
