import React from 'react';
import { withRouter } from 'react-router-dom';
import {RouteComponentProps} from "react-router";

import styles from '../../styles/Card/Card.module.scss';

// RouteComponentProps is needed for withRouter HOC
const Card = (props: RouteComponentProps & CardProps):JSX.Element => {
  const { title } = props;
  return (
    <p className={styles.container}>{title}</p>
  )
}
  

export default withRouter(Card);
