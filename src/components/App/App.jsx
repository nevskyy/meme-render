import React from 'react';
import '../App/App.scss';
import '../Header/Header.scss';
import '../MemeGenerator/MemeGenerator.scss';
import {Header} from '../Header';
import {MemeGenerator} from '../MemeGenerator';

export function App() {
  return (
    <div className="App">
      <Header />
      <MemeGenerator />
    </div>
  );
}

