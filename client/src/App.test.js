import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './components/navbar';
import PlayerCard from './components/playercard';
import { render } from '@testing-library/react';

test('renders App without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders PlayerCard without crashing', () => {
  render(<PlayerCard />);
})

test('renders Navbar without crashing', () => {
  render(<Navbar/>);
})

