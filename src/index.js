import React from 'react';
import ReactDOM from 'react-dom';
import App from './containeres/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
