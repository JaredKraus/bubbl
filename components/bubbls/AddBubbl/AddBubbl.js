import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, TextBase } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './AddBubblStyles';

export default function AddBubbl({navigation, route}) {
    
    
  
    return (
        <View style={styles.container} >
            <View style={styles.header} >
                <TouchableOpacity onPress={() => navigation.pop()} style={styles.topCornerBox} >
                    <Ionicons name="chevron-back" size={36} color="#000"/>
                </TouchableOpacity>
                <Text style={{fontSize: 20, color: '#0d265d'}} >manage bubbls</Text>
                <View style={styles.topCornerBox} >
                    <Image
                        source={require('../../../content/logo-b-inverted.jpg')}
                        style={styles.logo}
                    />
                </View>     
            </View>


            <View style={styles.contentContainer} >
                <Text>{route.params.bubblCount}</Text>
            </View>

            <View style={styles.footer} >
                <TouchableOpacity style={styles.addButton} onPress >
                    <Text style={{fontSize: 25, color: '#fff'}} >add bubbl</Text>
                </TouchableOpacity>

            </View>
            
        </View>
    )
}