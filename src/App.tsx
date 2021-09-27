/**
 * Food Diary App
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme
} from 'react-native';
import Realm from 'realm';


import { DEFAULT_LIGHT_THEME } from 'interfaces/DefaultLight.theme';
import { DEFAULT_DARK_THEME } from 'interfaces/DefaultDark.theme';
import { ThemeProvider } from 'contexts/Theme.context';

import Home from "pages/Home";
import Footer from "components/Footer";
import { DiaryEntry } from 'interfaces/DiaryEntry';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [realm, setRealm] = useState<Realm | null>(null);

  useEffect(() => {
    async function openRealm() {
      await Realm.open({
        "path": "food-diary-app",
        "schema": [DiaryEntry.schema]
      }).then((newRealm) => {
        console.log("Realm opened");
        setRealm(newRealm);
      });
    }

    openRealm();
  }, []);


  return (
    <ThemeProvider initialTheme={DEFAULT_LIGHT_THEME}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Home realm={realm} />
        <Footer realm={realm}>
          Test text
        </Footer>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
