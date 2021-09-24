import React, { useMemo } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { Theme } from 'interfaces/Theme.interface';
import { useTheme } from 'contexts/Theme.context';

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        footerContainer: {
            paddingTop: 4,
            paddingHorizontal: 24,
            backgroundColor: theme.colour.footer
        },
        footerDescription: {
            marginTop: 8,
            fontSize: 18,
            fontWeight: '400',
            color: theme.colour.onPrimary
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
            <Text
                style={styles.footerDescription}>
                {children}
            </Text>
        </View>
    );
};



export default Footer;