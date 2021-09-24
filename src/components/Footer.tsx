import React, { useMemo } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { Theme } from 'interfaces/Theme.interface';
import { useTheme } from 'contexts/Theme.context';

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
    children: any
}

const Footer = ({ children }: FooterProps) => {
    const { theme } = useTheme();

    const styles = useMemo(
        () => createStyles(theme),
        [theme]
    );

    return (
        <View style={styles.footerContainer}>
            <TouchableOpacity style={styles.newEntryButton}>
                <Text style={styles.newEntryButtonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
};



export default Footer;