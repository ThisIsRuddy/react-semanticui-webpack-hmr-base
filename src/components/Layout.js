import React, {Component} from 'react';
import { Sidebar, Segment, Button, Image, Header } from 'semantic-ui-react';
import NavSidebar from './NavSidebar';

export default class Layout extends Component{

  constructor(){
    super();
  }

  render(){
    return(
      <div id="mainContainer">

        <Button onClick={() => this.refs.sidebar.toggleVisibility()}>Toggle Visibility</Button>
        <Sidebar.Pushable as={Segment}>

          <NavSidebar ref="sidebar"/>

          <Sidebar.Pusher>
            <Segment basic>
              <Header as='h3'>Application Content</Header>
              <Image src='http://react.semantic-ui.com/assets/images/wireframe/paragraph.png' />
            </Segment>
          </Sidebar.Pusher>

        </Sidebar.Pushable>
      </div>
    )
  }

}
