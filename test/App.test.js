import React from 'react';
import { render } from '@testing-library/react';
import App from '../src/App';

describe('App component', () => {
 test('it renders', () => {
   render(<App/>);
 });
})