import Modal from 'react-native-modal';
import { Platform, View, Text, Button } from 'react-native';
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
        this.setState({ visible: true });
    }

    render() {
        return (
            <Modal
                coverScreen={false}
                backdropColor="#00d7af"
                isVisible={this.state.visible}
                onDismiss={this.state.onDismiss}
                {...this.props}
            >
                <View style={{ borderColor: 'red', borderWidth: 2, flex: 1 }}>
                    <Text>Hello!</Text>
                    <Button title="Hide modal" onPress={this.toggleModal} />
                </View>
            </Modal>
        );
    }
}

export default ModalView;