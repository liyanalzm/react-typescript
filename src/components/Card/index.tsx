import React from 'react';
import { withRouter } from 'react-router-dom';

import styles from '../../styles/Card/Card.module.scss';

const Card = (props: any): JSX.Element => {
  return (
    <p className={styles.container}>test</p>
  )
}
  

export default withRouter(Card);
