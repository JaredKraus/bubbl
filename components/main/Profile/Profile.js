import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { Lato_300Light_Italic, Lato_400Regular_Italic, useFonts } from '@expo-google-fonts/lato';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoadingScreen from '../../Loading/Loading';
import styles from './ProfileStyle';

export default function Profile({navigation, route}) {

    // load fonts
    let [fontsLoaded, error] = useFonts({
        Lato_300Light_Italic,
        Lato_400Regular_Italic
    })
    const font1 = fontsLoaded ? 'Lato_300Light_Italic' : null
    const font2 = fontsLoaded ? 'Lato_400Regular_Italic' : null

    // get redux state
    const {currentUser, posts} = useSelector((state) => state.userState);

    const GetItem = (item) => {
        if(item.downloadURL){
            return (
                <View style={styles.postImageContainer} >
                    <Image 
                        source={{uri: item.downloadURL}} 
                        style={styles.posts}
                    />
                </View>
            )
        } else {
            return (
                <View style={styles.postTextContainer} >
                    <Text style={{fontSize: 20, paddingHorizontal: 5, paddingVertical: 10}} >{item.title}</Text>
                </View>
            )
        }
    }

    if(currentUser){
        return (
            <View style={styles.container} >
                <View style={styles.header} />
                <View style={styles.contentContainer} >
    
    
                    <View style={styles.profileContainer} >
    
                        <View style={styles.profileInfoContainer} >
    
                            <View style={styles.profilePhotoConatiner} >
                                <View style={styles.profilePhoto} >
                                    <Ionicons name="person" size={80} color="#000"/>
                                </View>
                                <View style={styles.profileId} >
                                    <Text style={{fontSize: 16}} >{currentUser.searchId}</Text>
                                </View>
                            </View>
    
                            <View style={styles.profileBioConatiner} >
                                
                                <View style={styles.profileBio} >
                                    <Text style={{fontSize: 18, fontFamily: font2}}>{`bio`}</Text>
                                </View>
    
                            </View>
    
    
    
                        </View>
                        <View style={styles.profileNameContainer} >
                            <Text style={{ fontSize: 50, fontFamily: font1, color: "#0d265d"}} >{currentUser.firstName}</Text>
                        </View>
                        <View style={styles.profileButtonContainer} >
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Settings") } >
                                <Text style={styles.buttonText}>settings</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
    
                    
                    <View style={styles.postsContainer} >
                        <FlatList 
                            numColumns={3}
                            horizontal={false}
                            data={posts}
                            renderItem={({item}) => GetItem(item)}
                        />
    
                    </View>
    
                </View>
    
                
            </View>
        )
    } // endif
    else {
        return (
            <LoadingScreen />
        )
    }
    
}