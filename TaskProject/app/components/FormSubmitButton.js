import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function FormSubmitButton({title, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text 
        style={{fontSize: 18, color:'#fff'}}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 45,
        backgroundColor: 'rgba(28,27,51,1)',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems:'center',
    }
})