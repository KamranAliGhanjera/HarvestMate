import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const Advantages = () => (
  <View style={styles.box}>
    <Text style={styles.title}>Advantages</Text>
    <Text>1. Disease Prevention</Text>
    <Text>2. Increased Crop Yield</Text>
    <Text>3. Environmental Stewardship</Text>
    <Text>4. Economic Benefits</Text>
    <Text>5. Improved Food Security</Text>
    {/* Add more advantages */}
  </View>
);

const Disadvantages = () => (
  <View style={styles.box}>
    <Text style={styles.title}>Disadvantages</Text>
    <Text>1. Development of Resistance</Text>
    <Text>2. Environmental Impact</Text>
    <Text>3. Non-Selective Action</Text>
    <Text>4. Health Concerns</Text>
    <Text>5. Residue on Produce</Text>
    {/* Add more disadvantages */}
  </View>
);

const FungicideUsage = () => (
  <View style={styles.box}>
    <Text style={styles.title}>Usage Description</Text>
    <Text>
      Fungicides are chemical substances used to control and prevent fungal diseases in plants.
      They are applied to plant foliage or soil to inhibit the growth and reproduction of harmful fungi.
      Proper application methods and timing are essential to achieve effective disease management.
      It's important to follow recommended dosage and safety guidelines to minimize risks to the environment,
      human health, and non-target organisms.
    </Text>
  </View>
);

const App = () => (
  <ScrollView style={styles.container}>
    <Advantages />
    <Disadvantages />
    <FungicideUsage />
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
