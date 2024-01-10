import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const PasswordResetVerification = ({ navigation, route }) => {
  const { email, resetCode } = route.params;
  const [enteredVerificationCode, setEnteredVerificationCode] = useState('');
  const [verificationError, setVerificationError] = useState('');

  const handleVerify = () => {
    if (enteredVerificationCode === resetCode.toString()) {
      // Code is correct, proceed to reset the password
      console.log('Verification Code Correct!');

      // Navigate to the password reset page, passing the email as a parameter
      navigation.navigate('ResetPassword', { email: email });
    } else {
      // Code is incorrect, show an error message to the user.
      console.log('Verification Code Incorrect!');
      setVerificationError('Please enter the correct verification code');
    }
  };

  return (
    <ImageBackground
      source={require('./images/321.jpg')} // Replace with your image path
      style={styles.backgroundImage}
      resizeMode="stretch"
    >
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          <Text style={styles.title}>Password Reset</Text>
          <Text style={styles.instruction}>
            Please check email for verification code
          </Text>

          <Text style={styles.boldText}>Enter verification code</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter 6-digit Verification Code"
              keyboardType="numeric"
              value={enteredVerificationCode}
              onChangeText={setEnteredVerificationCode}
            />
          </View>

          {verificationError ? (
            <Text style={styles.errorText}>{verificationError}</Text>
          ) : null}

          <View style={styles.verifyButtonContainer}>
            <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
              <Text style={styles.verifyButtonText}>Verify</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Ensure there's no white space
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
    padding: 8,
    borderRadius: 10,
    paddingVertical:30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 70,
  },
  instruction: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  boldText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 80,
  },
  inputContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    paddingHorizontal: 60,
    marginBottom: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'black',
    borderWidth: 0,
    borderRadius: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
  },
  verifyButtonContainer: {
    alignItems: 'center', // Center the button horizontally
  },
  verifyButton: {
    backgroundColor: '#108866',
    paddingHorizontal: 20, // Decreased padding
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  verifyButtonText: {
    color: 'white',
    fontSize: 18, // Decreased font size
    fontWeight: 'bold',
  },
});

export default PasswordResetVerification;
