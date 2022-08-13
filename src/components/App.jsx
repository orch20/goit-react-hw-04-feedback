// import PropTypes from 'prop-types'
import React, { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from '../components/FedbackButtons/FeedbackButtons';
import { Statistics } from '../components/Statistics/Statistics';
import { Container } from './Conteiner';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackValues = { good, neutral, bad };

  const handleClick = event => {
    const name = event.target.textContent;

    switch (name) {
      case 'good':
        setGood(prevValue => prevValue + 1);
        break;
      case 'neutral':
        setNeutral(prevValue => prevValue + 1);
        break;
      case 'bad':
        setBad(prevValue => prevValue + 1);
        break;
      default:
        alert('Something wrong');
    }
    console.log('event', name);
  };

  const countTotalFeedback = () =>
    Object.values(feedbackValues).reduce((acc, feedback) => acc + feedback);

  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100) || 0;

  return (
    <>
      <Container>
        <Section title={'Please leave feedback'} />
        <FeedbackOptions handleClick={handleClick} option={feedbackValues} />
        <Section title={'Statistics'} />
        <Statistics
          stats={feedbackValues}
          total={countTotalFeedback()}
          percentage={countPositiveFeedbackPercentage()}
        />
      </Container>
    </>
  );
};

// export class App extends Component {
//   // static propTypes = {}
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleClick = event => {
//     const name = event.target.textContent;
//     this.setState(prevState => ({
//       [name]: prevState[name] + 1,
//     }));
//     console.log('event', name);
//   };

//   countTotalFeedback = () =>
//     Object.values(this.state).reduce((acc, feedback) => acc + feedback);

//   countPositiveFeedbackPercentage = () =>
//     Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;

//   render() {
//     return (
//       <>
//         <Container>
//           <Section title={'Please leave feedback'} />
//           <FeedbackOptions handleClick={this.handleClick} option={this.state} />
//           <Section title={'Statistics'} />
//           <Statistics
//             stats={this.state}
//             total={this.countTotalFeedback()}
//             percentage={this.countPositiveFeedbackPercentage()}
//           />
//         </Container>
//       </>
//     );
//   }
// }
