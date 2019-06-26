import React from 'react';
import PropTypes from 'prop-types';
import Button from './CBtn.style';

const CBtn = props => {
  const { text, cb } = props;
  return (
    <Button onClick={cb} type="button">
      {text}
    </Button>
  );
};

CBtn.propTypes = {
  text: PropTypes.string.isRequired,
  cb: PropTypes.func.isRequired,
};

export default CBtn;
