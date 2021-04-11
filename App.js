import {createAppContainer} from 'react-navigation'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import FacebookScreen  from './screen/FacebookScreen'
import InstagramScreen  from './screen/InstagramScreen'
export default class App extends React.Component {
  render(){

    return (
      <AppContainer/>
    );
  }
  
}

const TabNavigator=createBottomTabNavigator({
Facebook:{screen:FacebookScreen},
Instagram:{screen:InstagramScreen}
})

const AppContainer=createAppContainer(TabNavigator)

