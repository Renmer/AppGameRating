import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './routes/Navigation';
import { PaperProvider,  MD2LightTheme, MD2DarkTheme, } from 'react-native-paper';


function App() {

  return (
    <NavigationContainer>
      <PaperProvider theme={MD2LightTheme}>
        <Navigation />
      </PaperProvider>
    </NavigationContainer>
  );
}

export default App;