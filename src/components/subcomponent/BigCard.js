import React, { Component } from 'react'

import './styles/BigCard.scss';
import Roll from 'react-reveal/Roll';
import Bounce from 'react-reveal/Bounce';

export default class BigCard extends Component {

  render() {
    return (    
      <div clasaName="card">
        
        {/* <Bounce left> */}
        <div className="card-entry">
            <h3>jQuery</h3>
            <p>The beginnings of my learning journey brought me to learning jQuery. Though it is not something I use for full website production, it has still been my go to for building fun projects such as this Simon Game (with a UI twist!). Check it out, along with the rest of my jQuery projects on Codepen.</p>
        </div>
        {/* </Bounce> */}

        <Roll right>
        <div className="card-image">
            <img src="https://s3.us-east-2.amazonaws.com/ronmapue/new-portfolio-screenshots/new-simon" />
        </div>
        </Roll>

      </div>
    )
  }
}
