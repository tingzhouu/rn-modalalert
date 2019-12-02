import Modal from 'react-native-modal';
import { Platform, View, Text, Button } from 'react-native';
import React from 'react';

class ModalView extends React.Component {
  state = {
    visible: false,
  };

  close = ({ callBackFunctionAfterModalIsClosed } = {}) => {
    if (Platform.OS === 'ios') {
      this.setState({ visible: false, onDismiss: callBackFunctionAfterModalIsClosed });
    } else {
      this.setState({ visible: false });
      if (callBackFunctionAfterModalIsClosed !== undefined) {
        callBackFunctionAfterModalIsClosed();
      }
    }
  }

  show = () => {
    this.setState({ visible: true });
  }

  render() {
    const { renderModalContent } = this.props;
    return (
      <Modal
        animationIn="fadeIn"
        animationOut="fadeOut"
        backdropTransitionOutTiming={0}
        coverScreen={true}
        backdropColor="#00d7af"
        isVisible={this.state.visible}
        onDismiss={this.state.onDismiss}
        onBackdropPress={this.close}
        {...this.props}
      >
        {renderModalContent()}
      </Modal>
    );
  }
}

export default ModalView;
