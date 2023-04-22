import React from 'react';
import styles from './Button.module.scss';
import { IButton } from '../../utils/types';

const Button: React.FC<IButton> = ({ desc, onClick }) => {
  return (
    <button className={styles.Button} onClick={onClick}>
      {desc}
    </button>
  );
};

export default Button;
