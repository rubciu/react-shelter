import React from "react";
import { render, act, fireEvent, cleanup } from "@testing-library/react";
import SignUpForm from "./SignUpForm";

describe("SignUp", () => {
  afterEach(cleanup);

  describe("with valid inputs", () => {
    test("calls the onSubmit function", async () => {
      const mockOnSubmit = jest.fn();
      const { getByLabelText, getByRole } = render(
        <SignUpForm onSubmit={mockOnSubmit} />
      );

      await act(async () => {
        const nameInput = getByLabelText("Name");
        const emailInput = getByLabelText("Email");
        const passwordInput = getByLabelText("Password");

        fireEvent.change(nameInput, {
          target: { value: "Ruben M" },
        });

        fireEvent.change(emailInput, {
          target: { value: "ruben@gmail.com" },
        });
        fireEvent.change(passwordInput, {
          target: { value: "1234567" },
        });
      });

      await act(async () => {
        fireEvent.click(getByRole("button"));
      });

      expect(mockOnSubmit).toHaveBeenCalled();
    });
  });

  describe("with invalid name", () => {
    test("renders the name validation error", async () => {
      const mockOnSubmit = jest.fn();
      const { getByLabelText, container } = render(
        <SignUpForm onSubmit={mockOnSubmit} />
      );

      await act(async () => {
        const nameInput = getByLabelText("Name");
        fireEvent.change(nameInput, {
          target: { value: "" },
        });
        fireEvent.blur(nameInput);
      });

      expect(container.innerHTML).toMatch("Name is required.");
    });
  });

  describe("with invalid email", () => {
    test("renders the email validation error", async () => {
      const mockOnSubmit = jest.fn();
      const { getByLabelText, container } = render(
        <SignUpForm onSubmit={mockOnSubmit} />
      );

      await act(async () => {
        const emailInput = getByLabelText("Email");
        fireEvent.change(emailInput, {
          target: { value: "" },
        });
        fireEvent.blur(emailInput);
      });

      expect(container.innerHTML).toMatch("Email is required.");
    });
  });

  describe("with invalid password", () => {
    test("renders the password validation error", async () => {
      const mockOnSubmit = jest.fn();
      const { getByLabelText, container } = render(
        <SignUpForm onSubmit={mockOnSubmit} />
      );

      await act(async () => {
        const passwordInput = getByLabelText("Password");
        fireEvent.change(passwordInput, {
          target: { value: "" },
        });
        fireEvent.blur(passwordInput);
      });

      expect(container.innerHTML).toMatch("Please enter a password");
    });

    test.todo("renders error message if password smaller than 7 characters");
  });
});
