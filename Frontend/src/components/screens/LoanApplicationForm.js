import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoanApplicationForm = () => {
  const navigation = useNavigation();

  const [desiredLoanAmount, setDesiredLoanAmount] = useState('');
  const [annualIncome, setAnnualIncome] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dayOfBirth, setDayOfBirth] = useState('');
  const [monthOfBirth, setMonthOfBirth] = useState('');
  const [yearOfBirth, setYearOfBirth] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('Single');
  const [nicNumber, setNicNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [address, setAddress] = useState('');
  const [residencyDuration, setResidencyDuration] = useState('');

  const handleApply = () => {
    // Check if all fields are filled
    if (
      !desiredLoanAmount ||
      !annualIncome ||
      !firstName ||
      !lastName ||
      !dayOfBirth ||
      !monthOfBirth ||
      !yearOfBirth ||
      !nicNumber ||
      !phoneNumber ||
      !email ||
      !postalCode ||
      !address ||
      !residencyDuration
    ) {
      // Show an error message to the user
      alert('Please fill all fields before submitting.');
      return;
    }

    // Create a request body object with the form data
    const requestBody = {
      desiredLoanAmount,
      annualIncome,
      firstName,
      lastName,
      dayOfBirth,
      monthOfBirth,
      yearOfBirth,
      maritalStatus,
      nicNumber,
      phoneNumber,
      email,
      postalCode,
      address,
      residencyDuration,
    };

    // Make a POST request to your server with the form data
    fetch('http://192.168.43.112:3000/LoanApplicationForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the server
        if (data.message === 'Loan Application Form data saved successfully') {
          // Show a success message to the user
          alert('Loan application submitted successfully.');
          // You can navigate to a different screen or update UI as needed
          navigation.navigate('ApplicationSuccessPage');
        } else {
          // Show an error message to the user
          alert('Error submitting loan application. Please try again.');
        }
      })
      .catch(error => {
        // Handle any errors that occur during the fetch
        console.error('Error:', error);
        // Show an error message to the user
        alert('Error submitting loan application. Please try again.');
      });
  };
  
  
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollViewContent}>
      <Text style={styles.header}>Loan Application Form</Text>

      <Text style={styles.label}>Desired Loan Amount Rs.</Text>
      <TextInput
        style={styles.input}
        value={desiredLoanAmount}
        onChangeText={setDesiredLoanAmount}
      />

      <Text style={styles.label}>Annual Income</Text>
      <TextInput
        style={styles.input}
        value={annualIncome}
        onChangeText={setAnnualIncome}
      />

      <Text style={[styles.label, styles.middleText]}>Contact Information</Text>

      <Text style={styles.label}>Name</Text>
      <View style={styles.nameContainer}>
        <TextInput
          style={[styles.input, styles.nameInput]}
          value={firstName}
          onChangeText={setFirstName}
          placeholder="First Name"
        />
        <TextInput
          style={[styles.input, styles.nameInput]}
          value={lastName}
          onChangeText={setLastName}
          placeholder="Last Name"
        />
      </View>

      <Text style={styles.label}>Date of Birth</Text>
      <View style={styles.dobContainer}>
        <TextInput
          style={[styles.input, styles.dobInput]}
          value={dayOfBirth}
          onChangeText={setDayOfBirth}
          placeholder="Day"
        />
        <TextInput
          style={[styles.input, styles.dobInput]}
          value={monthOfBirth}
          onChangeText={setMonthOfBirth}
          placeholder="Month"
        />
        <TextInput
          style={[styles.input, styles.dobInput]}
          value={yearOfBirth}
          onChangeText={setYearOfBirth}
          placeholder="Year"
        />
      </View>

      <Text style={styles.label}>Marital Status:</Text>
      <View style={styles.maritalStatusContainer}>
        <TouchableOpacity
          style={[
            styles.maritalStatusOption,
            maritalStatus === 'Single' && styles.selectedOption,
          ]}
          onPress={() => setMaritalStatus('Single')}
        >
          <Text>Single</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.maritalStatusOption,
            maritalStatus === 'Married' && styles.selectedOption,
          ]}
          onPress={() => setMaritalStatus('Married')}
        >
          <Text>Married</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>N.I.C. Number</Text>
      <TextInput
        style={styles.input}
        value={nicNumber}
        onChangeText={setNicNumber}
      />

      <Text style={styles.label}>Phone</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Postal/Zip Code</Text>
      <TextInput
        style={styles.input}
        value={postalCode}
        onChangeText={setPostalCode}
      />

      <Text style={styles.label}>Address</Text>
      <TextInput
        style={[styles.input, styles.addressInput]}
        value={address}
        onChangeText={setAddress}
        multiline
      />

      <Text style={styles.label}>How long have you lived in your given address?</Text>
      <View style={styles.residencyDurationContainer}>
        <TouchableOpacity
          style={[
            styles.residencyDurationOption,
            residencyDuration === '0-1 Years' && styles.selectedOption,
          ]}
          onPress={() => setResidencyDuration('0-1 Years')}
        >
          <Text>0-1 Years</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.residencyDurationOption,
            residencyDuration === '1-2 Years' && styles.selectedOption,
          ]}
          onPress={() => setResidencyDuration('1-2 Years')}
        >
          <Text>1-2 Years</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.residencyDurationOption,
            residencyDuration === '3-4 Years' && styles.selectedOption,
          ]}
          onPress={() => setResidencyDuration('3-4 Years')}
        >
          <Text>3-4 Years</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.residencyDurationOption,
            residencyDuration === '5+ Years' && styles.selectedOption,
          ]}
          onPress={() => setResidencyDuration('5+ Years')}
        >
          <Text>5+ Years</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
        <Text style={styles.applyButtonText}>Apply</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'White',
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 40, // Adjust this value to give more space at the bottom
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  middleText: {
    textAlign: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  nameInput: {
    flex: 1,
  },
  dobContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  dobInput: {
    flex: 1,
  },
  maritalStatusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  maritalStatusOption: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    flex: 1,
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#ccc',
    borderColor: '#108866',
    color: 'white',
  },
  addressInput: {
    height: 100,
  },
  residencyDurationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  residencyDurationOption: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    flex: 1,
    alignItems: 'center',
  },
  applyButton: {
    backgroundColor: '#108866',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  applyButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LoanApplicationForm;
