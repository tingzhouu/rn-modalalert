import Modal from 'react-native-modal';
import { Platform } from 'react-native';
import React from 'react';

class ModalView extends React.Component {

  state = {
      visible: false
  };

  close({then} = {}) {
      if (Platform.OS === 'ios') {
          this.setState({visible: false, onDismiss: then});
      } else {
          this.setState({visible: false});
          if (then !== undefined) {
              then();
          }
      }
  }

  show() {
      this.setState({visible: true});
  }

  render() {
      return (
          <Modal
              visible={this.state.visible}
              onDismiss={this.state.onDismiss}
              {...this.props}>
              {this.props.children}
          </Modal>
      )
  }
}

export default ModalView;