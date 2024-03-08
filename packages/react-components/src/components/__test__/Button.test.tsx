import { render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import Button from "../Button"

test("renders button with correct text", () => {
  const buttonText = "Click me"
  const { getByText } = render(<Button onClick={() => {}}>{buttonText}</Button>)
  const buttonElement = getByText(buttonText)
  expect(buttonElement).toBeInTheDocument()
})

test("button onClick is triggered", () => {
  const onClickMock = jest.fn()
  const buttonText = "Click me"
  const { getByText } = render(
    <Button onClick={onClickMock}>{buttonText}</Button>,
  )
  const buttonElement = getByText(buttonText)
  fireEvent.click(buttonElement)
  expect(onClickMock).toHaveBeenCalled()
})
