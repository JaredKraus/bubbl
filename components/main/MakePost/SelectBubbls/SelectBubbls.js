import React from 'react';
import { TouchableOpacity, Image, ScrollView, View, Text, TextInput, Keyboard, TouchableWithoutFeedback, Dimensions, Platform } from 'react-native';
import styles from './SelectBubblsStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

function SelectBubbls({route, navigation}) {

    const { text, image, imageWidth, imageHeight, title } = route.params;

    return (
        <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>create post</Text>
                    <TouchableOpacity style={styles.home} onPress={() => navigation.navigate('Main')} >
                        <Ionicons name="home-outline" size={32} color="#0d265d"/>
                    </TouchableOpacity>
                </View>

                <View style={styles.Contentcontainer}>
                    <View style={styles.imageContainer}>
                        <Text>Select Bubbls</Text>
                    </View>
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GetText', {text, image, imageHeight, imageWidth, title})} >
                        <Text style={styles.buttonText}>text</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ReviewPost', {text, image, imageHeight, imageWidth, title})} >
                        <Text style={styles.buttonText}>review</Text>
                    </TouchableOpacity>
                </View>
            </View>
    );
}

export default SelectBubbls;