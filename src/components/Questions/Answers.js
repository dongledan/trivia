import React, { Component } from 'react';
import Modal from 'react-modal';
import { shuffle } from '../../utils';

export default class Answers extends Component {
  constructor(props){
    super(props);
    this.state = {
      answers: [],
      modalIsOpen: false,
      answered: false,
      myChoice: ''
    }
  }

  componentDidMount() {
    const answers = shuffle(this.props.incorrect, this.props.correct);
    this.setState({answers});
  }

  changeAnswers() {
    this.setState({ answered: false , myChoice: ''})
    setTimeout(() => {
      const answers = shuffle(this.props.incorrect, this.props.correct);
      this.setState({answers});
    }, 100);
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
    const {answers, modalIsOpen, answered, myChoice } = this.state;
    const {onClickNext, currIdx, checkAnswer} = this.props;
    const multiChoice = ['A', 'B', 'C', 'D'];
    return (
      <div className='choices-container'>
        {answers.map((answer,i) => (
          <div key={answer} className={`choice-container ${multiChoice[i]}`}>
            {myChoice.length <= 0 ?
             <button className="invi" onClick={evt => {checkAnswer(evt); this.handleAnswered(evt); this.openModal()}}>
             <h5 className='choice' value={answer}><span className='letter'>{multiChoice[i]}: </span> {answer}</h5>
            </button>
            :
            <h5 className='choice' value={answer}><span className='letter'>{multiChoice[i]}: </span> {answer}</h5>
            }
           
          </div>
        ))}

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

