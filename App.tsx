import 'react-native-gesture-handler';

import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import { GradiendProvider } from './src/context/GradientContext';

const AppState = ({ children }: any) => {
  return (
    <GradiendProvider>{children}</GradiendProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
      </AppState>
    </NavigationContainer>
  )
}

export default App