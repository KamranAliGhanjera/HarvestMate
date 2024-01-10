import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const crops = [
  'Rice',
  'Cotton',
  'Sugarcane',
  'Sorghum (Jowar)',
  'Pearl Millet (Bajra)',
  'Mung beans (Moong)',
  'Red Gram (Pigeon Pea)',
  'Green Gram (Mung Bean)',
  'Black Gram (Urad Dal)',
  'Sesame',
  'Brinjal (Eggplant)',
  'Jute',
];

const PageComponent = () => {
  const divideCrops = (cropsArray, chunkSize) => {
    const dividedCrops = [];
    for (let i = 0; i < cropsArray.length; i += chunkSize) {
      dividedCrops.push(cropsArray.slice(i, i + chunkSize));
    }
    return dividedCrops;
  };

  const dividedCrops = divideCrops(crops, 3);

  return (
    <View style={styles.container}>
      {/* Enclosed introductory text in a box */}
      <View style={styles.introBox}>
        <Text style={styles.heading}>Kharif Season</Text>
        <Text style={styles.description}>
          This is the summer season and begins around April/May and lasts until September/October. The Kharif season is characterized by high temperatures and monsoon rains, making it suitable for the cultivation of crops that require a lot of water. Some major Kharif crops include:
        </Text>
      </View>

      {/* Divide crops into four lines */}
      <View style={styles.cropsContainer}>
        {dividedCrops.map((line, lineIndex) => (
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
    width: '30%',
    height: 60,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cropText: {
    fontSize: 12,
    textAlign: 'center',
  },
});

export default PageComponent;
