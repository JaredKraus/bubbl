import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff1f0',
        width: '100%'
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
        flex: 12.5,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    flatListContainer: {
        width: '100%',
        height: '100%',
    },
    flatList: {
        width: '100%', 
        height: 60, 
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.2
    },
    circleContainer: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        flex: 4,
        height: '100%',
        justifyContent: 'center',
        paddingLeft: '5%'
    },
    circle: {
        height: '60%',
        aspectRatio: 1,
        borderWidth: 3,
        borderRadius: 50
    },
    // --- 1 footer ---
    footer: {
        flex: 2.5,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    addButton: {
        height: '50%',
        width: '80%',
        borderRadius: 10,
        borderWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#355c7d',
    }

    
    
})

export default styles;