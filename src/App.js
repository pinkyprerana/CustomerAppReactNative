import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import AppNavigator from './navigation/AppNavigator';
import { createTable } from './services/Database';

const App = () => {
  useEffect(() => {
    createTable(); 
  }, []);

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
