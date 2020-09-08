import 'react-native-gesture-handler'
import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import style from './style'
import createStore from './store/create-store'
import { MapScreen, Search } from './screens'

const { store, persistor } = createStore()

const Tab = createBottomTabNavigator()
const { Navigator, Screen } = Tab

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <NavigationContainer>
        <Navigator>
          <Screen
            name='MapScreen'
            component={MapScreen}
            options={({ navigation }) => ({
              tabBarLabel: '',
              tabBarIcon: () => (
                <TouchableOpacity onPress={() => navigation.navigate('MapScreen')}>
                  <Image style={style.icon} source={require('./images/world.png')}/>
                </TouchableOpacity>
              ),
            })}
          />
          <Screen
            name='Search'
            component={Search}
            options={({ navigation }) => ({
              tabBarLabel: '',
              tabBarIcon: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                  <Image style={style.icon} source={require('./images/search.png')}/>
                </TouchableOpacity>
              ),
            })}
          />
        </Navigator>
      </NavigationContainer>
    </PersistGate>
  </Provider>
)

export default App
