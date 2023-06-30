import { Text, StyleSheet, View, } from 'react-native'
import React, { isValidElement, useState, } from 'react'
import FormContainer from './FormContainer'
import FormInput from './FormInput'
import FormSubmitButton from './FormSubmitButton'
import { isValidEmail, isValidObjField, updateError } from './utils/methods'



const SignupForm = () => {
const [userInfo, setUserInfo] = useState({
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
});

const [error, setError] = useState('');

const {fullName, email, password, confirmPassword} = userInfo

const handleOnChangeText = (value, fieldName) => {
  setUserInfo({...userInfo, [fieldName]: value})
}

const isValidForm = () => {
  if(!isValidObjField(userInfo)) return updateError('required all fields!', setError);
  if(!fullName.trim() || fullName.length < 3) return updateError('Invalid name!', setError);
  if(!isValidEmail(email)) return updateError('Invalid email', setError);
  if(!password.trim() || password.length < 8) return updateError('Password is less than 8 characters', setError);
  if(password !== confirmPassword) return updateError('Password does not match!', setError);

  return true;
}

const submitForm = () => {
  if(isValidForm()){
    // Submit form
    console.log(userInfo)
  }
}

  
    return( 
       <FormContainer style={styles.container}>
       {error ? <Text style={{color: 'red', fontSize: 18, textAlign:'center'}}>{error}</Text> : null}
        <FormInput value={fullName} 
         onChangeText={(value) => handleOnChangeText(value, 'fullName')}
         label='Full Name' placeholder='John wick'/>
        <FormInput value={email}
         onChangeText={(value) => handleOnChangeText(value, 'email')} 
        autoCapitalize = 'none' label='Email' placeholder='example@gmail.com'/>
        <FormInput value={password} 
         onChangeText={(value) => handleOnChangeText(value, 'password')}
        secureTextEntry autoCapitalize = 'none' label='Password' placeholder='********'/>
        <FormInput value={confirmPassword} 
         onChangeText={(value) => handleOnChangeText(value, 'confirmPassword')}
        secureTextEntry autoCapitalize = 'none' label='Confirm Password' placeholder='********'/>
        <FormSubmitButton onPress={submitForm} title='Sign Up'/>
      </FormContainer>
    )
  
}

export default SignupForm

const styles = StyleSheet.create({
   
})