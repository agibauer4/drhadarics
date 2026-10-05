import type { ReactNode } from 'react'
import { ArrowDown, ArrowRight } from './Icons'

type Props = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  // "dark" buttons sit on light backgrounds, "light" buttons on the green sections.
  tone?: 'dark' | 'light'
  icon?: 'right' | 'down'
  className?: string
}

export default function Button({
  href,
  children,
  variant = 'primary',
  tone = 'dark',
  icon = 'right',
  className = '',
}: Props) {
  const Icon = icon === 'down' ? ArrowDown : ArrowRight
  return (
    <a className={`btn btn--${variant} btn--${tone} ${className}`} href={href}>
      <span>{children}</span>
      <Icon className="btn__icon" />
    </a>
  )
}
