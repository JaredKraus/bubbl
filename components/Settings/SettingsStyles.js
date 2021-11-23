import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff1f0'
    },
    // --  1. header --
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '9%',
        paddingHorizontal: '3%',
        borderBottomWidth: 0.2
    },
    topCornerBox: {
        height: '100%', 
        aspectRatio: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: '80%',
        width: '80%'
    },
    // -- 1. content --
    contentContainer: {
        flex: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    // -- 2. profile container--
    profileContainer: {
        flex: 3,
        width: '100%'
    },
    // -- 3. profile info
    profileInfoContainer: {
        flex: 2.8,
        flexDirection: 'row',
    },
    // -- 4. profile photo
    profilePhotoConatiner: {
        flex: 2.1,
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    profilePhoto: {
        width: '82%', 
        aspectRatio: 1/1, 
        borderWidth: 0.2, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: "#fff1f0",
        shadowColor: 'black',
        shadowOffset: {width: -3, height: 3},
        shadowOpacity: 0.3   
    },
    profileId: {
        paddingHorizontal: '2%',
    },
    // -- 4. profile bio
    profileBioConatiner: {
        borderWidth: 0.2,
        flex: 3,
    },
    profileBio: {
        flex: 6,
        paddingHorizontal: '2%',
        paddingVertical: '2%',
        borderWidth: 0.2

    },
    // -- 3. profile name
    profileNameContainer: {
        flex: 1.1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        fontSize: 40,
        color: '#0d265d',

    },
    // -- 3. profile button
    profileButtonContainer: {
        flex: 1.1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    button: {
        height: 40,
        width: 300,
        backgroundColor: '#fff1f0',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.2,
        // shadowColor: 'black',
        // shadowOffset: {width: -2, height: 2},
        // shadowOpacity: 0.4   
    },
    buttonText: {
        fontSize: 20,
        color: '#355c7d'
    },
    // -- 2. posts container --
    postsContainer: {
        flex: 4.5,
        width: '100%',
        borderWidth: 0.5
    },
    postImageContainer: {
        flex: 1/3
    },
    postTextContainer: {
        flex: 1/3,
        aspectRatio: 1/1, 
        backgroundColor: '#fff',
        borderRightWidth: 0.2,
        borderBottomWidth: 0.2
    },
    posts: {
        flex: 1,
        aspectRatio: 1/1
    }
})

export default styles;