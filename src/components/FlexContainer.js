import React, { Component } from 'react'

import './styles/FlexContainer.scss';
import FlexCard from './subcomponent/FlexCard';

export default class FlexContainer extends Component {
  render() {
    return (
      <div className="flexParent">
        <FlexCard />
        <FlexCard />
        <FlexCard />
        <FlexCard />  
        <FlexCard />
        <FlexCard />
      </div>
    )
  }
}
