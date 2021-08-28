import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import firebase from 'firebase';
import styles from './LoginStyles';

function Login({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('')

    function onSignIn() {

        if(email.length === 0){
            setErrorMessage("Enter an email adress");
            return
        }
        if(password.length === 0){
            setErrorMessage("Enter a password.");
            return
        }

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result)
            })
            .catch((err) => {
                if(err.code === 'auth/user-not-found'){
                    setErrorMessage("Invalid email / password combo.")
                }
                if(err.code === 'auth/invalid-email'){
                    setErrorMessage("Please enter a valid email.")
                }
            })

    }

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer} >
                <View style={styles.logo} >
                    <Image
                        source={require('../../../content/logo-nobackground.jpg')}
                        style={styles.image}
                    />
                </View>
    
            </View>

            <View style={styles.inputContainer} >
                <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    onChangeText={(email) => setEmail(email)}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <View style={styles.buttonContainer} >
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onSignIn()}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Text style={{ color: '#FF0000', fontSize: 18 }}>{errorMessage}</Text>

                <Text style={styles.or}>―――――  OR  ―――――</Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Register")}
                    style={{marginTop: 20}}
                >
                    <Text style={styles.navButtonText}>Register</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default Login