import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './ManageBubblsStyles';

export default function ManageBubbls({navigation}) {
    
    // get redux state
    const { bubbls } = useSelector((state) => state.userState);
  
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
                <View style={styles.flatListContainer} >
                    <FlatList 
                        numColumns={1}
                        horizontal={false}
                        data={bubbls}
                        renderItem={({item}) => (
                                <TouchableOpacity onPress={() => null} style={styles.flatList} >
                                    <View style={styles.circleContainer} >
                                        <View style={{...styles.circle, borderColor: item.color}} />
                                    </View>
                                    <View style={styles.textContainer} >
                                        <Text style={{fontSize: 25, color: item.color}} >{item.name}</Text>
                                    </View>   
                                </TouchableOpacity>
                        )}
                    />
                </View>
            </View>

            <View style={styles.footer} >
                <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate("AddBubbl", {bubblCount: bubbls.length}) } >
                    <Text style={{fontSize: 25, color: '#fff'}} >add bubbl</Text>
                </TouchableOpacity>

            </View>
            
        </View>
    )
}