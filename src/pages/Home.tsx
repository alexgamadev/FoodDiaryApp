/**
 * Food Diary App
 *
 * @format
 */

import React, { useMemo } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text
} from 'react-native';

import { Theme } from 'interfaces/Theme.interface';
import { useTheme } from 'contexts/Theme.context';

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    mainBackground: {
      backgroundColor: theme.colour.background
    }
  });
}

const Home = () => {
  const { theme } = useTheme();

  const styles = useMemo(
    () => createStyles(theme),
    [theme]
  );

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.mainBackground}>
      <Text>Test</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
});

export default Home;
