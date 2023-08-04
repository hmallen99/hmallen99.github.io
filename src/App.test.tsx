import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders Projects tab', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Projects/i);
  expect(linkElement).toBeInTheDocument();
});
