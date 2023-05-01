import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { Login } from "'../View/llc-online/src/components/Login";

describe("Login Component", () => {
  test("should update email state on input change", () => {
    const { getByLabelText } = render(<Login />);
    const inputElement = getByLabelText(/email/i);
    fireEvent.change(inputElement, { target: { value: "test@test.com" } });
    expect(inputElement.value).toBe("test@test.com");
  });

  test("should update password state on input change", () => {
    const { getByLabelText } = render(<Login />);
    const inputElement = getByLabelText(/password/i);
    fireEvent.change(inputElement, { target: { value: "password" } });
    expect(inputElement.value).toBe("password");
  });

  test("should submit form with email and password on submit", () => {
    const mockPush = jest.fn();
    const mockFetch = jest.fn(() => Promise.resolve({ ok: true }));
    const { getByLabelText, getByText } = render(
      <Login history={{ push: mockPush }} />
    );

    const emailInput = getByLabelText(/email/i);
    const passwordInput = getByLabelText(/password/i);
    const submitButton = getByText(/login/i);

    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });
    fireEvent.click(submitButton);

    expect(mockFetch).toHaveBeenCalledWith(
      "http://localhost:3000/login",
      expect.objectContaining({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: "test@test.com", password: "password" }),
      })
    );

    expect(mockPush).toHaveBeenCalledWith("/");
    expect(window.alert).toHaveBeenCalledWith("Login Successful!");
  });

  test("should display an error message when server returns an error", async () => {
    const mockPush = jest.fn();
    const mockFetch = jest.fn(() =>
      Promise.resolve({ ok: false, statusText: "Unauthorized" })
    );
    window.alert = jest.fn();
    const { getByLabelText, getByText } = render(
      <Login history={{ push: mockPush }} />
    );

    const emailInput = getByLabelText(/email/i);
    const passwordInput = getByLabelText(/password/i);
    const submitButton = getByText(/login/i);

    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });
    fireEvent.click(submitButton);

    expect(mockFetch).toHaveBeenCalledWith(
      "http://localhost:3000/login",
      expect.objectContaining({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: "test@test.com", password: "password" }),
      })
    );

    expect(window.alert).toHaveBeenCalledWith("Invalid email or password");
  });
});
