import React from 'react';
import PropTypes from 'prop-types';

/**
 * The ID used to identify this component in Dash callbacks.
 */
const DropWrapper = ({ onDrop, children, status }) => {
  const allowDrop = e => e.preventDefault();

  const handleDrop = e => {
    const data = JSON.parse(e.dataTransfer.getData("item"));
    onDrop(data, status);
  }

  return (
    <div
      onDragOver={allowDrop}
      onDragEnter={allowDrop}
      onDrop={handleDrop}
      className="drop-wrapper"
    >
      { children }
    </div>
  )
}

DropWrapper.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: PropTypes.string,

  /**
   * A label that will be printed when this component is rendered.
   */
  label: PropTypes.string.isRequired,

  /**
   * The value displayed in the input.
   */
  value: PropTypes.string,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: PropTypes.func
};

export default DropWrapper;