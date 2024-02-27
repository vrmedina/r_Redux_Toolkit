import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';

import CounterApp from './CounterApp.jsx';
import './index.css';
import { PokemonApp } from './PokemonApp.jsx';
import { TodoApp } from './TodoApp.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <CounterApp /> */}
      {/* <PokemonApp /> */}
      <TodoApp />
    </Provider>
  </React.StrictMode>
);
