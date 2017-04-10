import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Button>Click me or not!</Button>
    );
  }

}