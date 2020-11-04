import React, { Component } from 'react'

import data from '../../tandem_trivia_data.json';
import { shuffle } from '../../utils';

import Question from './Question';
import Results from './Results';


export default class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      currIdx: 0,
      currentQ: {},
      score: 0,
      myChoice: ''
    }
    this.onClickNext = this.onClickNext.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.setChoice = this.setChoice.bind(this);
  }

  componentDidMount() {
    const questions = shuffle(data);
    const chosen = questions.slice(0, 10);
    const {currIdx} = this.state;
    const current = chosen[currIdx]; 
    this.setState({questions: chosen, currentQ: current});
  }

  setChoice(evt) {
    const myChoice = evt.target.getAttribute('value');
    this.setState({myChoice});

  }

  onClickNext(idx) {
    setTimeout(() => {
      const currIdx = idx + 1;
      const currentQ = this.state.questions[currIdx]
      this.setState({currIdx, currentQ});
    }, 100);
  }

  checkAnswer() {
    if (this.state.myChoice === this.state.currentQ.correct) {
      const score = this.state.score + 1;
      this.setState({score});
    }
  }

  render() {
    const { currentQ, currIdx, score, myChoice } = this.state;
    const {setPlayingTrivia} = this.props;
    
    return (
      <div className='question-container'>
        {currentQ ? 
          <Question currentQ={currentQ} currIdx={currIdx} onClickNext={this.onClickNext} score={score} checkAnswer={this.checkAnswer} setChoice={this.setChoice} />
          :
          <Results score={score} setPlayingTrivia={setPlayingTrivia}/>
        }
    </div>
    )   
  }
}
