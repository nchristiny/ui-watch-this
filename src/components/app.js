import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import Header from './Header';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}