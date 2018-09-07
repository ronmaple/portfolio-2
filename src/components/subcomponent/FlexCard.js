import React, { Component } from 'react'

import './../styles/FlexCard.scss';

import Fade from 'react-reveal/Fade';

const image = "https://vignette.wikia.nocookie.net/project-pokemon/images/4/47/Placeholder.png/revision/latest/scale-to-width-down/480?cb=20170330235552";

export default class FlexCard extends Component {
  render() {
    return (
      <Fade top>
      <div className="flexChild">
        <div className="flexChild--image">
          <img src={image} />
        </div>

        <div className="flexChild--content">
          <h1>Title here</h1>
          <p>Description here</p>
          <a href="">Link here</a>
        </div>
      </div>
      </Fade>
    )
  }
}
