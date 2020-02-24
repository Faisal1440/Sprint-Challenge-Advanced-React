import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import Player from './components/Player';
import PlayerList from './components/PlayerList';


it('renders without crashing', () => {
  rtl.render(<App />);
});

it('renders "Women\'s World Cup" text', () => {
  const wrapper = rtl.render(<App />);
});
