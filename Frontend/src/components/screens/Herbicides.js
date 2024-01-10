import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const Advantages = () => (
  <View style={styles.box}>
    <Text style={styles.title}>Advantages</Text>
    <Text>1. Effective Weed Control</Text>
    <Text>2. Reduced Competition for Resources</Text>
    <Text>3. Increased Crop Yield</Text>
    <Text>4. Cost Savings</Text>
    <Text>5. Soil Conservation</Text>
    {/* Add more advantages */}
  </View>
);

const Disadvantages = () => (
  <View style={styles.box}>
    <Text style={styles.title}>Disadvantages</Text>
    <Text>1. Environmental Impact</Text>
    <Text>2. Non-Target Plant Damage</Text>
    <Text>3. Development of Resistant Weeds</Text>
    <Text>4. Health Concerns</Text>
    <Text>5. Soil and Water Contamination</Text>
    {/* Add more disadvantages */}
  </View>
);

const HerbicideUsage = () => (
  <View style={styles.box}>
    <Text style={styles.title}>Usage Description</Text>
    <Text>
      Herbicides are chemical substances designed to control unwanted plants, commonly known as weeds.
      They are applied to eliminate or suppress weeds, reducing competition for water, nutrients, and sunlight
      that crops need for healthy growth. Herbicides can be applied through various methods, such as spraying,
      for effective weed management. Careful application and adherence to safety guidelines are essential to
      prevent negative impacts on the environment, non-target plants, and human health. Integrated weed management
      strategies often combine herbicide use with other techniques to achieve sustainable and effective weed control.
    </Text>
  </View>
);

const App = () => (
  <ScrollView style={styles.container}>
    <Advantages />
    <Disadvantages />
    <HerbicideUsage />
  </ScrollView>
);

const styles = {
  container: {
    flex: 1,
    padding: 16,
  },
  box: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
};

export default App;
