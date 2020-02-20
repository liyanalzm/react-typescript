import React from 'react';
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router
} from "react-router-dom";
import Landing from './components/Landing';
import store from './redux/store';

class App extends React.PureComponent {
	render() {
		return (
      <Provider store={store}>
        <Router>
          <Landing />
        </Router>
      </Provider>
		);
	}
}

export default App;