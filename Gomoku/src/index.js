import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ExamleGomokuGame from './ExamleGomokuGame';
import AI from './AI';
import * as serviceWorker from './serviceWorker';

const foolAI = new AI({
  playerSymbol: ExamleGomokuGame.PlayerSymbol.playerB,
  thinkBoardSize: ExamleGomokuGame.BoardSize
})

ReactDOM.render(
  <ExamleGomokuGame
    ai={foolAI} 
  />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
