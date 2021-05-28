import React from 'react';
import { render, act, fireEvent, cleanup } from '@testing-library/react';
import SignUpForm from './SignupForm';
import SignupForm from './SignupForm';

describe('SignUp', () => {
  afterEach(cleanup);

  describe('with valid inputs', () => {
    it('calls the onSubmit function', async () => {
      const mockOnSubmit = jest.fn();
      const { getByLabelText, getByRole } = render(
        <SignupForm onSubmit={mockOnSubmit} />
      );

      await act(async () => {
        const emailInput = getByLabelText('Email');
        const passwordInput = getByLabelText('Password');

        fireEvent.change(emailInput, {
          target: { value: 'ruben@gmail.com' },
        });
        fireEvent.change(passwordInput, {
          target: { value: '12345' },
        });
      });

      await act(async () => {
        fireEvent.click(getByRole('button'));
      });

      expect(mockOnSubmit).toHaveBeenCalled();
    });
  });

  describe('with invalid email', () => {
    it('renders the email validation error', async () => {
      const mockOnSubmit = jest.fn();
      const { getByLabelText, container } = render(
        <SignUpForm onSubmit={mockOnSubmit} />
      );

      await act(async () => {
        const emailInput = getByLabelText('Email');
        fireEvent.change(emailInput, {
          target: { value: '' },
        });
        fireEvent.blur(emailInput);
      });

      expect(container.textContent).toMatch('Email is required!');
    });
  });

  describe('with invalid password', () => {
    it('renders the password validation error', async () => {
      const mockOnSubmit = jest.fn();
      const { getByLabelText, container } = render(
        <SignUpForm onSubmit={mockOnSubmit} />
      );

      await act(async () => {
        const passwordInput = getByLabelText('Password');
        fireEvent.change(passwordInput, {
          target: { value: '' },
        });
        fireEvent.blur(passwordInput);
      });

      expect(container.textContent).toMatch('Password is required!');
    });
  });
});
