import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => (
  // <input className="display" type="text" value={result} />
  <div className="display">
    <p>{ result }</p>
  </div>
);

Display.propTypes = {
  result: PropTypes.string.isRequired,
};

// Display.defaultProps = {
//   result: '0',
// };

export default Display;
