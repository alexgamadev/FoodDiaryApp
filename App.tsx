/**
 * Food Diary App
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import Home from "pages/Home";

type FooterProps = {
  title: string,
  children: any
}

const Footer = ({ children, title }: FooterProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.footerContainer}>
      <Text
        style={[
          styles.footerTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.footerDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Home />
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <Footer title={"Test"}>
          Test text
        </Footer>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    marginTop: 4,
    paddingHorizontal: 24
  },
  footerTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  footerDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
