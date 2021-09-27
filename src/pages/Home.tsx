/**
 * Food Diary App
 *
 * @format
 */

import React, { useEffect, useMemo, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text
} from 'react-native';

import { Theme } from 'interfaces/Theme.interface';
import { useTheme } from 'contexts/Theme.context';
import { DiaryEntry } from 'interfaces/DiaryEntry';
import DiaryEntryCard from 'components/DiaryEntryCard';
import { Collection, CollectionChangeSet } from 'realm';

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    mainBackground: {
      backgroundColor: theme.colour.background
    }
  });
}

type HomeProps = {
  realm: Realm | null;
}

const Home = ({ realm }: HomeProps) => {
  const { theme } = useTheme();
  const [entries, setEntries] = useState<DiaryEntry[] | null>(null);

  const styles = useMemo(
    () => createStyles(theme),
    [theme]
  );

  // Define the collection listener
  function listener(diaryEntries: Collection<DiaryEntry>, changes: CollectionChangeSet) {
    setEntries(diaryEntries.map((entry: DiaryEntry) => entry));
  }

  useEffect(() => {
    if (realm) {
      const diaryEntries = realm.objects<DiaryEntry>("DiaryEntry");
      diaryEntries.addListener(listener);
    }

  }, [realm]);


  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.mainBackground}>
      {entries &&
        entries.map(entry => {
          return (<DiaryEntryCard key={entry.id} entry={entry} />)
        })
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
});

export default Home;
