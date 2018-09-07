import React, { Component } from 'react'

import './styles/Footer.scss';
import Fade from 'react-reveal/Fade';

export default class Footer extends Component {
  render() {
    return (
    <Fade bottom>
      <div className="footer--body">
        <div className="footer--about">
            <h1>About</h1>
        </div>

        <div className="footer--links">
           <h1> Link </h1>
        </div>
      </div>
    </Fade>
    )
  }
}
