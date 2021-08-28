import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff1f0'
    },
    // -- header --
    header: {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '13%',
        marginHorizontal: '5%',
        borderBottomWidth: 0.5
    },
    title: {
        fontSize: 25,
        fontWeight: '700'
    },
    home: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '5%'
    },
    // -- content --
    Contentcontainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: '5%'
       
    },
    // -- footer --
    footer: {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '13%',
        marginHorizontal: '5%'
    },
    button: {
        height: 35,
        width: 115,
        backgroundColor: '#355c7d',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: {width: -3, height: 3},
        shadowOpacity: 0.4
        
    },
    postButton: {
        height: 35,
        width: 115,
        backgroundColor: 'green',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: {width: -3, height: 3},
        shadowOpacity: 0.4    
    },
    buttonText: {
        fontSize: 20,
        color: '#e4e4e4'
    }
    
})

export default styles;