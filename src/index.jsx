import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import 'react-hot-loader/patch';

import '../node_modules/semantic-ui-css/semantic.min.css';
import '../dist/styles.css';

const renderContainer = Container => render((<AppContainer><Container/></AppContainer>), document.getElementById('root'));

import App from './components/App.js';
const HotApp = require('./components/App.js');

renderContainer(App);
if (module.hot) module.hot.accept('./components/App.js', () => renderContainer(HotApp));