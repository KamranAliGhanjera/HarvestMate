import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const PesticidesApp = () => {
  const crops = [
    'Corn', 'Wheat', 'Rice', 'Soybeans', 'Cotton', 'Potatoes', 'Tomatoes',
    'Apples', 'Grapes', 'Peanuts', 'Coffee', 'Cocoa'
  ];

  const numColumns = 2; // Number of columns you want

  const calculateItemWidth = () => {
    const windowWidth = Dimensions.get('window').width;
    const totalSpacing = 30 * (numColumns + 1); // Adjust spacing as needed
    return (windowWidth - totalSpacing) / numColumns;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Some Common Crops in Which Pesticides are Commonly Used :</Text>
      <View style={styles.cropContainer}>
        {crops.map((crop, index) => (
          <View key={index} style={[styles.cropBox, { width: calculateItemWidth() }]}>
            <Text style={styles.cropText}>{crop}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.advantagesHeading}>Advantages</Text>
      <Text style={styles.advantagesText}>
        - Effective pest control {'\n'}
        - Protecting crops from damage {'\n'}
        - Increased agriculture yields and productivity {'\n'}
        - Prevention of diseases, preserving plant health {'\n'}
        - Cost-effective solution for large-scale farming {'\n'}
        - Supports global food production and security
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cropContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cropBox: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cropText: {
    fontSize: 18,
    lineHeight: 24,
    padding: 10,
    textAlign: 'center',
  },
  advantagesHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  advantagesText: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default PesticidesApp;
