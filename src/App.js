import React from 'react';
import './App.css';

import Trivia from '../src/components/Trivia';
import InitialScreen from '../src/components/InitialScreen';

function App() {
  const [isPlayingTrivia, setPlayingTrivia] = React.useState(false);

  return (
    <div>
      {isPlayingTrivia ?
      <Trivia setPlayingTrivia={setPlayingTrivia} /> :
      <InitialScreen setPlayingTrivia={setPlayingTrivia} />
    }
    </div>
  );
}

export default App;
