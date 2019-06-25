import React, { Component } from 'react';
import Button from './CBtn.style';

class CBtn extends Component {
  state = {
    text: '',
    path: '',
  };


  onClick(text,path)=>{

  };

  render() {

    return (
      <Button onClick={this.onClick} type="button">
        {text}
      </Button>
    );
  }
}

export default CBtn;
