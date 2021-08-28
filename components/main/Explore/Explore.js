import React, {useState} from 'react';
import { View, Text, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import styles from './ExploreStyle';

import firebase from 'firebase';
require('firebase/firestore');

export default function Explore({ navigation }) {

    const [users, setUsers] = useState([])
    const [searchText, setSearchText] = useState("")

    const fetchUsersName = (search) => {
        firebase.firestore()
        .collection('users')
        .where('name', '>=', search)
        .get()
        .then((snapshot) => {
            let users = snapshot.docs.map(doc => {
                const data = doc.data();
                const id = doc.id;
                return {id, ...data}
            })
            setUsers(users);
        })
    }

    return (
        <View style={styles.container} >
            <View style={styles.header} >
                <Image
                    source={require('../../../content/logo-nobackground.jpg')}
                    style={styles.logo}
                />
            </View>
            <View style={styles.contentContainer} >
                <View style={styles.searchConatiner} >
                    <TextInput 
                        onChangeText={(search) => {
                            fetchUsersName(search);
                            setSearchText(search);
                        }}
                        placeholder="Search for friends"
                        value={searchText}
                        style={styles.searchBar}
                    />
                </View>
                <View style={styles.flatListContainer} >
                    {
                        searchText.length > 0 ?
                        <FlatList 
                            numColumns={1}
                            horizontal={false}
                            data={users}
                            renderItem={({item}) => (
                                <View style={{width: '100%', height: 50, paddingLeft: '5%', justifyContent: 'center', borderWidth: 0.2}} >
                                    <TouchableOpacity onPress={() => navigation.navigate("UserProfile", {uid: item.id})} >
                                        <Text style={{fontSize: 20}} >{item.name}</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        />
                        :
                        <View />
                    }
                    
                </View>

            </View>
        </View>
    )
}