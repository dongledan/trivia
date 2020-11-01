import React, { Component } from 'react'

import data from '../../../src/tandem_trivia_data.json';
import { shuffle } from '../../utils';

import Answers from './Answers';


export default class Question extends Component {
  constructor() {
    super();
    this.state = {
      questions: []
    }
  }

  componentDidMount() {
    const questions = shuffle(data);
    const chosen = questions.slice(0, 10);
    console.log(chosen);
    this.setState({questions: chosen});
  }

  render() {
    const { questions } = this.state;
    return (
      <div className='question-container'>
      {questions.map((trivia, i) => (
        <div className="question">
          <h3>{i+1}. {trivia.question}</h3>
          <div className="answers-container">
            <Answers incorrect={trivia.incorrect} correct={trivia.correct} />
          </div>
        </div>
      ))}
    </div>
    )
  }
}
