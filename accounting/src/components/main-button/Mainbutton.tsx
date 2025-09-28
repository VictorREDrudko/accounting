import React from 'react';

import styles from './MainButton.module.scss';


interface Props {
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const MainButton: React.FC<Props> = ({
  children = 'подробнее',
  disabled = false,
  onClick,
  type = 'button',
  className = '',
}) => {
  const buttonClass = `${styles.button} ${className}`;

  return (
    <button
      type={type}
      className={buttonClass}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
