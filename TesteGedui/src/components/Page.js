import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconIon from 'react-native-vector-icons/Ionicons';

import commonStyles from '../config/styles';

export default (props) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
      <Icon name="bars" size={25} style={styles.iconMenu} />
    </TouchableOpacity>
    <View style={styles.page}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.btnBack(props.id)}><Icon name="angle-left" size={25} style={styles.headerIcon} /></TouchableOpacity>
        <Text style={styles.headerTitle}>{props.title}</Text>
        <TouchableOpacity onPress={() => props.btnSettings(props.id)}><IconIon name="settings-outline" size={25} style={styles.headerIcon} /></TouchableOpacity>
      </View>
      { props.children }
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003B78',
  },
  iconMenu: {
    color: '#C8C9DA',
    padding: 15,
  },
  page: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    marginLeft: 5,
    marginRight: 5,
  },
  header: {
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    backgroundColor: '#001840',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#fff',
  },
  headerTitle: {
    fontFamily: commonStyles.fontFamily,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#fff',
    fontSize: 22,
  },
  headerIcon: {
    color: '#FFF',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  pageBody: {
    flex: 1,
    padding: 30,
    paddingRight: 40,
    paddingLeft: 40,
    backgroundColor: '#C8C9DA',
  },
});
