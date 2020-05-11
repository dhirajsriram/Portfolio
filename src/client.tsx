import React from 'react';
import { hydrate } from 'react-dom';

const App = React.lazy(() => import('./App'));

hydrate(
    <App />,
    document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}