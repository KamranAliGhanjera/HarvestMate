import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Verification = ({ navigation, route }) => {
  const { userdata, verificationCode } = route.params;
  const [enteredVerificationCode, setEnteredVerificationCode] = useState('');
  const [verificationError, setVerificationError] = useState('');

  const handleVerify = () => {
    if (enteredVerificationCode === verificationCode.toString()) {
      // Code is correct, proceed with saving the user data to the database.
      console.log('Verification Code Correct!');
  
      // Make a POST request to your backend API to save the user data
      fetch('http://192.168.1.101:3000/Signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Email: userdata.Email,
          Username: userdata.Username,
          Password: userdata.Password,
          ConfirmPassword: userdata.ConfirmPassword,
          VerificationCode: enteredVerificationCode,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          // Data saved successfully to the database
          console.log('User data saved to the database:', data);
  
          // After saving the data, you can navigate to another page
          navigation.navigate('Login'); // Replace 'SomePage' with the page you want to navigate to.
        })
        .catch((error) => {
          // Error occurred while saving data
          console.error('Error saving user data:', error);
          // You can show an error message to the user if needed
        });
    } else {
      // Code is incorrect, show an error message to the user.
      console.log('Verification Code Incorrect!');
      setVerificationError('Please enter the correct verification code');
    }
  };
  

  return (
    <ImageBackground source={require('./images/321.jpg')} style={styles.container} resizeMode="stretch">
      <View style={styles.boxContainer}>
        <Text style={styles.title}>Verification</Text>
        <Text style={styles.instruction}>
          Please check your inbox and enter the code to verify your account
        </Text>

        <View style={styles.formGroup}>
          <View style={styles.input}>
            <TextInput
              style={styles.inputField}
              placeholder="Enter 6 digit Verification Code"
              value={enteredVerificationCode}
              onChangeText={setEnteredVerificationCode}
              keyboardType="numeric"
              maxLength={6}
            />
          </View>
        </View>

        {verificationError ? (
          <Text style={styles.errorText}>{verificationError}</Text>
        ) : null}

        <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
          <Text style={styles.verifyButtonText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  boxContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  instruction: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 15,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  inputField: {
    flex: 1,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
  verifyButton: {
    width: '40%',
    paddingVertical: 8,
    marginLeft: '30%',
    backgroundColor: '#108866',
    color: 'black',
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 20,
  },
  verifyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Verification;
