import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ServicesPage = () => {
  const navigation = useNavigation(); // Initialize the navigation object

  const handleTransportationButtonPress = () => {
    navigation.navigate('ServicesPage2'); // Navigate to ServicesPage2 when the button is pressed
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Services</Text>
      <Text style={styles.selectServiceText}>Select Service Type:</Text>
      <TouchableOpacity style={styles.button} onPress={handleTransportationButtonPress}>
        <Text style={styles.buttonText}>Transportation</Text>
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
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  selectServiceText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#108866',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default ServicesPage;
