
import React from 'react'

import Header from './Header';
import Questions from './Questions/index';
import NextGame from './Questions/NextGame';

export default function Trivia(props) {
  const {setPlayingTrivia} = props;

  return (
    <div>
      <Header />
      <Questions setPlayingTrivia={setPlayingTrivia} />
      <NextGame setPlayingTrivia={setPlayingTrivia} />
    </div>
  )
}
