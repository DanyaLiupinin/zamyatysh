import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
// eslint-disable-next-line import/order
import ReactDOM from 'react-dom/client';

import './index.scss';

import { store } from '@store';
import App from "./app/App";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
);

