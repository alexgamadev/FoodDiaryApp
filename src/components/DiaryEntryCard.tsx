import { useTheme } from 'contexts/Theme.context';
import { DiaryEntry } from 'interfaces/DiaryEntry';
import { Theme } from 'interfaces/Theme.interface';
import { DateTime } from 'luxon';
import React, { useMemo } from 'react'
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.colour.surface,
            paddingHorizontal: 10,
            paddingVertical: 5,
            marginHorizontal: 20,
            marginVertical: 5,
            borderRadius: 10,
            minHeight: 50,
        },
        detailsContainer: {
            display: 'flex',
            marginTop: 10,
            flex: 1,
            alignSelf: 'stretch',
        },
        title: {
            textAlign: 'center',
            fontSize: 16,
        },
        description: {
            fontSize: 12,
        },
        createdAt: {
            textAlign: 'right',
            fontSize: 12,
            color: theme.colour.onSurfaceFaded,
        },
        imageContainer: {
            width: '100%',
            height: undefined,
            aspectRatio: 1,
            borderRadius: 10
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
    let imageSource: ImageSourcePropType | null = null;
    if (entry.imageURI) {
        imageSource = {
            uri: entry.imageURI,
        }
    }


    return (
        <View style={styles.container} key={entry.id}>
            {imageSource && <Image style={styles.imageContainer} source={imageSource} />}
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{entry.mealName}</Text>
                <Text style={styles.description}>{entry.description}</Text>
                <Text style={styles.createdAt}>{timeCreated}</Text>
            </View>
        </View>
    );
}

export default DiaryEntryCard;