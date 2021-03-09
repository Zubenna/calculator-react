import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <input className="display" type="text" value={result} />
);

Display.propTypes = {
  result: PropTypes.node.isRequired,
};

export default Display;
