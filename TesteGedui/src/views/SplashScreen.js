import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import axios from '../config/axios';
import imgLogo from '../../assets/imgs/logo.png';

export default class AuthOrApp extends Component {
  getUser = async () => {
    try {
      await axios.get('/user');
      this.props.navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: 'Home' }] }));
    } catch ({ title, message }) {
      Alert.alert(title, message);
      this.props.navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: 'Auth' }] }));
    }
  };

  componentDidMount = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) await this.getUser();
    else this.props.navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: 'Auth' }] }));
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={imgLogo} style={styles.image} />
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  image: {
    flex: 1,
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    position: 'absolute',
    flexGrow: 0,
    aspectRatio: 0,
  },
});
