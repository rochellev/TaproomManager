import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { HashRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { createStore } from 'redux';
import kegListReducer from './reducers/keg-list-reducer';
import { Provider } from 'react-redux';

const store = createStore(kegListReducer);

const render = (Component) => {
  ReactDOM.render(
      <HashRouter>
        <Provider store={store}>
        <Component />
        </Provider>
      </HashRouter>,
    document.getElementById('react-app-root')
  );
};

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
    /*eslint-enable */