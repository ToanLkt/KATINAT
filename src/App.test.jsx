import {render,screen,fireEvent} from '@testing-library/react'
import {describe,it,expect} from 'vitest'
import {App} from './main'
describe('crisis center UI',()=>{it('shows required skills',()=>{render(<App/>);expect(screen.getByText('Frontend Testing')).toBeInTheDocument();expect(screen.getByText('React UI')).toBeInTheDocument()});it('updates press kit state',()=>{render(<App/>);fireEvent.click(screen.getByRole('button'));expect(screen.getByText('ĐÃ SẴN SÀNG')).toBeInTheDocument()})})
