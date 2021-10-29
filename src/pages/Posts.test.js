import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'
import Posts from './Posts'

test('renders learn react link', () => {
  // eslint-disable-next-line react/react-in-jsx-scope
  render(<Posts />)
  const linkElement = screen.getAllByText(/create post/i)
  expect(linkElement[0]).toBeInTheDocument()
})
