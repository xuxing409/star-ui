import React, { ReactNode, CSSProperties, useRef, useState } from 'react';
import classNames from 'classnames';

import './index.scss';

export interface radioProps extends React.HTMLAttributes<HTMLInputElement> {
  className?: string;
  type?: 'normal' | 'primary' | 'dashed' | 'link' | 'text';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  children?: ReactNode;
  style?: CSSProperties;
}
const Radio = (props: radioProps) => {
  const {
    disabled,
    className,
    type = 'normal',
    size = 'medium',
    children,
    style,
    onClick,
    onBlur,
    ...others
  } = props;

  const [checked, setChecked] = useState(false);
  const inputEl = useRef(null);

  const cls = classNames({
    'ant-radio': true,
    'ant-radio-checked': checked,
    'ant-radio-disabled': disabled
  });

  const wrapperCls = classNames({
    'ant-radio-wrapper': true,
    'ant-radio-wrapper-disabled': disabled
  });

  return (
    <span className={wrapperCls}>
      <span className={cls}>
        <input type="radio" className="ant-radio-input" ref={inputEl} />
        <span className="ant-radio-inner"></span>
      </span>
      <span>{props.children}</span>
    </span>
  );
};

export default Radio;
