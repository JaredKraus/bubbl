import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    // --- 1 container ---
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff1f0'
    },
    // --- 2 logo container ---
    logoContainer: {
        flex: 3,
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
    // --- 2 input container ---
    inputContainer: {
        flex: 2,
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    textInput: {
        backgroundColor: '#fff',
        height: 40,
        width: '85%',
        fontSize: 17,
        //fontFamily: "Corbel",
        borderColor: '#000',
        borderWidth: 0.5,
        paddingLeft: 10
    },
    // --- 2 button container ---
    buttonContainer: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'flex-start'
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
        marginTop: 20,
        fontSize: 17,
        //fontFamily: "Corbel Light",
    },
    navButtonText: {
        fontSize: 22,
        //fontFamily: "Corbel",
        color: '#0d265d'
    }
})

export default styles;