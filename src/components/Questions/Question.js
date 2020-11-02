import React, { Component } from 'react'

import Answers from './Answers';

export default class Question extends Component {
  constructor(props){
    super(props);
    this.setState = {
      question: {},
      currIdx: 0
    }
  }

  render() {
    const { currentQ, currIdx, onClickNext, score } = this.props;
    return (
      <div className="question">
          <div>{score}</div>
          <h3>{currIdx+1}. {currentQ.question}</h3>
          <div className="answers-container">
          {currentQ.incorrect ?
          <Answers incorrect={currentQ.incorrect} correct={currentQ.correct} onClickNext={onClickNext} currIdx={currIdx}/>
          :
          <div />

          }

          </div>
        </div>
    )
  }
}
