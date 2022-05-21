import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App';

describe('App component', () => {
 test('App renders Login Screen', () => {
   render(<App/>);
   expect(screen.getByText('EWB Administrator Portal Login')).toBeInTheDocument();
 });
})