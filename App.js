import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Page1 from './screens/Page1'
import Page2 from './screens/Page2'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer />
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Page1: {screen: Page1},
  Page2 :{screen: Page2}
})

const AppContainer = createAppContainer(TabNavigator)