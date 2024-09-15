import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics ';
import Section from './Section/Section';
import Notification from './Notification/Notification ';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = arr => arr.reduce((acc, el) => (acc += el), 0);
  countPositiveFeedbackPercentage = (positive, total) => {
    if (!total) {
      return 0;
    }

    return Math.round((positive / total) * 100);
  };

  onButtonClick = e => {
    this.setState(prevState => {
      return {
        [e.target.value]: (prevState[e.target.value] += 1),
      };
    });
  };
  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions onButtonClick={this.onButtonClick} />
        </Section>

        {this.countTotalFeedback([good, bad, neutral]) === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback([good, bad, neutral])}
              percentage={this.countPositiveFeedbackPercentage(
                good,
                this.countTotalFeedback([good, bad, neutral])
              )}
            />
          </Section>
        )}
      </div>
    );
  }
}

export default App;
