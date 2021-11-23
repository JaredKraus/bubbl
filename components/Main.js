// React imports
import React, {useEffect} from 'react';
import { View, Text } from 'react-native';
// Navigation imports
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
// Redux import
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser, fetchUserPosts, fetchUserFollowing, fetchUserBubbls, clearData } from '../redux/actions/index';
// Screen imports
import FeedScreen from './main/Feed/Feed';
import ProfileScreen from './main/Profile/Profile';
import ExploreScreen from './main/Explore/Explore';
import NotificationScreen from './main/Notifications/Notifications';
// create an empty screen
const EmptyScreen = () => {
    return null;
}

const Tab = createBottomTabNavigator();

function Main({navigation}) {
 

    // get state
    const userState = useSelector((state) => state.userState);

    // create dispatch
    const dispatch = useDispatch();

    // bind action creators
    const ac = bindActionCreators({ fetchUser, fetchUserPosts, clearData, fetchUserFollowing, fetchUserBubbls }, dispatch);
    
    useEffect(() => {
        ac.clearData();
        ac.fetchUser();
        ac.fetchUserPosts();
        ac.fetchUserFollowing();
        ac.fetchUserBubbls();
    }, []);

    return (
        <Tab.Navigator initialRouteName="Feed">
            <Tab.Screen 
                name="Feed" 
                component={FeedScreen} 
                options={{ 
                    headerShown: false, 
                    tabBarIcon: () => (
                        <Ionicons name="newspaper-outline" size={24} color="#0d265d"/>
                    ),
                    tabBarShowLabel: false
                }}
            />
            <Tab.Screen 
                name="Explore" 
                component={ExploreScreen} 
                options={{ 
                    headerShown: false, 
                    tabBarIcon: () => (
                        <Ionicons name="rocket-outline" size={24} color="#0d265d"/>
                    ),
                    tabBarShowLabel: false
                }}
            />
             <Tab.Screen 
                name="PostContainer" 
                component={EmptyScreen} // uses empty component for stack navigation
                listeners={({navigation}) => ({
                    tabPress: (event) => {
                        event.preventDefault();
                        navigation.navigate("GetMedia");
                    }
                })}
                options={{ 
                    headerShown: false, 
                    tabBarIcon: () => (
                        <Ionicons name="add-outline" size={24} color="#0d265d"/>
                    ),
                    tabBarShowLabel: false
                }}
            />
            <Tab.Screen 
                name="Notifications" 
                component={NotificationScreen} 
                options={{ 
                    headerShown: false, 
                    tabBarIcon: () => (
                        <Ionicons name="notifications-outline" size={24} color="#0d265d"/>
                    ),
                    tabBarShowLabel: false
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={ProfileScreen} 
                options={{ 
                    headerShown: false, 
                    tabBarIcon: () => (
                        <Ionicons name="person-outline" size={24} color="#0d265d"/>
                    ),
                    tabBarShowLabel: false
                }}
            />
        </Tab.Navigator>
    )
   
}

export default Main;

