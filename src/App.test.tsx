import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {

  it('renders header', () => {
    render(<App />);

    const header = screen.getByRole('heading', { name: /Sample app/i });
    expect(header).toBeVisible();
  });

})