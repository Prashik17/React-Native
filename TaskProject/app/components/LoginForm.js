import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import FormContainer from './FormContainer'
import FormInput from './FormInput'
import FormSubmitButton from './FormSubmitButton'
import { isValidEmail, isValidObjField, updateError } from './utils/methods'

export default function LoginForm() {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
  });

  const {email, password} = userInfo;

  const [error, setError] = useState('')

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({...userInfo, [fieldName] : value})
  }


  const isValidForm = () => {
    if(!isValidObjField(userInfo)) return updateError('Required all fields!', setError)
    if(!isValidEmail(email)) return updateError('Invalid email', setError)
    if(!password.trim() || password.length < 8) return updateError('Password is too short', setError)

    return true;
  }

  const submitForm = () => {
    if(isValidForm()){
      console.log(userInfo)
    }
  }
  
  return (
      <FormContainer style={styles.container}>
      {error ? <Text style={{color: 'red', fontSize: 18, textAlign:'center'}}>{error}</Text> : null}
        <FormInput value={email}
         onChangeText={(value) => handleOnChangeText(value, 'email')} label='Email' placeholder='example@gmail.com'
        autocapitalize='none'
         />
        <FormInput value={password}
         onChangeText={(value) => handleOnChangeText(value, 'password')} label='Password' placeholder='********'
         autocapitalize='none'
         secureTextEntry
         />
        <FormSubmitButton onPress={submitForm} title='Login'/>
      </FormContainer>
  )
}

const styles = StyleSheet.create({})