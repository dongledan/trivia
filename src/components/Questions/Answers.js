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
      isPhoneAFriendOpen: false,
      askAudience: false,
      isAskAudienceOpen: false
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
    }, 200);
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

  openPhoneAFriend() {
    this.setState({ isPhoneAFriendOpen: true });
  }

  openAskAudience(){
    this.setState({ isAskAudienceOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false, answered: true });
  }

  goBack() {
    this.setState({ modalIsOpen: false });
  }

  closePhoneAFriend() {
    this.setState({ isPhoneAFriendOpen: false, phoneAFriend: true });
  }

  closeAskAudience() {
    this.setState({ isAskAudienceOpen: false, askAudience: true });
  }
  
  render() {
    const { answers, modalIsOpen, answered, myChoice, fiftyFifty, phoneAFriend, askAudience, isPhoneAFriendOpen, isAskAudienceOpen } = this.state;
    const { onClickNext, currIdx, checkAnswer, setChoice } = this.props;
    const multiChoice = ['A', 'B', 'C', 'D'];
    return (
      <div className='choices-container'>
        {answers.map((answer,i) => (
          <div key={answer} className={`choice-container ${multiChoice[i]}`}>
            <button className="invi" disabled={answered} onClick={evt => { setChoice(evt); this.handleAnswered(evt); this.openModal()}}>
              <h5 className={`choice ${answered && myChoice === answer && myChoice.length > 0 ? 'chosen' : ''} ${answered && this.props.correct === answer ? 'correct' : ''} ${answered ? '' : 'hov'} `} value={answer}><span className='letter' value={answer}>{multiChoice[i]}: </span> {answer}</h5>
            </button>
          </div>
        ))}
        <div className="lifelines">
            <button disabled={fiftyFifty || answered} className={`icon ${fiftyFifty || answered ? 'disabled' : 'hover'}`} onClick={() => this.handleFiftyFifty()}>50:50</button>
            <button disabled={phoneAFriend || answered} className={`icon ${phoneAFriend || answered ? 'disabled' : 'hover'}`} onClick={() => this.openPhoneAFriend()}><IoIosCall size={30}/></button>
            <button disabled={askAudience || answered} className={`icon ${askAudience || answered ? 'disabled' : 'hover'}`} onClick={() => this.openAskAudience()}><IoIosPeople size={30}/></button>
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
          shouldCloseOnOverlayClick={false}
          onRequestClose={() => this.closeModal()}
          contentLabel="You Sure? Modal"
          ariaHideApp={false}
          shouldCloseOnEsc={false}
        >
          <div className="modalHeader" style={{fontSize: '1.3em', fontWeight: '600', textAlign: 'center', paddingBottom: '20px'}}>Is that your final answer?</div>
          <button className="modalText" style={{background: 'none', outline: 'none', border: 'none', color: '#e3a638', fontSize: '1.188em', lineHeigh: '1.5em', cursor: 'pointer', padding: '5px'}} onClick={() => {this.closeModal(); checkAnswer()}}>Yes</button>
          <button className="modalText" style={{background: 'none', outline: 'none', border: 'none', color: '#e3a638', fontSize: '1.188em', lineHeigh: '1.5em', cursor: 'pointer', padding: '5px'}} onClick={() => {this.goBack()}}>No</button>

        </Modal>
        <Modal
          isOpen={isPhoneAFriendOpen}
          style={customStyles}
          onRequestClose={() => this.closePhoneAFriend()}
          contentLabel="Friend Modal"
          ariaHideApp={false}
        >
          <button className="modalText" style={{background: 'none', outline: 'none', border: 'none', color: '#e3a638', fontSize: '1.188em', lineHeigh: '1.5em', cursor: 'pointer'}} onClick={() => {this.closePhoneAFriend()}}>Call someone random in your contacts</button>
        </Modal>
        <Modal
          isOpen={isAskAudienceOpen}
          style={customStyles}
          onRequestClose={() => this.closeAskAudience()}
          contentLabel="Audience Modal"
          ariaHideApp={false}
        >
          <button className="modalText" style={{background: 'none', outline: 'none', border: 'none', color: '#e3a638', fontSize: '1.188em', lineHeigh: '1.5em', cursor: 'pointer'}} onClick={() => {this.closeAskAudience()}}>Survey everyone in the room. <br /> <br/> Audience we need your help!</button>
        </Modal>
      </div>
    )
  }
}

const customStyles = {
  content: {
    background: '#000034',
    width: '250px',
    height: '150px',
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
    border: 'none',
    boxShadow: '12px 12px 16px 0 rgba(0, 0, 0, 0.25), -8px -8px 12px 0 rgba(255, 255, 255, 0.3)'
  },

};

