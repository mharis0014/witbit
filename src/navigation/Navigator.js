import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import BlogSubmission from '../screens/BlogSubmission'
import BlogList from '../screens/BlogList'

const Stack = createNativeStackNavigator()

const Navigator = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Blog Submission" component={BlogSubmission} />
      <Stack.Screen name="Blog List" component={BlogList} />
    </Stack.Navigator>
  )
}

export default Navigator
