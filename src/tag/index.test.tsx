import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Tag from './index'

describe('tag', () => {
  test('renders Tag', () => {
    render(<Tag>click me</Tag>)
    const linkElement = screen.getByText(/click me/i)
    expect(linkElement).toBeInTheDocument()
  })

  test('should support onClose', () => {
    const onClose = jest.fn()
    const { container } = render(<Tag onClose={onClose}>tag</Tag>)
    
    const linkElement = container.querySelector('svg') as SVGSVGElement
    fireEvent.click(linkElement)

    expect(onClose).toBeCalled()
  })
})
