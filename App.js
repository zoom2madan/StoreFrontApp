import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import RootNavigator from './src/components/navigation/RootNavigator';

export default function App(props) {
  return (
    <ThemeProvider>
      <RootNavigator />
    </ThemeProvider>
  );
}