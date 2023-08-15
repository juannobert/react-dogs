import React from 'react';
import styles from './Button.module.css';

function Input({ children, ...props }) {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
}

export default Input;
