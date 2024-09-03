// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreeens';
import InfoScreen_de from './screens/InfoScreens_de';
import InfoScreen_es from './screens/InfoScreens_es';
import InfoScreen_en from './screens/InfoScreens_en';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Info_es" component={InfoScreen_es} />
        <Stack.Screen name="Info_de" component={InfoScreen_de} />
        <Stack.Screen name="Info_en" component={InfoScreen_en} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

