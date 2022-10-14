import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import commonStyles from '../config/styles';

export default (props) => (
  <TouchableWithoutFeedback onPress={() => props.click(props)}>
    <View style={styles.container}>
      <Icon name={props.icon} size={25} style={styles.iconLeft} color="#001840" />
      <View style={styles.contentTitle}>
        <Text style={[styles.title]}>{props.title}</Text>
        { (props.subtitle) ? <Text style={styles.subtitle}>{props.subtitle}</Text> : null }
      </View>
      <Icon name="angle-right" size={25} style={styles.iconRight} color="#001840" />
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: '#AAA',
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingVertical: 30,
  },
  title: {
    fontFamily: commonStyles.fontFamily,
    fontWeight: 'bold',
    color: '#2B2B2E',
    fontSize: 13,
  },
  subtitle: {
    fontFamily: commonStyles.fontFamily,
    color: '#58595B',
    fontSize: 11,
  },
  contentTitle: {
    flex: 6,
    justifyContent: 'center',
  },
  iconLeft: {
    flex: 1,
  },
});
