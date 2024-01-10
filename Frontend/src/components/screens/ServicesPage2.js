import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';


const ServicesPage2 = () => {
  const [pickUpLocation, setPickUpLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleBookNow = async () => {
    if (!pickUpLocation || !dropLocation || !date || !time) {
      setErrorMessage('Please fill all the fields');
      setTimeout(() => {
        setErrorMessage('');
      }, 5000); // Remove the error message after 5 seconds
      return;
    }

    try {
      const response = await fetch('http://192.168.43.112:3000/Transportation-service', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pickUpLocation,
          dropLocation,
          date,
          time,
        }),
      });

      if (response.ok) {
        // Reset input fields after successful submission
        setPickUpLocation('');
        setDropLocation('');
        setDate('');
        setTime('');
        // Optionally show a success message to the user
        alert('Service booked successfully!');
        setErrorMessage('');
      } else {
        // Handle response error (show error message, etc.)
        console.error('Error saving service');
        alert('An error occurred while booking the service.');
      }
    } catch (error) {
      // Handle fetch error (show error message, etc.)
      console.error('Error fetching data:', error);
      alert('An error occurred while communicating with the server.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Services</Text>

      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}

      {/* Pick-Up Location */}
      <Text style={styles.textLabel}>Pick-Up Location:</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Enter pick-up location"
        value={pickUpLocation}
        onChangeText={text => setPickUpLocation(text)}
      />

      {/* Drop Location */}
      <Text style={styles.textLabel}>Drop Location:</Text>
      <TextInput
        style={[styles.inputField, styles.largerInputField]}
        placeholder="Enter drop location"
        value={dropLocation}
        onChangeText={text => setDropLocation(text)}
      />

      {/* Date & Time */}
      <View style={styles.rowContainer}>
        <Text style={styles.dateLabel}>Date:</Text>
        <TextInput
          style={[styles.inputField, styles.dateTimeField]}
          placeholder="Select date"
          value={date}
          onChangeText={text => setDate(text)}
        />
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.timeLabel}>Time:</Text>
        <TextInput
          style={[styles.inputField, styles.dateTimeField]}
          placeholder="Select time"
          value={time}
          onChangeText={text => setTime(text)}
        />
      </View>

      {/* Book Now Button */}
      <TouchableOpacity style={styles.button} onPress={handleBookNow}>
        <Text style={styles.buttonText}>Book Now</Text>
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
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  textLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  inputField: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 15,
  },
  largerInputField: {
    height: 100,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  dateLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  timeLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  dateTimeField: {
    flex: 2,
    height: 50,
  },
  button: {
    backgroundColor: '#108866',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
  },
});

export default ServicesPage2;
