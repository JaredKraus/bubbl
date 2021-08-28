import React from 'react';
import { View, Image } from 'react-native';
import styles from './LoadingStyle';

export default function Loading() {
    return (
        <View style={styles.container}>
            <Image 
                source={require('../../content/logo-nobackground.jpg')}
                style={styles.logo}
            />
        </View>
    )
}
