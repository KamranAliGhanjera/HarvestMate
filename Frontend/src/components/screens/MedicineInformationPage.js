import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MedicineInformationPage = () => {
  const navigation = useNavigation(); // Get the navigation object

  const navigateToPesticides = () => {
    navigation.navigate('Pesticides'); // 
  };
  const navigateToFertilizers = () => {
    navigation.navigate('Fertilizers'); 
  };
  const navigateToFungicides = () => {
    navigation.navigate('Fungicides'); 
  };
  const navigateToInsecticides = () => {
    navigation.navigate('Insecticides'); 
  };
  const navigateToHerbicides = () => {
    navigation.navigate('Herbicides'); 
  };
  const navigateToGrowth = () => {
    navigation.navigate('Growth'); 
  };
  const navigateToBiological = () => {
    navigation.navigate('Biological'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Crops Treatment Resources</Text>
      <TouchableOpacity style={styles.medicineButton} onPress={navigateToPesticides}>
        <Text style={styles.medicineButtonText}>Pesticides</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.medicineButton} onPress={navigateToFertilizers}>
        <Text style={styles.medicineButtonText}>Fertilizers</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.medicineButton} onPress={navigateToFungicides}>
        <Text style={styles.medicineButtonText}>Fungicides</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.medicineButton} onPress={navigateToInsecticides}>
        <Text style={styles.medicineButtonText}>Insecticides</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.medicineButton} onPress={navigateToHerbicides}>
        <Text style={styles.medicineButtonText}>Herbicides</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.medicineButton} onPress={navigateToGrowth}>
        <Text style={styles.medicineButtonText}>Growth Regulator</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.medicineButton} onPress={navigateToBiological}>
        <Text style={styles.medicineButtonText}>Biological Control Agent</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    
  },
  medicineButton: {
    marginVertical: 5,
    backgroundColor: '#108866',
    padding: 10,
    borderRadius: 5,
  },
  medicineButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'white',
  },
});

export default MedicineInformationPage;
