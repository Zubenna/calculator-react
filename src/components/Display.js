import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <div className="display">
    <p>{ result }</p>
  </div>
);

Display.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Display;
