// import React from 'react';
import * as React from "react";
import { ToastProvider } from "react-native-toast-notifications";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Navigation from "./src/Navigation";
import { persistor, store } from "./src/store/store";
const App = () => {
  // return <Navigation />;
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ToastProvider>
          <Navigation />
        </ToastProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
