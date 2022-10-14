import React from 'react';
import {
  Platform, View, Text, StyleSheet, TouchableOpacity, Alert,
} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import axios from '../config/axios';
import commonStyles from '../config/styles';

export default (props) => {
  const logout = async () => {
    try {
      await axios.post('/auth/logout');
      await delete axios.defaults.headers.common.Authorization;
      await AsyncStorage.removeItem('token');
      props.navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: 'Auth' }] }));
    } catch ({ title, message }) {
      Alert.alert(title, message);
    }
  };

  return (
    <DrawerContentScrollView>
      <View style={styles.header}>
        <Text style={styles.title}>Teste Gedui</Text>
        <TouchableOpacity onPress={logout} style={styles.touchableLogin}>
          <View style={[styles.button]}>
            <Text style={styles.buttonText}>sair</Text>
          </View>
        </TouchableOpacity>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderColor: '#DDD',
  },
  title: {
    color: '#000',
    fontFamily: commonStyles.fontFamily,
    fontSize: 30,
    paddingTop: Platform.OS === 'ios' ? 70 : 30,
    padding: 10,
  },
  touchableLogin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#031961',
    borderWidth: 1,
    borderColor: '#00214F',
    marginTop: 10,
    marginBottom: 30,
    padding: 10,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  buttonText: {
    fontFamily: commonStyles.fontFamily,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 20,
  },
});
