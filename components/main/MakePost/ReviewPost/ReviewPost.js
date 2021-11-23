import React, { useState } from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';
import styles from './ReviewPostStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

import firebase from 'firebase';
import { TextInput } from 'react-native-gesture-handler';
require("firebase/firestore")
require("firebase/firebase-storage")

function ReviewPost({navigation, route}) {


    const [posting, setPosting] = useState(false)
    const [postingSuccess, setPostingSuccess] = useState(null);

    const {image, imageHeight, imageWidth, text, title} = route.params;

    const postImage = async () => {
        setPosting(true);
        const uri = image;
        const imagePath = `post/${firebase.auth().currentUser.uid}/${Math.random().toString(36)}`
        const response = await fetch(uri)
        const blob = await response.blob();

        const task = firebase
            .storage()
            .ref()
            .child(imagePath)
            .put(blob)

        const taskCompleted = () => {
            task.snapshot.ref.getDownloadURL().then((snapshot) => {
                savePostData(snapshot)
            })
        }

        const taskError = snapshot => {
            console.log(snapshot)
        }

        task.on("state_changed", () => null, taskError, taskCompleted)
    }


    const savePostData = (downloadURL) => {
        firebase.firestore()
        .collection('posts')
        .doc(firebase.auth().currentUser.uid)
        .collection("userPosts")
        .add({
            downloadURL: downloadURL,
            title: title,
            text: text,
            bubbls: null,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            tags: null
        }).then((function () {
            setPosting(false)
            navigation.popToTop()
        }))

    }

    if(posting) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff1f0'}} >
                <View style={{width: '60%', aspectRatio: 2}} >
                    <Image
                        source={require('../../../../content/logo-nobackground.jpg')}
                        style={{width: '100%', height: '100%'}}
                    />
                </View>
                <Text style={{fontSize: 25, marginTop: '10%', color: '#0d265d'}} >POSTING</Text>
                

            </View>
        )
    }
    else{
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>create post</Text>
                    <TouchableOpacity style={styles.home} onPress={() => navigation.navigate('Main')} >
                        <Ionicons name="home-outline" size={32} color="#0d265d"/>
                    </TouchableOpacity>
                </View>

                <View style={styles.Contentcontainer}>
                    <View>
                        {image ? <Image source={{ uri: image }} style={{ width: (imageWidth * 0.8), height: (imageHeight * 0.8) }} /> : <View />}
                    </View>
                    <View style={{marginTop: '5%', width: '80%', justifyContent: 'flex-start'}}>
                        <Text>{text}</Text>
                    </View>
                    
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GetText', {text, image, imageHeight, imageWidth, title})} >
                        <Text style={styles.buttonText}>text</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.postButton} onPress={() => image ? postImage() : savePostData(null)} >
                        <Text style={styles.buttonText}>post</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );

    }
    
}

export default ReviewPost;