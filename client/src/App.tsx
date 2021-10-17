import React from 'react';
import Application from './containers/Application';
import { store } from './store';
import { Provider } from 'react-redux';
import './index.css';

const App = () => {
  return (
    <Provider store={store}>
      <Application />
    </Provider>
  );
};
export default App;
