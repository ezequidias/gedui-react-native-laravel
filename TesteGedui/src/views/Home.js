import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
} from 'react-native';

import MenuSettingsItem from '../components/MenuSettingsItem';
import Page from '../components/Page';

export default class Home extends Component {
    state = {
      menu: [
        { id: 1, icon: 'bell', title: 'NOTIFICAÇÃO', subtitle: 'Bloquear, permitir, priorizar', page: '' },
        { id: 2, icon: 'eye', title: 'opção', subtitle: '', page: '' },
        { id: 3, icon: 'book-reader', title: 'Opção', subtitle: '', page: '' },
        { id: 4, icon: 'edit', title: 'Opção', subtitle: '', page: '' },
        { id: 5, icon: 'comments', title: 'Opção', subtitle: '', page: '' },
        { id: 6, icon: 'calendar-alt', title: 'SOBRE', subtitle: '', page: 'About' },
      ],
    }

    clickMenu = (menu) => {
      if (menu.page) this.props.navigation.navigate('About');
    }

    btnBack = () => {};

    btnSettings = () => {};

    render() {
      return (
        <Page {...this.props} title="Inicio" btnBack={this.btnBack} btnSettings={this.btnSettings}>
          <FlatList style={styles.pageBody} data={this.state.menu} keyExtractor={(item) => `${item.id}`} renderItem={({ item }) => <MenuSettingsItem {...item} click={this.clickMenu} />} />
        </Page>
      );
    }
}

const styles = StyleSheet.create({
  pageBody: {
    flex: 1,
    padding: 15,
    paddingRight: 40,
    paddingLeft: 40,
    backgroundColor: '#C8C9DA',
  },
});
