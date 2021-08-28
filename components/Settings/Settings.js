import React from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './SettingsStyles';
import firebase from 'firebase';

export default function Settings({navigation}) {
    
    const LogOut = () => {
        firebase.auth().signOut();
    }
    
    return (
        <View style={styles.container} >
                <View style={styles.header} >
                    <TouchableOpacity onPress={() => navigation.pop() } >
                        <Ionicons name="chevron-back" size={32} color="#000"/>
                    </TouchableOpacity>
                    
                    <Image
                        source={require('../../content/logo-nobackground.jpg')}
                        style={styles.logo}
                    />
                    <View style={{height: '58%', aspectRatio: 1}} />
                </View>

                <View style={styles.contentContainer} >
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
                        <Button title='Log Out' onPress={() => LogOut()} />
                     </View>
                </View>
            </View>
    )
}
