import { Formik, useField } from 'formik'
import React from 'react'
import { Button, View, StyleSheet } from 'react-native'

import StyledText from '../components/StyledText.jsx'
import StyledTextInput from '../components/StyledTextInput.jsx'

const initialValues = {
    email: '',
    password: ''
}

const FormikInputValue = ({ name, ...props }) => { 
  const [field, meta, helpers] = useField(name)

  return (
    <>
      <StyledTextInput 
      error={meta.error}
        value={field.value} 
        onChangeText={value => helpers.setValue(value)}
        {...props}
      />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  )
}

const validate = values => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Email is required'
  } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  console.log(errors)

  return errors
}

export default function LogInPage() {
  return (
    <Formik validate={validate}
      initialValues={initialValues} 
      onSubmit={
          values => console.log(values)
      }
    >
      {({ handleChange, handleSubmit, values }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue 
              name='email'
              placeholder='E-mail'
            />
            <FormikInputValue 
              name='password'
              placeholder='Password'
              secureTextEntry
            />
            <Button onPress={handleSubmit} title='Log In'/>
          </View>
        )
      }}
    </Formik>
  )
}

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 20,
    marginTop: -5
  },
  form: {
    margin: 12
  }
})