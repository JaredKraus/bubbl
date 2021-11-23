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
    logo: {
        aspectRatio: 5/2,
        width: '25%'

    },
    // -- 1. content --
    contentContainer: {
        flex: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },

    // -- 2. posts container --
    postContainer:{
        marginTop: 10
    },
    postImageContainer: {
        flex: 1,
        alignItems: 'center'
    },
    textualPost: {
        alignItems: 'center'
    },
    postTextContainer: {
        flex: 1,
        width: "90%",
        aspectRatio: 1/1,
        backgroundColor: '#fff'
    },
    posts: {
        flex: 1,
        width: "90%",
        aspectRatio: 1/1
    },
    postBy: {
        paddingLeft: '5%',
        paddingTop: 15,
        paddingBottom: 8,
        fontSize: 25,
        fontWeight: "500"
    },
    caption: {
        fontSize: 17, 
        paddingHorizontal: '5%', 
        paddingVertical: 10
    }
})

export default styles;