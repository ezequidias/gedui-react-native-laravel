import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Page from '../components/Page';
import commonStyles from '../config/styles';

export default class About extends Component {
    state = {
      isEnabled: false,
    }

    componentDidMount = async () => {

    }

    btnBack = () => this.props.navigation.navigate('Home');

    btnSettings = () => this.props.navigation.navigate('Home');

    render() {
      return (
        <Page {...this.props} title="Sobre" btnBack={this.btnBack} btnSettings={this.btnSettings}>
          {this.state.isEnabled}
          <View style={styles.subHeader}>
            <Icon name="bell" size={25} style={styles.iconLeft} />
            <View style={styles.contentTitle}>
              <Text style={[styles.title]}>NOTIFICAÇÂO</Text>
              <Text style={styles.subtitle}>Bloquear, permitir, priorizar</Text>
            </View>
          </View>
          <View style={styles.pageBody}>
            <Text style={styles.bodyTitle}>PRIORIZAR</Text>
            <View style={styles.contentBody}>
              <Text style={styles.bodyText}>
                Priorizar as mensagens deste App em detrimento aos outros APP instalados no seu celular.
              </Text>
              <Switch
                style={styles.bodySwitch}
                trackColor={{ false: '#767577', true: '#008088' }}
                thumbColor="#FFF"
                ios_backgroundColor="#3e3e3e"
                onValueChange={(isEnabled) => (this.setState({ isEnabled }))}
                value={this.state.isEnabled}
              />
            </View>
          </View>
        </Page>
      );
    }
}

const styles = StyleSheet.create({
  subHeader: {
    padding: 10,
    paddingHorizontal: 15,
    backgroundColor: '#EFEFF4',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 2,
    borderTopColor: '#9C9EA1',
    borderBottomWidth: 2,
    borderBottomColor: '#9C9EA1',
  },
  pageBody: {
    flex: 1,
    padding: 30,
    paddingRight: 40,
    paddingLeft: 40,
    backgroundColor: '#C8C9DA',
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
    flex: 9,
    justifyContent: 'center',
  },
  iconLeft: {
    flex: 1,
  },
  bodyTitle: {
    fontFamily: commonStyles.fontFamily,
    fontWeight: 'bold',
    color: '#2B2B2E',
    fontSize: 15,
    paddingBottom: 15,
  },
  contentBody: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bodyText: {
    flex: 5,
  },
  bodySwitch: {
    flex: 1,
  },
});
