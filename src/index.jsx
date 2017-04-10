import 'react-hot-loader/patch';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import RootContainer from './components/App.js';

render((
  <AppContainer>
    <RootContainer />
  </AppContainer>
), document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./components/App.js', () => {
    const NextRootContainer = require('./components/App.js');
    render((
      <AppContainer>
        <NextRootContainer />
      </AppContainer>
    ), document.getElementById('root'));
  })
}