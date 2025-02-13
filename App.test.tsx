import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders learn react link", () => {
  render(<App />)
  const linkElement = screen.getByText(/E-shop/i)
  expect(linkElement).toBeInTheDocument()
})

test("renders header component", () => {
  render(<App />)
  const headerElement = screen.getByRole("banner")
  expect(headerElement).toBeInTheDocument()
})
