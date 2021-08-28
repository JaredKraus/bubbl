import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './NotificationStyles'

export default function Notifications() {
    return (
        <View style={styles.container} >
            <View style={styles.header} >
                <Image
                    source={require('../../../content/logo-nobackground.jpg')}
                    style={styles.logo}
                />
            </View>
            <View style={styles.contentContainer} >

            </View>

     </View>
    )
}