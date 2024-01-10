import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const MyForm = () => {
  const [name, setName] = useState('');
  const [equipmentName, setEquipmentName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [timeDuration, setTimeDuration] = useState('');
  const [accountName, setAccountName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSubmit = () => {
    if (
      !name ||
      !equipmentName ||
      !address ||
      !phoneNumber ||
      !timeDuration ||
      !accountName ||
      !accountNumber
    ) {
      setErrorMessage('Please fill all required fields');
      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
    } else {
      sendFormDataToBackend();
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      // Access the selected image from the assets array
      const selectedAsset = result.assets[0];
      setSelectedImage(selectedAsset.uri);
    }
  };
  const sendFormDataToBackend = async () => {
    try {
      const apiUrl = 'http://192.168.43.112:3000/book-equipment';

      const requestBody = {
        name,
        equipmentName,
        address,
        phoneNumber,
        timeDuration,
        accountName,
        accountNumber,
        screenshot: selectedImage, // Include the selected image
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      setSuccessMessage('Equipment booked successfully');
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
      clearForm();
    } catch (error) {
      console.error('API Error:', error);
    }
  };

  const clearForm = () => {
    setName('');
    setEquipmentName('');
    setAddress('');
    setPhoneNumber('');
    setTimeDuration('');
    setAccountName('');
    setAccountNumber('');
    setSelectedImage(null);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      enabled
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            onChangeText={(text) => setName(text)}
            value={name}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Equipment Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Equipment name"
            onChangeText={(text) => setEquipmentName(text)}
            value={equipmentName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your address"
            onChangeText={(text) => setAddress(text)}
            value={address}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            onChangeText={(text) => setPhoneNumber(text)}
            value={phoneNumber}
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Time Duration</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter time duration"
            onChangeText={(text) => setTimeDuration(text)}
            value={timeDuration}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Account Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your account name"
            onChangeText={(text) => setAccountName(text)}
            value={accountName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Account Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your account number"
            onChangeText={(text) => setAccountNumber(text)}
            value={accountNumber}
            keyboardType="numeric"
          />
        </View>

        {selectedImage && (
          <View style={styles.imageContainer}>
            <Text style={styles.label}>Selected Image:</Text>
            <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
          </View>
        )}

        <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
          <Text style={styles.uploadButtonText}>Payment Screenshot</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bookButton} onPress={handleSubmit}>
          <Text style={styles.bookButtonText}>Book Equipment</Text>
        </TouchableOpacity>


        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
        {successMessage ? <Text style={styles.successMessage}>{successMessage}</Text> : null}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
  },
  imageContainer: {
    alignItems: 'center',
  },
  selectedImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 10,
  },
  uploadButton: {
    backgroundColor: '#108866',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 20,
  },
  uploadButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  errorMessage: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  successMessage: {
    color: 'green',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  bookButton: {
    backgroundColor: 'red', // Change the background color of the button
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 10,
  },
  bookButton: {
    backgroundColor: '#108866', // Change the background color of the button
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center', // Center the button horizontally
  },
  bookButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white', // Text color of the button
  },
});

export default MyForm;
