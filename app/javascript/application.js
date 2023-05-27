// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Greeting from "./components/Greeting/Greeting";

const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Greeting />}/>
    </Routes>
  </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
