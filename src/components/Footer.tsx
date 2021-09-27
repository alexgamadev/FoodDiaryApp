

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

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        footerContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 4,
            paddingHorizontal: 24,
            backgroundColor: theme.colour.footer
        },
        footerDescription: {
            marginTop: 8,
            fontSize: 18,
            fontWeight: '400',
            color: theme.colour.onPrimary
        },
        newEntryButton: {
            backgroundColor: theme.colour.primary,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            width: 40,
            height: 40,
            margin: 10
        },
        newEntryButtonText: {
            color: theme.colour.white,
            fontSize: 20
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
            const dateTime = DateTime.now().setLocale('en-GB');
            const newEntryData = new DiaryEntry(
                `Test meal ${dateTime}`,
                "Test descriptions",
                dateTime,
                null,
            );

            realm.write(() => {
                realm.create<DiaryEntry>("DiaryEntry", newEntryData);
            });

            console.log(dateTime.toLocaleString(DateTime.DATE_MED));
        }
    }

    return (
        <View style={styles.footerContainer}>
            <TouchableOpacity
                style={styles.newEntryButton}
                onPress={(event) => onNewEntry(event)}>
                <Text style={styles.newEntryButtonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
};



export default Footer;