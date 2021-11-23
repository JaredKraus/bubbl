import React, {useState, useEffect} from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { Lato_300Light_Italic, Lato_400Regular_Italic, useFonts } from '@expo-google-fonts/lato';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoadingScreen from '../../Loading/Loading';
import styles from './UserProfileStyle';
import firebase from 'firebase';
require('firebase/firestore');

export default function UserProfile({navigation, route}) {

    // state
    const [userPosts, setUserPosts] = useState([]);
    const [user, setUser] = useState(null);
    const [userFollowing, setUserFollowing] = useState(false);

    // get redux state
    const {currentUser, following} = useSelector((state) => state.userState);

    // on mount load the users infomation posts and bubbls
    useEffect(() => {

        firebase.firestore()
        .collection("users")
        .doc(route.params.uid)
        .get()
        .then((snapshot) => {
            if(snapshot.exists){
                setUser(snapshot.data())
            }
            else{
                console.log('does not exist');
            }
        })

        firebase.firestore()
        .collection("posts")
        .doc(route.params.uid)
        .collection("userPosts")
        .orderBy("date", "desc")
        .get()
        .then((snapshot) => {
            let posts = snapshot.docs.map(doc => {
                const data = doc.data();
                const id = doc.id;
                return {id, ...data}
            })
            setUserPosts(posts)
        })

        if(following.indexOf(route.params.uid) > -1){
            
            setUserFollowing(true);
        }
        else {
            setUserFollowing(false);
        }

    }, [route.params.uid, following])

    // load fonts
    let [fontsLoaded, error] = useFonts({
        Lato_300Light_Italic,
        Lato_400Regular_Italic
    })
    const font1 = fontsLoaded ? 'Lato_300Light_Italic' : null
    const font2 = fontsLoaded ? 'Lato_400Regular_Italic' : null

    // function to display posts in grid
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

    // follow / unfollow function
    const changeFollowing = () => {
        
        // unfollow user
        if(userFollowing) {
            firebase.firestore()
            .collection("following")
            .doc(firebase.auth().currentUser.uid)
            .collection("usersFollowing")
            .doc(route.params.uid)
            .delete()
        }
        //follow user
        else {

            firebase.firestore()
            .collection("following")
            .doc(firebase.auth().currentUser.uid)
            .collection("usersFollowing")
            .doc(route.params.uid)
            .set({
                
            })
        }
    }

    if(user){
        return (
            <View style={styles.container} >
                <View style={styles.header} >
                    <TouchableOpacity onPress={() => navigation.pop() } >
                        <Ionicons name="chevron-back" size={32} color="#000"/>
                    </TouchableOpacity>
                    
                    <Image
                        source={require('../../../content/logo-nobackground.jpg')}
                        style={styles.logo}
                    />
                    <View style={{height: '58%', aspectRatio: 1}} />
                </View>
                <View style={styles.contentContainer} >
    
                    <View style={styles.profileContainer} >
    
                        <View style={styles.profileInfoContainer} >
    
                            <View style={styles.profilePhotoConatiner} >
                                <View style={styles.profilePhoto} >
                                    <Ionicons name="person" size={80} color="#000"/>
                                </View>
                                <View style={styles.profileId} >
                                    <Text styles={{}} >{user.id}</Text>
                                </View>
                            </View>
    
                            <View style={styles.profileBioConatiner} >
                                
                                <View style={styles.profileBio} >
                                    <Text style={{fontSize: 18, fontFamily: font2}}>{`bio`}</Text>
                                </View>
    
                            </View>
    
    
    
                        </View>
                        <View style={styles.profileNameContainer} >
                            <Text style={{ fontSize: 50, fontFamily: font1, color: "#0d265d"}} >{user.firstName}</Text>
                        </View>
                        <View style={styles.profileButtonContainer} >
                            <TouchableOpacity style={styles.button} onPress={() => changeFollowing()} >
                                <Text style={styles.buttonText}>{userFollowing ? "remove from bubbl" : "add to bubbl"}</Text>
                            </TouchableOpacity>       
                        </View>
                        
                    </View>
    
                    
                    <View style={styles.postsContainer} >
                        <FlatList 
                            numColumns={3}
                            horizontal={false}
                            data={userPosts}
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