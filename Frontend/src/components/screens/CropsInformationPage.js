import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CropsInformationPage = () => {
  const navigation = useNavigation(); // Get the navigation object

  const navigateToKharif = () => {
    navigation.navigate('Kharif'); // Navigate to the Kharif page
  };
  const navigateToRabi = () => {
    navigation.navigate('Rabi'); // Navigate to the Kharif page
  };
  const navigateToZaid = () => {
    navigation.navigate('Zaid'); // Navigate to the Kharif page
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Crops Information</Text>

      {/* Select a Season Text */}
      <Text style={styles.selectSeasonText}>Select a Season:</Text>

      {/* Three Season Buttons */}
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={navigateToKharif}>
          <Text style={styles.buttonText}>Kharif Season (Summer)</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}onPress={navigateToRabi}>
          <Text style={styles.buttonText}>Rabi Season (Winter)</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}onPress={navigateToZaid}>
          <Text style={styles.buttonText}>Zaid Season (Spring)</Text>
        </TouchableOpacity>
      </View>
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
  selectSeasonText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'column', // Change to 'column' to display buttons on separate lines
    marginBottom: 10, // Add space between button lines
  },
  button: {
    backgroundColor: '#108866',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default CropsInformationPage;
