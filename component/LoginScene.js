'use strict';

import React, { Component, PropTypes } from 'react'
import {
  Platform,
  BackAndroid,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
  Dimensions,
} from 'react-native'

import CheckBox from './CheckBox'

export const STATUS_BAR_HEIGHT = 25;
export const ABOVE_LOLIPOP = Platform.Version && Platform.Version > 19;

export default class extends Component {

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBack);
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBack);
  }

  handleBack = () => {
    const navigator = this.props.navigator;
    if (navigator && navigator.getCurrentRoutes().length > 1) {
      navigator.pop();
      return true;
    }
    return false;
  };

  constructor(props) {
    super(props);

    this.state = {
      username_str: '',
      password_str: '',
      logining: false
    };
  }

  render() {
    var {height, width} = Dimensions.get('window');
    var deviceHeight = height;
    var deviceWidth = width;
    // console.warn(width + ' ' + height);
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle='light-content'
          backgroundColor='transparent'
          style={{ height: STATUS_BAR_HEIGHT }}
          translucent={ABOVE_LOLIPOP}>
        </StatusBar>
        <Text style={styles.title}>只能盖章</Text>

        <TextInput
          placeholder='请输入用户名'
          numberOfLines={1}
          maxLength={10}
          underlineColorAndroid='transparent'
          returnKeyType='next'
          onChangeText={(text) => this._onTextChange_usr(text)}
          style={styles.input_box}>
        </TextInput>
        <TextInput
          placeholder='请输入密码'
          numberOfLines={1}
          maxLength={6}
          returnKeyType='go'
          underlineColorAndroid='transparent'
          secureTextEntry={true}
          onChangeText={(text) => this._onTextChange_pwd(text)}
          style={[styles.input_box, { marginTop: 16 }]}>
        </TextInput>

        <View style={{ alignSelf: 'stretch', alignItems: 'flex-end', margin: 4 }}>
          <CheckBox text='记住用户名密码' onClick={() => {
            ToastAndroid.show('fuck click', ToastAndroid.SHORT);
          } }>
          </CheckBox>
        </View>

        {
          this.state.logining
            ?
            <ActivityIndicator
              animating={this.state.logining}
              style={{ marginTop: 32, }}
              size="large">
            </ActivityIndicator>
            :
            <TouchableHighlight style={styles.login_box} underlayColor="#66666666" onPress={() => this._checkAndLogin()}>
              <Text
                style={{
                  fontSize: 17,
                  color: 'white',
                  textAlign: 'center'
                }} >登录</Text>
            </TouchableHighlight>
        }

        <View style={{ flexDirection: 'row', margin: 8 }}>
          <Text style={{ flex: 1, textAlign: 'left', color: 'gray' }} onPress={() => {
            ToastAndroid.show('fuck click', ToastAndroid.SHORT);
          } }>云注册
          </Text>
          <Text style={{ flex: 1, textAlign: 'right', color: 'gray' }} onPress={() => {
            ToastAndroid.show('fuck click', ToastAndroid.SHORT);
          } }>冲之服务器
          </Text>
        </View>

        <Image
          source={{ uri: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png' }}
          style={{ position: 'absolute', marginLeft: deviceWidth / 2 - 60 - 32, resizeMode: Image.resizeMode.stretch, height: 50, width: 120, bottom: 16 }}>
        </Image>
      </View>
    );
  }

  _checkAndLogin() {
    if (this.state.password_str.length < 6) {
      ToastAndroid.show('password too short(at least 6)', ToastAndroid.SHORT);
    } else if (!this.__checkReasonable()) {
      ToastAndroid.show('username or password error\nplease check it', ToastAndroid.SHORT);
    } else {
      this.setState({
        logining: true,
      });
      setTimeout(() => {
        alert('username:' + this.state.username_str + '\npassword:' + this.state.password_str);
        this.setState({
          logining: false,
        });
      }, 2000);
    }
  }

  __checkReasonable() {
    return this.state.username_str === 'hello' && this.state.password_str === '123456'
  }

  _onTextChange_usr(text) {
    this.setState({
      username_str: text
    });
  }

  _onTextChange_pwd(text) {
    this.setState({
      password_str: text
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef'
  },
  title: {
    fontSize: 25,
    color: '#3790ec',
  },
  input_box: {
    alignSelf: 'stretch',
    fontSize: 14,
    marginTop: 64,
    padding: 8,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#3790ec'
  },
  login_box: {
    backgroundColor: '#3790ec',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'transparent',
    marginTop: 32,
    alignSelf: 'stretch',
    paddingTop: 8,
    paddingBottom: 8
  },
})