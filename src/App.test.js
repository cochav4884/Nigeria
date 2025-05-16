import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/welcome to the app/i);
  expect(headingElement).toBeInTheDocument();
});
