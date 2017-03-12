'use strict';

import React, { Component, PropTypes } from 'react';
import { View, Text, ListView } from 'react-native';

export default class ListViewBasics extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(['hello', 'boy'])
    };
  }

  render() {
    return (
      <View style={{ paddingTop: 10 }}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowDate) => <Text style={{ fontSize: 20 }}>{rowDate}</Text>}>
        </ListView>
      </View>
    );
  }
}