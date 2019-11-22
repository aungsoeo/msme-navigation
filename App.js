import React from 'react';

import DrawerNavigator from './navigators/DrawerNavigator';
// import BottomTabNavigator from './navigators/BottomTabNavigator';

export default class App extends React.Component {
  render(){
    return (
      <DrawerNavigator/>
    );
  }
}

