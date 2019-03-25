import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  state = {
    test: 'test',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>App is running on Prudence s phone !</Text>
        {this.state.test}
        <Text>test'</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
