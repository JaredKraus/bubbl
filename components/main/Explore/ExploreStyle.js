import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff1f0'
    },
    // -- header --
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
    // -- content --
    contentContainer: {
        flex: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchConatiner: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'

    },
    searchBar: {
        width: '90%',
        height: '50%',
        backgroundColor: '#fff',
        borderWidth: 0.2,
        paddingLeft: '2%'
    },
    flatListContainer: {
        flex: 8,
        width: '100%',
        borderWidth: 0.5
    },
    flatList: {

    },
    name: {
        fontSize: 40,
        color: '#0d265d',

    },
    postsContainer: {
        flex: 4,
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
        borderBottomWidth: 0.2,
        borderTopWidth: 0.2
    },
    posts: {
        flex: 1,
        aspectRatio: 1/1
    }
})

export default styles;