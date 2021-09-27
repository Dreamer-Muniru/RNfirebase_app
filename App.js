import React from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './redux/store'
import AppContainer from './navigation/navigation';
import {PersistGate} from 'redux-persist/integration/react'


function App (){
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
     
  );
}

export default App;




