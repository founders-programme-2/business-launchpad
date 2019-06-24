import React, { Component } from 'react';
import Button from './CBtn.style';

const CBtn = props => {
  const { text, cb } = props;
  return (
    <Button onClick={cb} type="button">
      {text}
    </Button>
  );
};

export default CBtn;
