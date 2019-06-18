import React, { Fragment } from 'react';
import * as S from './Resources-Entry.style';

// renders each section of the resource depending on the data that is available
// checks for link addresses before trying to render any links
const ResourceEntry = data => {
  // const { title } = data;
  return (
    <Fragment>
      <section>
        {data.titleLinkAddress ? (
          <a href={data.titleLinkAddress} target="_blank">
            {data.title || data.titleLinkAddress}
          </a>
        ) : (
          <h3>{data.title}</h3>
        )}
        {data.date ? <h3>{data.date}</h3> : null}
        {data.author ? <h3>{data.author}</h3> : null}
        {data.details ? <p>{data.details}</p> : null}
        {data.footerLinkAddress ? (
          <a href={data.footerLinkAddress} target="_blank">
            {data.footerLinkCaption || data.footerLinkAddress}
          </a>
        ) : null}
      </section>
    </Fragment>
  );
};

export default ResourceEntry;
