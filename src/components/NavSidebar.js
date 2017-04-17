import React, {Component} from 'react';
import { Sidebar, Menu, Icon } from 'semantic-ui-react'

export default class NavSidebar extends Component{

  constructor(){
    super();
    this.state = { visible: false };
  }

  toggleVisibility(){
    this.setState({ visible: !this.state.visible });
  }

  render(){
    return(
      <Sidebar as={Menu} animation='push' width='thin' visible={this.state.visible} icon='labeled' vertical inverted>
        <Menu.Item name='home'>
          <Icon name='home' />
          Home
        </Menu.Item>
        <Menu.Item name='gamepad'>
          <Icon name='gamepad' />
          Games
        </Menu.Item>
        <Menu.Item name='camera'>
          <Icon name='camera' />
          Channels
        </Menu.Item>
      </Sidebar>
    )
  }

}
