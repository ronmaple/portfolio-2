import React, { Component } from 'react'

import './styles/Portfolio.scss';
import BigCard from './subcomponent/BigCard';
import TitleCard from './TitleCard';
import FlexContainer from './FlexContainer';
import Slide from 'react-reveal/Slide';

export default class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio" id="portfolio">

      <Slide right>
        <div className="portfolio--title">
          <h3>Portfolio</h3>
        </div>
      </Slide>
      
        <div className="">
          <FlexContainer />
        </div>

          {/* <BigCard />
          <TitleCard /> */}

      </div>
    )
  }
}
