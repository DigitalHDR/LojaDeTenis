//src/componentes/sizebutton
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function SizeButton(props) {
  return (
    <View style={[styles.container, { backgroundColor: props.bgColor || '#ffffff' }]}>
      <Text style={[styles.text, {color: props.color || '#A9A9A9'}]}>
        {props.children}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: '#e6e6e6e',
    borderWidth: 1,
    marginHorizontal: 10,
    marginBottom: 3
  },
  text: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    textAlignVertical: 'center'
  }
})
