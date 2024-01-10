import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const ResetPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // State for success message
  const navigation = useNavigation();

  const handleResetPassword = async () => {
    try {
      const response = await fetch('http://192.168.1.101:3000/updatePassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          newPassword: newPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Password updated successfully
        console.log(data.message);
        setSuccessMessage('Your Password was Updated Successfully'); // Set success message
        setTimeout(() => {
          // Navigate to the login page after a delay
          navigation.navigate('Login');
        }, 2000); // Adjust the delay as needed (2000 milliseconds = 2 seconds)
      } else {
        // Handle errors, display error messages, etc.
        console.error(data.error);
      }
    } catch (error) {
      console.error('Network error:', error);
      // Handle network errors here
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
          <Text style={styles.resetPasswordText}>Reset Password</Text>

          {successMessage ? ( // Conditionally render success message
            <Text style={styles.successMessage}>{successMessage}</Text>
          ) : null}

          <Text style={styles.enterEmailText}>Enter Your Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            autoCompleteType="email"
            autoCapitalize="none"
            maxLength={50}
          />

          <Text style={styles.enterPasswordText}>Enter Your Password</Text>
          <TextInput
            style={styles.input}
            placeholder="New Password"
            secureTextEntry={true}
            value={newPassword}
            onChangeText={(text) => setNewPassword(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Confirm New Password"
            secureTextEntry={true}
            value={confirmNewPassword}
            onChangeText={(text) => setConfirmNewPassword(text)}
          />

          <TouchableOpacity style={styles.confirmButton} onPress={handleResetPassword}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch', // Ensure the background image stretches to cover the screen
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
    width: '80%', // Adjust the width as needed
    alignItems: 'center', // Center the content horizontally
  },
  resetPasswordText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  enterEmailText: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  enterPasswordText: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  confirmButton: {
    backgroundColor: '#108866',
    paddingHorizontal: 15, // Adjust the size as needed
    paddingVertical: 10, // Adjust the size as needed
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  successMessage: {
    color: 'green',
    fontSize: 16,
    marginBottom: 10,
  },
});

export default ResetPasswordPage;
