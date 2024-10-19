import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectsContainer from './Projects/ProjectsContainer';

test('renders Projects tab', () => {
  render(<ProjectsContainer />);
  const linkElement = screen.getByText(/Projects/i);
  expect(linkElement).toBeInTheDocument();
});
