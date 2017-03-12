'use strict';

import BleedingEdgeApplication from './component/NavigatorExp'
import SimpleNavigator from './component/SimpleNavigator'
import Blink from './component/Blink'
import FixDimensionsBasics from './component/FixDimensionsBasics'
import PizzaTranslator from './component/PizzaTranslator'
import ListViewBasics from './component/ListViewBasics'
import TouchableButton from './component/TouchableButton'

import React, { Component } from 'react';
import {
  AppRegistry,
  NativeModules,
  StyleSheet,
  View, Text,
  Image,
  ScrollView,
  Navigator
} from 'react-native';

class HelloWorldApp extends React.Component {
  getMoviesFromApiAsync() {
    return fetch('http://facebook.github.io/react-native/movies.json')
      .then((response) => {
        alert('hha');
        return response.json();
      })
      .then((responseJson) => responseJson.movies.map((element) => console.warn(element.title)))
      .catch((error) => {
        console.warn(error);
      });
  }

  render() {
    return (
      <ScrollView>
        <View style={{ backgroundColor: '#4466ff' }}>
          <Text style={styles.bigBlue} onPress={this.getMoviesFromApiAsync}>Hello World hah</Text>
          <Text style={[styles.bigBlue, styles.red]} >Hello World hah</Text>
          <Text style={styles.red} onPress={() => {
            NativeModules.CustomModule.customMethod("hello a").then((result) => {
              alert(result);
            });
          } }>Hello World hah</Text>
          <Blink text='Wonderful Day' />
          <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' }} style={{ width: 193, height: 110 }}>
            <Text>This is inside</Text>
          </Image>
          <Image source={require('./test.png')} ></Image>
          <FixDimensionsBasics />
          <PizzaTranslator title='pizza' />
          <ListViewBasics style={{ height: 100 }} />
          <TouchableButton />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 13,
  },
  red: {
    color: 'red',
  }
});

AppRegistry.registerComponent('demo', () => HelloWorldApp);
