import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

export default function FormInput(props) {
    const {placeholder,label} = props
  return(
  <>
   <Text style={{fontWeight: '900'}}>{label}</Text>
  <TextInput
    {...props}
    placeholder={placeholder} 
    style={styles.input}/>
    </>
  )
}

const styles = StyleSheet.create({
    input: {
        
            borderWidth:1, 
            borderColor: '#1b1b33',
            height:35,
            borderRadius: 8,
            fontSize: 16,
            paddingLeft: 10,
            marginBottom:20,
    }
    }
)