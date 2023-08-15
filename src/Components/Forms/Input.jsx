import React from 'react';
import styles from './Input.module.css';

function Input({ type, name, label, onChange, onBlur, error }) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
        <input
          id={name}
          name={name}
          className={styles.input}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
        />
      </label>
      <p className={error && styles.error}>{error}</p>
    </div>
  );
}

export default Input;
