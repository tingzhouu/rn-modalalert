import React from 'react';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';
import ModalView from './ModalView';

class App extends React.Component {
  callTheModal = () => {
    this.modalView.show();
  };

  hideTheModal = () => {
    this.modalView.close({
      then: () => {
        Alert.alert('Hello!');
      },
    });
  };

  renderModalContent = () => {
    return (
      <View
        style={{
          borderColor: 'red',
          borderWidth: 2,
          width: 200,
          height: 100,
          backgroundColor: 'white',
          alignSelf: 'center',
        }}
      >
        <Text>Hello!</Text>
        <Button title="Hide modal" onPress={this.hideTheModal} />
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text onPress={this.callTheModal}>Call The Modal</Text>
        <ModalView
          ref={ref => (this.modalView = ref)}
          //other Modal props
          // renderModalContent={this.renderModalContent}
          renderModalContent={() => <View style={{ borderColor: 'red', borderWidth: 2, height: 100, width: 200 }} />}
        >
        </ModalView>
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
    paddingHorizontal: 20,
  },
});

export default App;
