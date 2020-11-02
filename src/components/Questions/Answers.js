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

  changeAnswers() {
    setTimeout(() => {
      const answers = shuffle(this.props.incorrect, this.props.correct);
      this.setState({answers});
    }, 100);
  
  }
  
  render() {
    const {answers} = this.state;
    const {onClickNext, currIdx} = this.props;
    const multiChoice = ['A', 'B', 'C', 'D'];
    return (
      <div className='choices-container'>
        {answers.map((answer,i) => (
          <div key={answer} className={`choice-container ${multiChoice[i]}`}>
            <button className="invi" onClick={evt => {onClickNext(currIdx, evt); this.changeAnswers()}}>
             <h5 className='choice' value={answer}><span className='letter'>{multiChoice[i]}: </span> {answer}</h5>
            </button>
          </div>
        ))}
      </div>
    )
  }
}

