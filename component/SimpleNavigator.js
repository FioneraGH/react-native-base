'use strict';

import CustomScene from './CustomScene'
import LoginScene from './LoginScene'

import React, { Component, PropTypes } from 'react';
import { View, Text, Navigator } from 'react-native';

export default class SimpleNavigator extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{
          title: 'Init Scene',
          index: 0,
          component: CustomScene
        }}
        configureScene={(route) => {
          return Navigator.SceneConfigs.HorizontalSwipeJump;
        } }
        renderScene={(route, navigator) =>
          <route.component
            title={route.title}
            navigator={navigator}

            onForward={() => {
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
                component: LoginScene,
              });
            } }

            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              } else {
                alert('thats no more');
              }
            } }>
          </route.component>
        }>
      </Navigator>
    );
  }
}