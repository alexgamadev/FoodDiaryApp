/**
 * Food Diary App
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import { DEFAULT_LIGHT_THEME } from 'interfaces/DefaultLight.theme';
import { DEFAULT_DARK_THEME } from 'interfaces/DefaultDark.theme';
import { ThemeProvider } from 'contexts/Theme.context';

import Home from "pages/Home";
import Footer from "components/Footer";

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeProvider initialTheme={isDarkMode ? DEFAULT_DARK_THEME : DEFAULT_LIGHT_THEME}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Home />
        <Footer>
          Test text
        </Footer>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
