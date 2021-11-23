import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image, ScrollView, View, Text, TextInput, Keyboard, TouchableWithoutFeedback, Dimensions, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './GetTextStyle';

// route.params gives you access to props passed
function GetText({route, navigation}) {

    const [text, setText] = useState("")
    const [title, setTitle] = useState("")

    const { image, imageHeight, imageWidth } = route.params;

    useEffect(() => {
        setText(route.params.text);
        setTitle(route.params.title)
    }, []);

    

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>create post</Text>
                    <TouchableOpacity style={styles.home} onPress={() => navigation.navigate('Main')} >
                        <Ionicons name="home-outline" size={32} color="#0d265d"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.Contentcontainer} >
                    <ScrollView contentContainerStyle={styles.scroll} keyboardDismissMode={Platform.OS === 'ios' ? 'interactive' : 'on-drag'}>
                            {image ? 
                            <Image source={{ uri: image }} style={{ width: (imageWidth * 0.6), height: (imageHeight * 0.6) }} /> 
                            : 
                            <TextInput style={styles.textInputTitle} maxLength={22} onChangeText={(title) => setTitle(title)} value={title} />
                            }
                            <TextInput
                                style={styles.textInput}
                                multiline={true}
                                textAlignVertical='top'
                                placeholder="Write something to your bubbls..."
                                onChangeText={(text) => setText(text)}
                                value={text}
                            />
                            <View style={{height: 500}} />
                    </ScrollView>
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GetMedia', {text, title})} >
                        <Text style={styles.buttonText}>media</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ReviewPost', {text, image, imageHeight, imageWidth, title})} >
                        <Text style={styles.buttonText}>review</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default GetText;