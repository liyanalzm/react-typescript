import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom";

import styles from './styles/index.module.scss';
import Card from './components/Card';

class App extends React.PureComponent {
	render() {
		return (
      <Router>
        <div className={styles.container}>
          <h1>Creating a react - typescript from scratch skrtt</h1>
          <Card title="Card 1" />
        </div>
      </Router>
		);
	}
}

export default App;