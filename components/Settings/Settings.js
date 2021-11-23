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
                    <TouchableOpacity onPress={() => navigation.pop()} style={styles.topCornerBox} >
                        <Ionicons name="chevron-back" size={36} color="#000"/>
                    </TouchableOpacity>

                    <Text style={{fontSize: 20, color: '#0d265d'}} >settings</Text>
                    
                    <View style={styles.topCornerBox} >
                        <Image
                            source={require('../../content/logo-b-inverted.jpg')}
                            style={styles.logo}
                        />
                    </View>     
                </View>

                <View style={styles.contentContainer} >
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
                        <TouchableOpacity style={styles.button} onPress={() => LogOut()} >
                            <Text style={styles.buttonText}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </View>
    )
}
