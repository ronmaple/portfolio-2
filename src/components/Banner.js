import React, { Component } from 'react'
import "./styles/Banner.scss";

const dp = 'https://s3.us-east-2.amazonaws.com/ronmapue/dp.jpg';

export default class Banner extends Component {
  render() {
    return (
        
      <div className="banner">

        <div className="banner--headline">

            <div className="banner--headline-description">
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
            </div>

            <div className="banner--headline-button">
                <h3>Lorem ipsum</h3>
            </div>

        </div>
      </div>
    
    )
  }
}
