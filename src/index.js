import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router-dom';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';
import StorePicker from './components/StorePicker';
import App from './components/App';
import NotFound from './components/NotFound';
import registerServiceWorker from './registerServiceWorker';

const Root = () =>
  <BrowserRouter>
    <div>
      <Match exactly pattern="/" component={StorePicker} />
      <Match exactly pattern="/store/:storeId" component={App} />
      <Miss component={NotFound} />
    </div>
  </BrowserRouter>;

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
