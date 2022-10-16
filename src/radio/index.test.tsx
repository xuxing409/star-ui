import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Radio from './index'

describe('Radio', () => {
  test('renders Radio', () => {
    render(<Radio>click me</ Radio>)
    const linkElement = screen.getByText(/click me/i)
    expect(linkElement).toBeInTheDocument()
  })


  test('renders primary Radio', () => {
    const { container } = render(<Radio type="primary">click me</ Radio>)
    expect(container.querySelector('.ant-btn-primary')).toBeInTheDocument()
  })

  test('renders small Radio', () => {
    const { container } = render(<Radio size="small">click me</ Radio>)
    expect(container.querySelector('.ant-btn-small')).toBeInTheDocument()
  })

  test('should support click', () => {
    const onClick = jest.fn()
    render(
      <Radio type="primary" onClick={onClick}>
        click me
      </ Radio>
    )
    const linkElement = screen.getByText(/click me/i)
    fireEvent.click(linkElement)
    expect(onClick).toBeCalled()
  })
})
