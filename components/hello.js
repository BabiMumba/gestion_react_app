import React, { Component } from 'react'
import { View ,Text,StyleSheet} from 'react-native'


export default class hello extends Component {
  render() {
    return (
        <View
            style={{
                marginTop: 20,
            }}
        >
            <Text>
                Hello, World!
            </Text>
        </View>
    )
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
