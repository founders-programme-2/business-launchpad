import React, { Component, Fragment } from 'react';
import axios from 'axios';

class Privacy extends Component {
  state={
    imageURL:''
  }
  componentDidMount() {
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(response => {
      this.setState({ imageURL: response.data.message });
    })
    .catch(error => {
      console.log(error);
    });
  }
  render() {
     const { imageURL } = this.state;
     return (
       <Fragment>
         <img src={imageURL} />
         <h1>Privacy</h1>
       </Fragment>

     );
   }
}

export default Privacy;
