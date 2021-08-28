import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import firebase from 'firebase';
import styles from './RegisterStyle';

function Register({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState(new Date(1996, 2, 14));
    const [today, setToday] = useState(new Date());
    const [errorMessage, setErrorMessage] = useState('');

    function registrationValidation(){

        // empty fields
        if (email.length === 0) {
            setErrorMessage("Please enter an email.");
            return -1;
        }
        if (firstName.length === 0) {
            setErrorMessage("Please enter your name.");
            return -1;
        }
        if (password.length === 0) {
            setErrorMessage("Please enter a password.");
            return -1;
        }
        if (confirmPassword.length === 0) {
            setErrorMessage("Please confirm your password.");
            return -1;
        }

        // passwords do not match
        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return -1;
        }

        else {
            return 1;
        }

    }
    
    
    function onSignUp() {

        // passwords do not match
        if (registrationValidation() < 0) {
            return;
        };

        // create a new user, returns a promise
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                // add the user to firestore db
                //collection of db is users
                //document in users will be the user id generated in the auth
                firebase.firestore().collection("users")
                    .doc(firebase.auth().currentUser.uid)
                    .set({
                        firstName,
                        lastName,
                        name: `${firstName} ${lastName}`,
                        email,
                        birthDate,
                        searchId: Math.trunc((Math.random() * 2114588554) + 62193782).toString(36)
                    })
                console.log(result)
            })
            .catch((err) => {
                console.log(err)
            });



    }

    return (
        <View content={styles.container}>
            <ScrollView contentContainerStyle={styles.scroll} keyboardDismissMode={Platform.OS === 'ios' ? 'interactive' : 'on-drag'}>
                <View style={styles.header} />
                <View style={styles.logoContainer} >
                    <View style={styles.logo} >
                        <Image 
                            source={require('../../../content/logo-nobackground.jpg')}
                            style={styles.image}
                        />
                    </View>
                </View>
                    
                
                <View style={styles.inputContainer} >
                    <View style={styles.nameContainer}>
                        <TextInput
                            style={styles.textInputName}
                            placeholder="First Name"
                            onChangeText={(firstName) => setFirstName(firstName)}
                        />
                        <TextInput
                            style={styles.textInputName}
                            placeholder="Last Name"
                            onChangeText={(lastName) => setLastName(lastName)}
                        />
                    </View>
                    <View style={styles.birthdayContainer}>
                        <Text style={{fontSize: 18}} >Birthday:</Text>
                        <View style={{width: '60%', fontSize: '1em'}} >
                            <DateTimePicker
                                mode="date"
                                value={birthDate}
                                onChange={(event, date) => setBirthDate(date)}
                                maximumDate={today}
                                minimumDate={new Date(1900, 1, 1)}
                            
                            />
                        </View>
                        
                        
                    </View>
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
                    <TextInput
                        style={styles.textInput}
                        placeholder="Confirm Password"
                        secureTextEntry={true}
                        onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
                    />
                </View> 
                
                <View style={styles.buttonContainer} >
                    <TouchableOpacity
                        onPress={() => onSignUp()}
                        style={styles.button}
                    >
                            <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                    <Text style={{ color: '#FF0000', fontSize: 18 }}>{errorMessage}</Text>

                    <Text style={styles.or}>―――――  OR  ―――――</Text>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("Login")}
                        style={{marginTop: 20}}
                    >
                        <Text style={styles.navButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footer} />
            </ScrollView>
        </View>
    )
}

export default Register;