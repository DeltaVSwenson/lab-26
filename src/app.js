import React from 'react';
import { connect } from 'react-redux';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';



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
