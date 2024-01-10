import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSendResetCode = () => {
    // Validate the email field
    if (!email) {
      setErrorMsg('Email is required');
      return;
    }

    // Make a POST request to your backend API to initiate the password reset
    fetch('http://192.168.1.101:3000/passwordReset', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'initiateReset',
        Email: email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setErrorMsg(data.error);
          setSuccessMsg('');
        } else {
          setErrorMsg('');
          setSuccessMsg(data.message);

          // Navigate to the verification page with the email and reset code
          navigation.navigate('VerificationCodeInput', {
            email: email,
            resetCode: data.resetCode,
          });
        }
      })
      .catch((error) => {
        console.error('Network error:', error);
        setErrorMsg('Network error. Please try again later.');
      });
  };

  return (
    <ImageBackground
      source={require('./images/321.jpg')} // Replace with your image path
      style={styles.backgroundImage}
      resizeMode="stretch"
    >
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          <Text style={styles.title}>Forgot Password</Text>
          <Text style={styles.instruction}>Enter your email to initiate the password reset process.</Text>

          {errorMsg ? <Text style={styles.errorMsg}>{errorMsg}</Text> : null}
          {successMsg ? <Text style={styles.successMsg}>{successMsg}</Text> : null}

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCompleteType="email"
              autoCapitalize="none"
              maxLength={25}
              required
            />

            <TouchableOpacity style={styles.sendButton} onPress={handleSendResetCode}>
              <Text style={styles.sendButtonText}>Send Reset Code</Text>
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
    resizeMode: 'cover', // or 'stretch' or 'contain'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 50,
  },
  instruction: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  errorMsg: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
  },
  successMsg: {
    color: 'green',
    fontSize: 16,
    marginBottom: 10,
  },
  inputContainer: {
    alignItems: 'center', // Center content horizontally
  },
  input: {
    width: 300,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  
  },
  sendButton: {
    width: 160,
    height: 40,
    backgroundColor: '#108866',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  sendButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ForgotPassword;
