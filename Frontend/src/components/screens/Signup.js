import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';

const Signup = ({ navigation }) => {
  const [fdata, setFdata] = useState({
    MobileNumber: '',
    Username: '',
    Password: '',
    ConfirmPassword: '',
  });

  const handleInputChange = (name, value) => {
    setFdata({ ...fdata, [name]: value });
  };

  const [email, setEmail] = useState('');
  const [errormsg, setErrormsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const Sendtobackend = () => {
    if (
      email === '' ||
      fdata.Username === '' ||
      fdata.Password === '' ||
      fdata.ConfirmPassword === ''
    ) {
      setErrormsg('All fields are required');
      setTimeout(() => {
        setErrormsg(null);
      }, 5000);
      return;
    } else if (fdata.Password !== fdata.ConfirmPassword) {
      setErrormsg('Password and confirm password must be the same');
      setTimeout(() => {
        setErrormsg(null);
      }, 5000);
      return;
    } else {
      fetch('http://192.168.1.101:3000/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Email: email,
          Username: fdata.Username,
          Password: fdata.Password,
          ConfirmPassword: fdata.ConfirmPassword,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.error === 'Please fill all fields') {
            setErrormsg(data.error);
          } else if (data.error === 'Email already registered') {
            setErrormsg(data.error);
          } else if (data.error === 'Failed to verify') {
            setErrormsg(data.error);
          } else if (data.message === 'Verification code sent to your Email') {
            console.log(data.udata);
            alert(data.message);
            navigation.navigate('Verification', {
              verificationCode: data.VerificationCode,
              userdata: data.udata,
            });
          } else if (data.message === 'User registered successfully') {
            navigation.navigate('Login');
          }
        })
        .catch((error) => {
          console.error('Network error:', error); // Add this line to handle network errors
          setErrormsg('Network error. Please try again later.'); // Add a user-friendly error message
        });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <ImageBackground source={require('./images/321.jpg')} style={styles.backgroundImage}
      resizeMode="stretch">
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          <View style={styles.logoContainer}>
            <Image source={require('./th22.png')} style={styles.logo} />
            <Text style={styles.logoText}>Signup</Text>
          </View>

          {errormsg && <Text style={styles.errormessage}>{errormsg}</Text>}
          {successMsg && <Text style={styles.successmessage}>{successMsg}</Text>}

          <View style={styles.formContainer}>
            <View style={styles.formGroup}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                onPressIn={() => setErrormsg(null)}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCompleteType="email"
                autoCapitalize="none"
                maxLength={25}
                required
              />
              <View style={styles.inputIcon}>
                <Image source={require('./email.png')} style={styles.inputIconImageE} />
              </View>
            </View>
            <View style={styles.formGroup}>
              <TextInput
                style={styles.input}
                placeholder="Username"
                onPressIn={() => setErrormsg(null)}
                value={fdata.Username}
                onChangeText={(text) => handleInputChange('Username', text)}
                autoCapitalize="none"
                maxLength={20}
                required
              />
              <View style={styles.inputIcon}>
                <Image source={require('./un22.png')} style={styles.inputIconImage} />
              </View>
            </View>
            <View style={styles.formGroup}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                onPressIn={() => setErrormsg(null)}
                value={fdata.Password}
                onChangeText={(text) => handleInputChange('Password', text)}
                secureTextEntry={!showPassword}
                autoCompleteType="password"
                autoCapitalize="none"
                maxLength={20}
                required
              />
              <TouchableOpacity style={styles.eyeIconContainer} onPress={togglePasswordVisibility}>
                <Image
                  source={showPassword ? require('./eye2.png') : require('./eye.png')}
                  style={styles.eyeIcon}
                />
              </TouchableOpacity>
              <View style={styles.inputIcon}>
                <Image source={require('./pw222.png')} style={styles.inputIconImage1} />
              </View>
            </View>
            <View style={styles.formGroup}>
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                onPressIn={() => setErrormsg(null)}
                value={fdata.ConfirmPassword}
                onChangeText={(text) => handleInputChange('ConfirmPassword', text)}
                secureTextEntry={!showConfirmPassword}
                autoCompleteType="password"
                autoCapitalize="none"
                maxLength={20}
                required
              />
              <TouchableOpacity
                style={styles.eyeIconContainer}
                onPress={toggleConfirmPasswordVisibility}
              >
                <Image
                  source={showConfirmPassword ? require('./eye2.png') : require('./eye.png')}
                  style={styles.eyeIcon}
                />
              </TouchableOpacity>
              <View style={styles.inputIcon}>
                <Image source={require('./pw222.png')} style={styles.inputIconImage2} />
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.signupButton} onPress={Sendtobackend}>
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  errormessage: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: '#F50057',
    padding: 5,
    borderRadius: 10,
  },
  successmessage: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: 'green',
    padding: 5,
    borderRadius: 10,
  },
  logo: {
    width: 80,
    height: 80,
  },
  logoText: {
    fontSize: 24,
    marginTop: 10,
    fontWeight: 'bold',
  },
  boxContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignSelf: 'center',
  },
  formContainer: {
    width: '100%',
  },
  formGroup: {
    marginBottom: 15,
    position: 'relative',
  },
  inputIcon: {
    position: 'absolute',
    left: 10,
    top: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    backgroundColor: 'white',
  },
  inputIconImage: {
    width: 20,
    height: 20,
  },
  inputIconImage1: {
    width: 20,
    height: 23,
  },
  inputIconImage2: {
    width: 20,
    height: 23,
  },
  inputIconImageE: {
    width: 20,
    height: 35,
  },
  input: {
    width: '100%',
    height: 39,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 40,
    backgroundColor: 'white',
  },
  signupButton: {
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
  eyeIconContainer: {
    position: 'absolute',
    right: 10,
    top: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
  },
  eyeIcon: {
    width: 20,
    height: 20,
  },
});

export default Signup;
