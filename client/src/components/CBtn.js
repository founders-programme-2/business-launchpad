import React from 'react';
import Button from './CBtn.style';

const CBtn = ({ text, path }) => (
  <Button onClick={path} type="button">
    {text}
  </Button>
);

export default CBtn;
