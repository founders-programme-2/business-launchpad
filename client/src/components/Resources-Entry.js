import React, { Fragment } from 'react';
import * as S from './Resources-Entry.style';

const ResourceEntry = data => {
  // const { title } = data;
  return (
    <Fragment>
      <p>{data.title}</p>
    </Fragment>
  );
};

export default ResourceEntry;
