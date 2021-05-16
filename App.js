import React from 'react'
import { Provider } from 'react-redux'
import generateStore from './src/store/store'
import Main from './src/view/Main'
import DetalleGif from './src/view/DetalleGif'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

const App = () => {

  const store = generateStore()

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Main'
          screenOptions={{
            headerStyle: { backgroundColor: 'black', height: 40, },
            headerTintColor: 'white',
            headerTitleStyle: { alignSelf: 'center'},
            title: 'Gifterest',
          }}
          >
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Details" component={DetalleGif} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App