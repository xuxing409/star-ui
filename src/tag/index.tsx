import React, { ReactNode, useState } from 'react'
import classNames from 'classnames'
import Icon from '../icon'
import './index.scss'

interface tagProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  className?: string
  closable?: boolean
  color?: string
  visible?: boolean
  onClose?: Function
}

const Tag = (props: tagProps) => {
  const { className, closable, children, color, onClose, ...others } = props
  const [visible, setVisible] = useState<boolean>(true)

  React.useEffect(() => {
    if ('visible' in props && typeof props.visible !== 'undefined') {
      setVisible(props.visible)
    }
  }, [props.visible])

  const customColor = color && color.match(/^#/)
  const cls = classNames({
    'ant-tag': true,
    [`ant-tag-${color}`]: color && !customColor,
    [className as string]: !!className
  })
  const style: React.CSSProperties = {
    ...props.style
  }
  if (customColor) {
    style.backgroundColor = color
  }

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    onClose?.(e)
    if (e.defaultPrevented) {
      return
    }
    if (!('visible' in props)) {
      setVisible(false)
    }
  }

  if (!visible) {
    return null
  }
  return (
    <span {...others} className={cls} style={style}>
      {children}
      {closable ? (
        <Icon
          type="close"
          size={16}
          style={{ verticalAlign: 'text-top' }}
          onClick={handleClick}
        ></Icon>
      ) : null}
    </span>
  )
}

export default Tag
