import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders appbar text', () => {
  render(<App dealer={'dealer 1'}/>);
  const linkElement = screen.getByText(/Auto Searcher/i);
  expect(linkElement).toBeInTheDocument();
});
