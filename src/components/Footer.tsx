

import React, { useMemo } from 'react';
import {
    GestureResponderEvent,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Realm from 'realm';
import { DateTime } from "luxon";

import { Theme } from 'interfaces/Theme.interface';
import { useTheme } from 'contexts/Theme.context';
import { DiaryEntry } from 'interfaces/DiaryEntry';
import Button from './Button';
import { CameraOptions, ImageLibraryOptions, launchCamera, launchImageLibrary } from 'react-native-image-picker';

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        footerContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 4,
            paddingHorizontal: 24,
            backgroundColor: theme.colour.primary
        }
    });
}

type FooterProps = {
    realm: Realm | null;
    children: any
}

const Footer = ({ realm, children }: FooterProps) => {
    const { theme } = useTheme();

    const styles = useMemo(
        () => createStyles(theme),
        [theme]
    );

    const onNewEntry = (event: GestureResponderEvent) => {
        if (realm) {
            const imageOptions: CameraOptions = {
                saveToPhotos: true,
                mediaType: 'photo',
            }

            launchCamera(imageOptions, ({ assets }) => {
                if (!assets?.[0].uri) return;

                const dateTime = DateTime.now().setLocale('en-GB');
                const imageUri = assets[0].uri;
                const newEntryData = new DiaryEntry(
                    `Test meal ${dateTime}`,
                    "Test descriptions",
                    dateTime,
                    imageUri,
                );

                console.log(newEntryData);

                realm.write(() => {
                    realm.create<DiaryEntry>("DiaryEntry", newEntryData);
                });
            });
        }
    }

    return (
        <View style={styles.footerContainer}>
            <Button onPressCallback={onNewEntry}>+</Button>
        </View>
    );
};



export default Footer;