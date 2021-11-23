import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { View, Text, Button, FlatList, Image } from 'react-native';
import LoadingScreen from '../../Loading/Loading';
import styles from './FeedStyle'

export default function Feed({navigation}) {

    // get redux state
    const {currentUser, following} = useSelector((state) => state.userState);
    const {users, usersLoaded} = useSelector((state) => state.usersState);

    //state
    const [followingPosts, setFollowingPosts] = useState([]);

    useEffect(() => {
        let posts = [];
        if(usersLoaded == following.length){
            for(let i = 0; i < following.length; i++){
                const user = users.find(el => el.uid === following[i]);
                if(user != undefined){
                    posts = [...posts, ...user.posts];
                }
            }

            posts.sort(function(x,y){
                return y.date - x.date
            })
            setFollowingPosts(posts);
        }

    }, [usersLoaded])

    const GetItem = (item) => {
        if(item.downloadURL){
            return (
                <View style={styles.postContainer}>
                    <Text style={styles.postBy}>{item.user.name}</Text>
                    <View style={styles.postImageContainer} >
                        <Image 
                            source={{uri: item.downloadURL}} 
                            style={styles.posts}
                        />
                    </View>
                    <Text style={styles.caption}>{item.text}</Text>

                </View>
                
            )
        } else {
            return (
                <View style={styles.postContainer} >
                    <Text style={styles.postBy}>{item.user.name}</Text>
                    <View style={styles.textualPost} >
                        <View style={styles.postTextContainer} >
                            <Text style={{fontSize: 22, paddingHorizontal: 5, paddingVertical: 10}} >{item.title}</Text>
                            <Text style={styles.caption}>{item.text}</Text>
                        </View>
                    </View>              
                </View>
            )
        }
    }

    if(currentUser){
        return (
            <View style={styles.container} >
                <View style={styles.header} >
                    <Image
                        source={require('../../../content/logo-nobackground.jpg')}
                        style={styles.logo}
                    />
                </View>
                <View style={styles.contentContainer} >  
                    
                    <View style={styles.postsContainer} >
                        <FlatList 
                            numColumns={1}
                            horizontal={false}
                            data={followingPosts}
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
