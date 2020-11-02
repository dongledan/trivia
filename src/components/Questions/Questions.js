import React, { Component } from 'react'

import data from '../../tandem_trivia_data.json';
import { shuffle } from '../../utils';

import Question from './Question';


export default class Questions extends Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      currIdx: 0,
      currentQ: {},
      score: 0,
    }
    this.onClickNext = this.onClickNext.bind(this);
  }

  componentDidMount() {
    const questions = shuffle(data);
    const chosen = questions.slice(0, 10);
    const {currIdx} = this.state;
    const current = chosen[currIdx]; 
    this.setState({questions: chosen, currentQ: current});
  }

  onClickNext(idx, evt) {
    setTimeout(() => {
      if (evt.target.getAttribute('value') === this.state.currentQ.correct) {
        const score = this.state.score + 1;
        this.setState({score});
      }
      const currIdx = idx + 1;
      const currentQ = this.state.questions[currIdx]
      this.setState({currIdx, currentQ});
    }, 100);
  }

  handleSubmit() {

  }

  render() {
    const { currentQ, currIdx, score } = this.state;
    return (
      <div className='question-container'>
        <Question currentQ={currentQ} currIdx={currIdx} onClickNext={this.onClickNext} score={score} />
    </div>
    )   
  }
}
