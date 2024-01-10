import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const crops = [
  "Wheat",
  "Barley",
  "Lentils",
  "Chickpeas",
  "Peas",
  "Mustard",
  "Canola",
  "Oats",
  "Safflower",
  "Potatoes",
  "Spinach",
  "Carrots",
  "Cauliflower",
  "Radishes",
  "Turnips",
  "Beets",
  "Onions",
  "Garlic",
  "Cabbages"
];

const PageComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Rabi Season</Text>
      <Text style={styles.description}>
      This is the winter season and starts around October/November and lasts until March/April. The Rabi season is characterized by cooler temperatures and less rainfall. Crops grown during this season are usually more cold-tolerant and do not require as much water as those in the Kharif season.Some major Rabi crops include:
      </Text>

      <View style={styles.cropsContainer}>
        {crops.map((crop, index) => (
          <View style={styles.cropItem} key={index}>
            <Text>{crop}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
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
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cropItem: {
    width: 100, // Set a fixed width for each crop container
    height: 50, // Set a fixed height for each crop container
    padding: 10,
    margin: 5,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    justifyContent: 'center', // Center the crop name vertically
    alignItems: 'center', // Center the crop name horizontally
  },
});

export default PageComponent;
