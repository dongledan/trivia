import React, { Component } from 'react';
import {IoIosPeople, IoIosCall} from 'react-icons/io'
import Modal from 'react-modal';
import { shuffle } from '../../utils';

export default class Answers extends Component {
  constructor(props){
    super(props);
    this.state = {
      answers: [],
      modalIsOpen: false,
      answered: false,
      myChoice: '',
      fiftyFifty: false,
      phoneAFriend: false,
      askAudience: false
    }
  }

  componentDidMount() {
    const answers = shuffle(this.props.incorrect, this.props.correct);
    this.setState({answers});
  }

  changeAnswers() {
    this.setState({ answered: false , myChoice: '', answers: []})
    setTimeout(() => {
      const answers = shuffle(this.props.incorrect, this.props.correct);
      this.setState({answers});
    }, 100);
  }

  handleFiftyFifty() {
    let choicesEliminated = 0;
    let answers = this.state.answers;
    let random = shuffle([0, 1, 2, 3]);

    for ( let i = 0; i < 4; i++) {
      const rdmIdx = random[i];
      if (choicesEliminated === 2) break;
      else if (answers[rdmIdx] !== this.props.correct) {
        answers[rdmIdx] = '';
        choicesEliminated += 1;
      }
    }
    this.setState({answers, fiftyFifty: true});
  }

  handleAnswered(evt) {
    const value = evt.target.getAttribute('value');
    this.setState({ myChoice: value });
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false, answered: true });
  }
  
  render() {
    const { answers, modalIsOpen, answered, myChoice } = this.state;
    const { onClickNext, currIdx, checkAnswer } = this.props;
    const multiChoice = ['A', 'B', 'C', 'D'];
    return (
      <div className='choices-container'>
        {answers.map((answer,i) => (
          <div key={answer} className={`choice-container ${multiChoice[i]}`}>
            <button className="invi" disabled={answered} onClick={evt => {checkAnswer(evt); this.handleAnswered(evt); this.openModal()}}>
              <h5 className='choice' value={answer}><span className='letter'>{multiChoice[i]}: </span> {answer}</h5>
            </button>
          </div>
        ))}
        <div className="lifelines">
            <button disabled={this.state.fiftyFifty} className={`icon half ${this.state.fiftyFifty ? 'disabled' : ''}`} onClick={() => this.handleFiftyFifty()}>50:50</button>
            <button className="icon"><IoIosCall /></button>
            <button className="icon"><IoIosPeople /></button>
        </div>

        {answered ? 
        <div className="check">
          You picked <span className="mine">{myChoice}</span>. The correct answer was <span className="actual">{this.props.correct}</span>. {myChoice === this.props.correct ? 'Nice one!' : 'So close!'}
          <div className='next-btn-container'>
            <button className="button" onClick={() => {onClickNext(currIdx); this.changeAnswers()}}>Next</button>
          </div>
        </div>
        : <div className="check" />
        }
       <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          onRequestClose={() => this.closeModal()}
          contentLabel="Example Modal"
        >
          <button className="modalText" style={{background: 'none', outline: 'none', border: 'none', color: '#e3a638', fontSize: '1.188em', lineHeigh: '1.5em', cursor: 'pointer'}} onClick={() => {this.closeModal()}}>Final Answer?</button>
        </Modal>
      </div>
    )
  }
}

const customStyles = {
  content: {
    background: '#000034',
    width: '200px',
    height: '100px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

};

