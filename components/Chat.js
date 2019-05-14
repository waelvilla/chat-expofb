import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat'

class Chat extends Component {
  state={
    messages:  []
  }
  render() {
    return (
    <View>
      <GiftedChat />
    </View>
    )
  }
}

const styles = StyleSheet.create({


});

export default Chat;
