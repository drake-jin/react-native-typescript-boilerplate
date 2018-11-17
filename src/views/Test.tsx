import React from 'react'
import { Component } from 'react'
import { Text } from 'react-native'
import Test2 from 'src/views/Test2'

export default class Test extends Component {
  render() {
    return (
      <Text>
        Test.tsx, Test.tsx, Test.tsx, Test.tsx
        <Test2 />
      </Text>
    )
  }
}
