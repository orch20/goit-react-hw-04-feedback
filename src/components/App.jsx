// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Section } from './Section/Section';
import { Button } from '../components/FedbackButtons/FeedbackButtons';
import { Statistics } from '../components/Statistics/Statistics'

export class App extends Component {
  // static propTypes = {}
 state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = (event) => { 
    const name  = event.target.textContent;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
    console.log('event', name);
  }
  



  render() {
    return (
      <>
        <Section title={'Please leave feedback'} />
        <Button handleClick={this.handleClick} option={this.state} />
        <Section title={'Statistics'} />
        <Statistics stats={this.state}/>
      </>
    )
  }
}


