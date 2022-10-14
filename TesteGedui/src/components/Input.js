import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default (props) => (
  <View style={[styles.container, props.style]}>
    <Icon name={props.icon} size={20} style={styles.icon} />
    <TextInput {...props} style={styles.input} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    borderBottomWidth: 1.5,
    borderBottomColor: '#7A7B8C',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#7A7B8C',
    marginLeft: 10,
  },
  input: {
    fontSize: 16,
    width: '85%',
    textAlign: 'center',
  },
});
