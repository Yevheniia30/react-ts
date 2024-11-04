import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Form from './components/Form/Form';
import MenuList from './components/MenuList/MenuList';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello world!/);
  expect(linkElement).toBeInTheDocument();
});


test('renders form', () => {
  render(<Form />)
  const text = screen.getByText(/FORM/);
  expect(text).toBeInTheDocument()
});
