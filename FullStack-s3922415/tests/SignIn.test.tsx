import { render, screen, fireEvent } from '@testing-library/react';
import SignIn from '../src/pages/SignIn';
import '@testing-library/jest-dom';

test('renders SignIn form and shows error on invalid email', () => {
  render(<SignIn />);
  fireEvent.change(screen.getByPlaceholderText(/email/i), { target: { value: 'invalidemail' } });
  fireEvent.change(screen.getByPlaceholderText(/password/i), { target: { value: 'password123' } });
  fireEvent.click(screen.getByText(/sign in/i));
  expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
});
