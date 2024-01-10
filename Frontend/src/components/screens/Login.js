import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (email === '' || Password === '') {
      setErrorMessage('Please fill all required information');
      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
    } else {
      fetch('http://192.168.1.101:3000/Signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Email: email, Password: Password }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            setErrorMessage('Email or password is wrong');
            setTimeout(() => {
              setErrorMessage('');
            }, 5000);
          } else {
            const userName = data.username; // Get the user's name from the response
            console.log('LOG Email:', email); // Log the email
            console.log('LOG Retrieved Username:', userName); // Log the retrieved username
  
            // Then, navigate to the Interface page
            navigation.navigate('Interface', { userName });
          }
        })
        .catch((error) => {
          console.error(error);
          setErrorMessage('An error occurred. Please try again later.');
        });
    }
  
    setEmail('');
    setPassword('');
  };
  
  
  const handleButtonPress = () => {
    navigation.navigate('Signup');
  };

  const handleTextPress = () => {
    navigation.navigate('Forgotten');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  return (
    <ImageBackground source={require('./images/321.jpg')} style={styles.container} resizeMode="stretch">
      <View style={styles.boxContainer}>
        <Image source={require('./th22.png')} style={styles.imageInBox} />
        <Text style={styles.textInBox}>HarvestMate</Text>
        <View style={styles.formContainer}>
          <View style={styles.formGroup}>
            <View style={styles.input}>
              <Image source={require('./email.png')} style={styles.inputIconImageE} />
              <TextInput
                style={styles.inputField} // Updated style name
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCompleteType="email"
                autoCapitalize="none"
                maxLength={30}
                required
              />
            </View>
          </View>
          <View style={styles.formGroup}>
            <View style={styles.input}>
              <Image source={require('./pw222.png')} style={styles.inputIconImagep} />
              <TextInput
                style={styles.inputField} // Updated style name
                placeholder="Password"
                value={Password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCompleteType="password"
                autoCapitalize="none"
                maxLength={20}
                required
              />
              <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIconContainer}>
                <Image
                  source={showPassword ? require('./eye2.png') : require('./eye.png')}
                  style={styles.eyeIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.forgotPassword} onPress={handleTextPress}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.noAccount}>
            <Text>Don't have an account yet?</Text>
            <TouchableOpacity style={styles.signupButton} onPress={handleButtonPress}>
              <Text style={styles.signupButtonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
        </View>
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
  eyeIconContainer: {
    position: 'absolute',
    right: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignSelf: 'center',
  },
  imageInBox: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  textInBox: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  },
  formContainer: {
    width: '100%',
  },
  formGroup: {
    marginBottom: 15,
    position: 'relative',
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
  inputIconImageE: {
    width: 20,
    height: 35,
    marginRight: 10,
  },
  inputIconImagep: {
    width: 20,
    height: 23,
    marginRight: 10,
  },
  inputField: { // Updated style
    flex: 1, // Allow the input field to take up the remaining space
  },
  eyeIcon: {
    width: 20,
    height: 20,
  },
  forgotPassword: {
    textDecorationLine: 'underline',
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  forgotPasswordText: {
    color: '#108866',
    fontSize: 14,
    fontWeight: 'bold',
  },
  loginButton: {
    width: '40%',
    paddingVertical: 8,
    marginLeft: 65,
    backgroundColor: '#108866',
    color: 'black',
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  noAccount: {
    alignItems: 'center',
    marginTop: 20,
    fontSize: 14,
  },
  signupButton: {
    width: '40%',
    paddingVertical: 8,
    backgroundColor: '#108866',
    color: 'black',
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  signupButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default Login;