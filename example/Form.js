import React from 'react'
import { Platform, Text, TouchableOpacity, View } from 'react-native'
import { Field, reduxForm } from 'redux-form'

import validate from './validate'
import FieldDate from './FieldDate'
import FieldTime from './FieldTime'
import FieldDateTime from './FieldDateTime'
import FieldDateIOS from './FieldDateIOS'
import FieldTimeIOS from './FieldTimeIOS'
import FieldDateTimeIOS from './FieldDateTimeIOS'

const submit = values => {
  console.log('submit values:', values)
}

const Form = ({ handleSubmit }) => (
  <View style={{ padding: 15 }}>
    <View style={{ marginBottom: 15 }}>
      <Text>Datetime:</Text>
      <Field name='datetime' component={ Platform.OS === 'ios' ? FieldDateTimeIOS : FieldDateTime } />
    </View>

    <View style={{ marginBottom: 15 }}>
      <Text>Date:</Text>
      <Field name='date' component={ Platform.OS === 'ios' ? FieldDateIOS : FieldDate } />
    </View>

    <View style={{ marginBottom: 15 }}>
      <Text>Time:</Text>
      <Field name='time' component={ Platform.OS === 'ios' ? FieldTimeIOS : FieldTime } />
    </View>

    <TouchableOpacity
      onPress={ handleSubmit(submit) }
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#0080c0',
        borderWidth: 2,
        borderColor: '#0073ac',
        borderRadius: 10
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#eee' }}>
        Submit
      </Text>
    </TouchableOpacity>
  </View>
)

Form = reduxForm({
  form: 'datetime',
  validate
})(Form)

export default Form
