import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './main'

describe('crisis center UI', () => {
  it('renders the crisis status and official announcement', () => {
    render(<App />)

    expect(screen.getByText(/TRẠNG THÁI:/)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /KATINAT ghi nhận phản ánh/,
      }),
    ).toBeInTheDocument()
  })

  it('shows all required skills', () => {
    render(<App />)

    const skills = screen.getByRole('heading', {
      name: 'Kỹ năng cần bổ sung',
    }).parentElement

    expect(within(skills).getByText('Frontend Testing')).toBeInTheDocument()
    expect(within(skills).getByText('React UI')).toBeInTheDocument()
  })

  it('renders every crisis update with its SOP note', () => {
    render(<App />)

    expect(screen.getAllByRole('article')).toHaveLength(3)
    expect(
      screen.getAllByText(
        'Thông tin đang được đối chiếu với quy trình SOP tiêu chuẩn.',
      ),
    ).toHaveLength(3)
  })

  it('shows the FAQ expanded by default', () => {
    render(<App />)

    const question = screen.getByText(
      'Sự việc này ảnh hưởng đến những chi nhánh nào?',
    )
    const details = question.closest('details')

    expect(details).toHaveAttribute('open')
    expect(within(details).getByText(/một chi nhánh/)).toBeVisible()
  })

  it('marks the press kit as ready after it is requested', () => {
    render(<App />)

    const button = screen.getByRole('button', { name: 'TẢI PRESS KIT' })
    fireEvent.click(button)

    expect(button).toHaveTextContent('ĐÃ SẴN SÀNG')
  })
})
