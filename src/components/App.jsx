// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Section } from './Section/Section';
import { FeedbackOptions } from '../components/FedbackButtons/FeedbackButtons';
import { Statistics } from '../components/Statistics/Statistics'
import styled from "styled-components";

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

    

  countTotalFeedback = () => Object.values(this.state).reduce((acc, feedback) => acc + feedback);

  countPositiveFeedbackPercentage = () => Math.round(this.state.good / this.countTotalFeedback() * 100) || 0;
  

  render() {
    return (
      <>
        <Container>
        <Section title={'Please leave feedback'} />
        <FeedbackOptions handleClick={this.handleClick} option={this.state} />
        <Section title={'Statistics'} />
        <Statistics stats={this.state} total={this.countTotalFeedback()} percentage={this.countPositiveFeedbackPercentage()}/>
        </Container>
      </>
    )
  }
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  margin: 30px auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #a7baf5cd;`