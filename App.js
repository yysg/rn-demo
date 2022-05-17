/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type { Node } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    Alert
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
    const [page, setPage] = useState('home')

    return (
        <SafeAreaView style={styles.container}>
            {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
            <View style={styles.body}>
                {page === 'home' ?
                    <View style={styles.homeContainer}>
                    </View> :
                    <View style={styles.favoriateContainer}>
                    </View>
                }
            </View>

            <View style={styles.footer}>
                <Button
                    title='Home'
                    onPress={() =>setPage('home') }
                />
                <Button
                    title='Favoriate'
                    onPress={() => setPage('favoriate')}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    body: {
        height: '90%',
    },
    homeContainer: {
        height: '100%',
        backgroundColor: 'green'
    },
    favoriateContainer: {
        height: '100%',
        backgroundColor: 'yellow'
    },
    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;
