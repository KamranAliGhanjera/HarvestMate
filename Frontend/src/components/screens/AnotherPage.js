import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const AnotherPage = () => {
  const [name, setName] = useState('');
  const [nic, setNIC] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [numberOfPlates, setNumberOfPlates] = useState('');
  const [hoursOrDays, setHoursOrDays] = useState('');
  const [address, setAddress] = useState('');

  const handleApplyButtonPress = () => {
    // Check if any of the input fields are empty
    if (!name || !nic || !phoneNumber || !numberOfPlates || !hoursOrDays || !address) {
      Alert.alert('Error', 'Please fill in all the fields');
      return;
    }

    const formData = {
      name,
      nic,
      phoneNumber,
      numberOfPlates,
      hoursOrDays,
      address,
    };

    fetch('http://192.168.43.112:3000/SolarPanel', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Response from backend:', data);
        alert('Data saved successfully!');
        // Clear the input fields after successful data submission
        setName('');
        setNIC('');
        setPhoneNumber('');
        setNumberOfPlates('');
        setHoursOrDays('');
        setAddress('');
      })
      .catch((error) => {
        console.error('Error saving data:', error);
        alert('Failed to save data. Please try again later.');
      });
  };

  return (
    <View style={styles.container}>
      {/* Name */}
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      {/* N.I.C */}
      <Text style={styles.label}>N.I.C</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your N.I.C"
        value={nic}
        onChangeText={setNIC}
      />

      {/* Phone Number */}
      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      {/* No. Of Plates */}
      <Text style={styles.label}>No. Of Plates</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter the number of plates"
        keyboardType="numeric"
        value={numberOfPlates}
        onChangeText={setNumberOfPlates}
      />

      {/* Enter Hours/Days */}
      <Text style={styles.label}>Enter Hours/Days</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter hours or days"
        value={hoursOrDays}
        onChangeText={setHoursOrDays}
      />

      {/* Address */}
      <Text style={[styles.label, styles.addressLabel]}>Address</Text>
      <TextInput
        style={[styles.input, styles.addressInput]}
        placeholder="Enter your address"
        multiline
        value={address}
        onChangeText={setAddress}
      />

      {/* Apply Button */}
      <TouchableOpacity style={styles.button} onPress={handleApplyButtonPress}>
        <Text style={styles.buttonText}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 15,
  },
  addressLabel: {
    marginTop: 0,
  },
  addressInput: {
    height: 50,
  },
  button: {
    backgroundColor: '#108866',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AnotherPage;
