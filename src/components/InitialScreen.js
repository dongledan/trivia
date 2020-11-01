import React from 'react'

export default function InitialScreen(props) {
  const {setPlayingTrivia} = props;
  return (
    <div>
      <h1>Who Wants To Answer 10 Questions?</h1>
      <h2>Not 9, not 11, but 10 questions! No more, no less.</h2>
      <ul>
        <li>
        Play individually or in groups.  If you play in groups, you will want to play multiple games, or you may want to alternate questions between the groups.
        </li>
        <li>
        Start the game and being your journey to answer 10 questions.
        </li>
        <li>
        Press  Final Answer?  and then click the appropriate answer box.
        </li>
        <li>
          When the answer is selected, a new slide appears, click the word NEXT to move to the next question.
        </li>
        <li>
          The game is over when 10 questions have been answered. Thank you for playing Who Wants To Answer 10 Questions!.
        </li>
      </ul>
      <button onClick={() => setPlayingTrivia(true)}>Start</button>
    </div>
  )
}
