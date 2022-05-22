import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App';

describe('App component', () => {
  test('App renders Login Screen', () => {
    render(<App/>);
    expect(screen.getByText('EWB Administrator Portal Login')).toBeInTheDocument();
  });
  
  test('Content hidden until logged in', () => {
    render(<App/>);
    expect(screen.queryByText('Dashboard')).not.toBeInTheDocument();
    expect(screen.queryByText('Bookings')).not.toBeInTheDocument();
    expect(screen.queryByText('Settings')).not.toBeInTheDocument();
    expect(screen.queryByText('Users')).not.toBeInTheDocument();
    expect(screen.queryByText('Reports')).not.toBeInTheDocument();

    // Add login here, then check if content displays
  });
})