import React from 'react';

import styles from './Card.module.scss';

type CardProps = {
  title: string;
};

const Card = ({ title }: CardProps): JSX.Element => {
  return <article className={styles.Card}>{title}</article>;
};

export default Card;
