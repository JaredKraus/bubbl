import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    // --- 1. container ---
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff1f0'
    },
    scroll: {
        width: '100%',

        flexDirection: 'column',
        backgroundColor: '#fff1f0',
    },
    // --- 2 header ---
    header: {
        height: '3%'
    },
    // --- 2 logo container ---
    logoContainer:{
        height: '20%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '70%',
        aspectRatio: 2
    },
    image: {
        width: '100%',
        height: '100%'
    },
    // --- 2 input conatiner ---
    inputContainer: {
        height: '30%',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    // --- 3 name container ---
    nameContainer:{ 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        width: '85%'
    },
    textInputName: {
        height: 40,
        width: '47%',
        fontSize: 17,
        borderColor: '#000',
        borderWidth: 0.5,
        paddingLeft: 5,
        backgroundColor: '#fff'
    },
    // --- 3 birthday conatiner ---
    birthdayContainer:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        width: '85%',
        height: 40,
        marginTop: 5
    },
    textInput: {
        height: 40,
        width: '85%',
        fontSize: 17,
        //fontFamily: "Corbel",
        borderColor: '#000',
        borderWidth: 0.5,
        paddingLeft: 10,
        backgroundColor: '#fff'
    },
    // --- 2 button Container ---

    buttonContainer: {
        height: '25%',
        width: '100%',
        alignItems: 'center'

    },
    button: {
        backgroundColor: "#abddfc",
        width: "85%",
        height: 40,
        marginTop: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {width: -3, height: 3},
        shadowOpacity: 0.3
    },
    buttonText: {
        fontSize: 20,
        //fontFamily: "Corbel",
        color: '#555555'
    },
    or: {
        marginTop: 10,
        fontSize: 17,
        //fontFamily: "Corbel Light",
    },
    navButtonText: {
        fontSize: 22,
        //fontFamily: "Corbel",
        color: '#0d265d'
    },
    // --- 2 footer ---
    footer: {
        height: 500,
    },
})

export default styles;