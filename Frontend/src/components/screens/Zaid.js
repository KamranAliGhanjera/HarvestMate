import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const crops = [
  'Cucumber',
  'Watermelon',
  'Muskmelon',
  'Bitter Gourd',
  'Bottle Gourd',
  'Pumpkin',
  'Okra (Ladyfinger)',
  'Green Chillies',
  'Tomato',
  'Sweet Potato',
  'Maize (Corn)',
  'Cowpea',
  'Moong Bean',
  'Soybean',
  'Groundnut (Peanut)',
];

const PageComponent = () => {
  // Divide crops into 5 lines
  const lines = [];
  for (let i = 0; i < 5; i++) {
    lines.push(crops.slice(i * 3, i * 3 + 3));
  }

  return (
    <View style={styles.container}>
      {/* Enclosed introductory text in a box */}
      <View style={styles.introBox}>
        <Text style={styles.heading}>Zaid Season</Text>
        <Text style={styles.description}>
          This is a short season between the Rabi and Kharif seasons, typically from March to June. During this season, some crops are grown that require a warmer climate and moderate water supply. Some major Zaid crops include:
        </Text>
      </View>

      {/* Divide crops into 5 lines */}
      <View style={styles.cropsContainer}>
        {lines.map((line, lineIndex) => (
          <View style={styles.cropLine} key={lineIndex}>
            {line.map((crop, index) => (
              <View style={styles.cropBox} key={index}>
                <Text style={styles.cropText}>{crop}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  introBox: {
    backgroundColor: 'lightblue',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
  cropsContainer: {
    flexDirection: 'column',
  },
  cropLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  cropBox: {
    width: '30%', // Set a fixed width for each crop container
    height: 60, // Set a fixed height for each crop container
    padding: 10,
    margin: 5,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    justifyContent: 'center', // Center the crop name vertically
    alignItems: 'center', // Center the crop name horizontally
  },
  cropText: {
    fontSize: 12,
    textAlign: 'center',
  },
});

export default PageComponent;
