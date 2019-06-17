import React, { Component, Fragment } from 'react';
import AddEntry from './Journal-AddEntry';

class Journal extends Component {
  render() {
    return (
      <Fragment>
        <h1>Journal</h1>
        <AddEntry />
      </Fragment>
    );
  }
}

export default Journal;
