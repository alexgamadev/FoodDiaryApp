import { useTheme } from 'contexts/Theme.context';
import { DiaryEntry } from 'interfaces/DiaryEntry';
import { Theme } from 'interfaces/Theme.interface';
import { DateTime } from 'luxon';
import React, { useMemo } from 'react'
import { StyleSheet, Text, View } from 'react-native';

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        container: {
            display: 'flex',
            backgroundColor: theme.colour.surface,
            paddingHorizontal: 10,
            paddingVertical: 5,
            marginHorizontal: 10,
            marginVertical: 5,
            borderRadius: 10,
            minHeight: 50
        },
        title: {
            textAlign: 'center',
            fontSize: 16,
            marginBottom: 5
        },
        description: {
            fontSize: 12
        },
        createdAt: {
            textAlign: 'right',
            fontSize: 12,
            color: theme.colour.onSurfaceFaded
        }
    });
}

type DiaryEntryCardProps = {
    entry: DiaryEntry
}

const DiaryEntryCard = ({ entry }: DiaryEntryCardProps) => {
    const { theme } = useTheme();

    const styles = useMemo(
        () => createStyles(theme),
        [theme]
    );

    const timeCreated = DateTime.fromISO(entry.createdAt).toLocaleString(DateTime.TIME_SIMPLE);

    return (
        <View style={styles.container} key={entry.id}>
            <Text style={styles.title}>{entry.mealName}</Text>
            <Text style={styles.description}>{entry.description}</Text>
            <Text style={styles.createdAt}>{timeCreated}</Text>
        </View>
    );
}

export default DiaryEntryCard;