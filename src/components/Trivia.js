
import React from 'react'

import Navbar from './Navbar';
import Header from './Header';
import Questions from './Questions/index';

export default function Trivia(props) {
  const {setPlayingTrivia} = props;

  return (
    <div>
      <Navbar setPlayingTrivia={setPlayingTrivia} />
      <Header setPlayingTrivia={setPlayingTrivia} />
      <Questions setPlayingTrivia={setPlayingTrivia} />
    </div>
  )
}
