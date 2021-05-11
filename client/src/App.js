import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/LoginForm';
import NoMatch from './pages/NoMatch';
import SingleStory from './pages/singleStory';
import Profile from './pages/Profile';
import Signup from './pages/SignupForm';
import Footer from './components/Footer';
import './App.css';
import Quiz from './pages/Quiz';

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
          <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/header" component={Header} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile/:username?" component={Profile} />
            <Route exact path="/story/:id" component={SingleStory} />
            <Route exact path="/quiz/" component={Quiz} />
            <Route component={NoMatch} />
          </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
