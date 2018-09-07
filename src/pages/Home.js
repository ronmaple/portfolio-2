import React, { Component } from 'react'
import Banner from '../components/Banner';
import Myself from '../components/Myself';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Banner />
        <Myself />
        <Portfolio />
        <Footer />
      </div>
    )
  }
}
