import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import HomeLandingScreen from './src/view/open-page/HomeLandingScreen';
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name="Home" component={HomeLandingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App