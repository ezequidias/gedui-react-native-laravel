import React, { Component } from 'react';
import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import { CommonActions } from '@react-navigation/native';

import axios from '../config/axios';
import imgHeaderLogin from '../../assets/imgs/header_login.jpg';
import imgLogo from '../../assets/imgs/logo.png';
import commonStyles from '../config/styles';
import Input from '../components/Input';

export default class Auth extends Component {
  state = { login: 'teste@teste.com', password: 'teste@' };

  signin = async () => {
    try {
      await axios.post('/auth/login', this.state);
      this.props.navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: 'Home' }] }));
    } catch ({ title, message }) {
      Alert.alert(title, message);
    }
  };

  render() {
    return (
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
        <View style={styles.container}>
          <ImageBackground source={imgHeaderLogin} style={styles.backgroundHeader} />
          <View style={styles.logoContainer}>
            <Image source={imgLogo} style={styles.logo} />
          </View>
          <View style={styles.formContainer}>
            <Input icon="fingerprint" placeholder="login" value={this.state.login} style={styles.input} autoCapitalize="none" onChangeText={(login) => this.setState({ login })} />
            <Input icon="lock" placeholder="senha" value={this.state.password} style={styles.input} autoCapitalize="none" secureTextEntry onChangeText={(password) => this.setState({ password })} />
            <TouchableOpacity onPress={this.signin} style={styles.touchableLogin}>
              <View style={[styles.button]}>
                <Text style={styles.buttonText}>entrar</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableForgotPassword}>
              <Text style={styles.buttonText2}>esqueci minha senha</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#C8C9DA',
  },
  container: {
    flex: 1,
    width: '100%',
  },
  backgroundHeader: {
    flex: 1,
    width: '100%',
    height: 280,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 140,
  },
  logo: {
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
  formContainer: {
    paddingRight: '10%',
    paddingLeft: '10%',
  },
  input: {
    marginTop: 40,
  },
  touchableLogin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableForgotPassword: {
    padding: 10,
    paddingTop: 60,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#031961',
    borderWidth: 1,
    borderColor: '#00214F',
    marginTop: 50,
    padding: 10,
    width: '50%',
    alignItems: 'center',
    borderRadius: 7,
  },
  buttonText: {
    fontFamily: commonStyles.fontFamily,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 20,
  },
  buttonText2: {
    fontFamily: commonStyles.fontFamily,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#464749',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 17,
  },
});
