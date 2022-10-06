import React, { ReactNode } from 'react'
import classNames from 'classnames'

import './index.scss'

interface buttonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string
  type?: 'normal' | 'primary' | 'dashed' | 'link' | 'text'
  size?: 'small' | 'medium' | 'large'
  children?: ReactNode
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  onBlur?: React.FocusEventHandler<HTMLButtonElement>
}
const Button = (props: buttonProps) => {
  const {
    className,
    type = 'normal',
    size = 'medium',
    children,
    style,
    onClick,
    onBlur,
    ...others
  } = props
  const cls = classNames({
    'ant-btn': true,
    [`ant-btn-${size}`]: size,
    [`ant-btn-${type}`]: type,
    [className as string]: !!className
  })
  return (
    <button
      {...others}
      className={cls}
      style={style}
      onClick={onClick}
      onBlur={onBlur}
    >
      {children}
    </button>
  )
}

export default Button
