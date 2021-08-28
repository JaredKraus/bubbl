import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image, ScrollView, View, Text, Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from './GetMediaStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function GetMedia({navigation, route}) {
    
    const [image, setImage] = useState(null);
    const [imageHeight, setImageHeight] = useState(0)
    const [imageWidth, setImageWidth] = useState(0)
    const [text, setText] = useState("")
    const [title, setTitle] = useState("An Update...")
    const [galleryPermission, setGalleryPermission] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setGalleryPermission(status === 'granted');
        })();
    }, []);

    useEffect(() =>{
        if(route.params){
            setText(route.params.text)
            setTitle(route.params.title)
        }
    }, [route])



    const pickImage = async () => {
        if(!galleryPermission){
          alert("Need Premission to access photos");
          return;
        }
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            aspect: [4, 3],
            quality: 1,
        });

        const w = Dimensions.get('screen').width * 0.9
        const l = w * (result.height / result.width)

        setImageWidth(w)
        setImageHeight(l)

        if (!result.cancelled) {
            setImage(result.uri);
        }

    };

    const UploadImage = () => {
        return(
            <View>
                <TouchableOpacity style={styles.uploadButton} onPress={pickImage} >
                    <Ionicons name="image-outline" size={72} />
                    <Text>upload media</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const ShowImage = () => {
        return (
            <View>
                <Image source={{ uri: image }} style={{ width: imageWidth, height: imageHeight }} />
                <TouchableOpacity style={styles.deleteButton} onPress={() => setImage(null)}>
                    <Text style={{fontSize: 13, color: 'red'}}>Remove Image</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>create post</Text>
                    <TouchableOpacity style={styles.home} onPress={() => navigation.navigate('Main')} >
                        <Ionicons name="home-outline" size={32} color="#0d265d"/>
                    </TouchableOpacity>
                </View>

                <View style={styles.Contentcontainer}>
                    {image ? <ShowImage /> : <UploadImage />}
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')} >
                        <Text style={styles.buttonText}>home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GetText', {image, imageHeight, imageWidth, text, title})} >
                        <Text style={styles.buttonText}>text</Text>
                    </TouchableOpacity>
                </View>
            </View>
    );
}