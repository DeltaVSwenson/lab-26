import React from 'react';
// eslint-disable-next-line no-unused-vars
import { connect } from 'react-redux';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import './css/App.scss'


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
