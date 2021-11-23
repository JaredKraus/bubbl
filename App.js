// React imports
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

// React  Navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Firebase imports
import firebase from 'firebase';
import firebaseConfig from './config/Firebase';

//Redux imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers/index';
import thunk from 'redux-thunk';

// Screen imports
import RegisterScreen from './components/auth/register/Register';
import LoginScreen from './components/auth/login/Login';
import MainScreen from './components/Main';
import LoadingScreen from './components/Loading/Loading';
import GetMediaScreen from './components/main/MakePost/GetMedia/GetMedia';
import GetTextScreen from './components/main/MakePost/GetText/GetText';
import ReviewPostScreen from './components/main/MakePost/ReviewPost/ReviewPost';
import SelectBubblsScreen from './components/main/MakePost/SelectBubbls/SelectBubbls';
import UserProfileScreen from './components/main/UserProfile/UserProfile';
import SettingsScreen from './components/Settings/Settings';
import ManageBubblsScreen from './components/bubbls/ManageBubbls/ManageBubbls';
import AddBubblScreen from './components/bubbls/AddBubbl/AddBubbl';

// create redux store
const store = createStore(rootReducer, applyMiddleware(thunk))

// only initialize firebase if it has not already been
// pass firebase config that firebase gave us
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

// creates a stack navigator for navigation
const Stack = createStackNavigator();


export default function App() {

  //state
  const [loaded, setLoaded] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  // useFffect
  // first param is executed 
  // second param array of values that when they change, first param is executed
  // empty array would be an on mount
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        setLoggedIn(false);
        setLoaded(true);
      } else {
        setLoggedIn(true);
        setLoaded(true);
      }
    })
  }, [])

  if (!loaded) {
    return (
      <LoadingScreen />
    )
  } else if (!loggedIn) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
            
            <Stack.Screen name="GetMedia" component={GetMediaScreen} options={{ headerShown: false }} />
            <Stack.Screen name="GetText" component={GetTextScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SelectBubbls" component={SelectBubblsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ReviewPost" component={ReviewPostScreen} options={{ headerShown: false }} />

            <Stack.Screen name="UserProfile" component={UserProfileScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />

            <Stack.Screen name="ManageBubbls" component={ManageBubblsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="AddBubbl" component={AddBubblScreen} options={{ headerShown: false }} />
            
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      
    )
  }

}

