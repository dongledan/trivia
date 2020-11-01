import React, { Component } from 'react';
import { shuffle } from '../../utils';

export default class Answers extends Component {
  constructor(props){
    super(props);
    this.state = {
      answers: []
    }
  }

  componentDidMount() {
    const answers = shuffle(this.props.incorrect, this.props.correct);
    this.setState({answers});
  }
  
  render() {
    const {answers} = this.state;
    const multiChoice = ['A', 'B', 'C', 'D'];
    return (
      <div className='choices-container'>
        {answers.map((answer,i) => (
          <div key={answer} className={`choice-container ${multiChoice[i]}`}>
            <h5 className='choice'><span className='letter'>{multiChoice[i]}: </span> {answer}</h5>
          </div>
        ))}
      </div>
    )
  }
}

