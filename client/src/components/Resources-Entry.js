import React, { Fragment } from 'react';
import * as S from './Resources-Entry.style';

// renders each section of the resource depending on the data that is available
// checks for link addresses before trying to render any links
const ResourceEntry = data => {
  // const { title } = data;
  return (
    <Fragment>
      <S.Article>
        {data.titleLinkAddress ? (
          <S.A href={data.titleLinkAddress} target="_blank">
            {data.title || data.titleLinkAddress}
          </S.A>
        ) : (
          <S.H3>{data.title}</S.H3>
        )}
        {data.date ? <S.H3>{data.date}</S.H3> : null}
        {data.author ? <S.H3>{data.author}</S.H3> : null}
        {data.details ? <S.P>{data.details}</S.P> : null}
        {data.footerLinkAddress ? (
          <S.A href={data.footerLinkAddress} target="_blank">
            {data.footerLinkCaption || data.footerLinkAddress}
          </S.A>
        ) : null}
      </S.Article>
    </Fragment>
  );
};

export default ResourceEntry;
