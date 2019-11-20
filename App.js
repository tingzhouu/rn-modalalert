import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import ModalView from './ModalView';

class App extends React.Component {
  callTheModal = () => {
    this.modalView.show();
  }

  hideTheModal= () => {
    this.modalView.close({
      then: () => {
        Alert.alert('Hello!');
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text onPress={this.callTheModal}>
          Call The Modal
        </Text>
        <ModalView
          ref={ref => this.modalView = ref} 
          //other Modal props
        >
          <View style={{ flex: 1 }}>
            <Text>
              Modal Stuff
            </Text>
            <Text onPress={this.hideTheModal} >Hide The Modal</Text>
          </View>
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