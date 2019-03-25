import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  state = {
    test: 'test',
  };

  render() {
    const { test } = this.state;
    return (
      <View style={styles.container}>
        <Text>App is running on Prudence s phone !</Text>
        {test}
      </View>
    );
  }
}
