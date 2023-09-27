import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';

import './index.scss';

import App from './components/App/App';
import { store } from './store';

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

