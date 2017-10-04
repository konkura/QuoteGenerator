import React, { Component } from 'react';
import quotes from '../data/quotes.js';
import Quote from './Quote.js';
import _ from 'underscore';
import '../css/styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: this.chooseQuote()
    };
    this.clickHandler = this.clickHandler.bind(this); //clickHandler is going to affect the state and trigger updates, so need to bind this so it knows what this (the app) it's working on
  }
  render() {
     return (
      <div className="container">
        <div className="jumbotron">
        <h1>TRUMP: The Idiot-in-Chief's Quote Generator</h1>
        </div>
        <Quote quote={this.state.quote.quote} offensiveness={this.state.quote.offensiveness} />
        <button className='btn btn-lg btn-primary' onClick={this.clickHandler}>Get another quote</button>
      </div>
    )
  }
  chooseQuote() {
    return _.sample(quotes); //_.sample selects random element from array
  }
  clickHandler(e) {
    e.preventDefault(); // Good practice to prevent any side effects
    this.setState({
      quote: this.chooseQuote()
    })
  }
}


export default App;

