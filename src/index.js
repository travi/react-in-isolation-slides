import React from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import {AppContainer} from 'react-hot-loader';
import Redbox from 'redbox-react';

import Presentation from './presentation';

function CustomErrorReporter({error}) {
  return <Redbox error={error} />;
}

CustomErrorReporter.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired
};

render(
  <AppContainer errorReporter={CustomErrorReporter}>
    <Presentation />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./presentation', () => {
    const NextPresentation = require('./presentation').default;

    render(
      <AppContainer errorReporter={CustomErrorReporter}>
        <NextPresentation />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
