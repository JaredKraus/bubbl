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
        justifyContent: 'center',
        alignItems: 'center'
    },
    uploadButton: {
        width: 130,
        height: 130,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 0.2,
        backgroundColor: '#fff',
        shadowColor: 'black',
        shadowOffset: {width: -3, height: 3},
        shadowOpacity: 0.4
    },
    deleteButton: {
        width: 90, 
        height: 20,
        marginRight: 5,
        marginTop: 12, 
        alignSelf: 'flex-end', 
        alignItems: 'center',
        justifyContent: 'center'
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
        width: 110,
        backgroundColor: '#355c7d',
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