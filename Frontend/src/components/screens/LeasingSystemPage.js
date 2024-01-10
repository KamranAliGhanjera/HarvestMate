import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const LeasingSystemPage = ({ navigation }) => {
  const handleHoursButtonClick = () => {
    navigation.navigate('AnotherPage');
  };

  const handleDaysButtonClick = () => {
    navigation.navigate('AnotherPage');
  };

  return (
    <View style={styles.container}>
      {/* Top Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require('./images/LS.jpg')} // Replace with the actual path to your image
          style={styles.image}
        />
      </View>

      {/* Leasing System Text */}
      <View style={styles.textContainer}>
        <Text style={styles.leasingText}>Leasing System</Text>
      </View>

      {/* Hours Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleHoursButtonClick}>
          <Text style={styles.buttonText}>Hours</Text>
        </TouchableOpacity>
      </View>

      {/* Days Button */}
      <View style={[styles.buttonContainer, { marginTop: 35 }]}>
        <TouchableOpacity style={styles.button} onPress={handleDaysButtonClick}>
          <Text style={styles.buttonText}>Days</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Set the background color 
  },
  imageContainer: {
    height: '40%', // 40% of the total height
    width: '100%',
    marginTop: -215,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
  },
  textContainer: {
    marginTop: 20, // Adjust the spacing between the image and the text
  },
  leasingText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%',
  },
  button: {
    backgroundColor: '#108866', // Change the background color to blue
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LeasingSystemPage;
