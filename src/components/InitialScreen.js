import React from 'react';
import Header from './Header';

export default function InitialScreen(props) {
  const {setPlayingTrivia} = props;
  return (
    <div>
      <Header />
      <ul>
        <li>
        Play individually or in groups.  If you play in groups, you will want to play multiple games, or you may want to alternate questions between the groups.
        </li>
        <li>
        Start the game and begin your journey to answer 10 questions.
        </li>
        <li>
        Press  Final Answer?  and then click the appropriate answer box.
        </li>
        <li>
          When the answer is selected, a new slide appears, click the word NEXT to move to the next question.
        </li>
        <li>There are three lifelines that can be used once per game:
          <ul>
            <li>50:50 - eliminates 2 incorrect choices.</li>
            <li>Phone a Friend - ask or call a friend for help.</li>
            <li>Ask the Audience - collect answers from nearby individuals.</li>
          </ul>
        </li>
        <li>
          The game is over when 10 questions have been answered. Thank you for playing Who Wants To Answer 10 Questions!
        </li>
      </ul>
      <div className="start-btn-container">
        <button className="button" onClick={() => setPlayingTrivia(true)}>Start</button>
      </div>
    </div>
  )
}
