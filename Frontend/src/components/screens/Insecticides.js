import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const Advantages = () => (
  <View style={styles.box}>
    <Text style={styles.title}>Advantages</Text>
    <Text>1. Effective Pest Control</Text>
    <Text>2. Increased Crop Yield</Text>
    <Text>3. Disease Prevention</Text>
    <Text>4. Reduced Economic Losses</Text>
    <Text>5. Improved Food Security</Text>
    {/* Add more advantages */}
  </View>
);

const Disadvantages = () => (
  <View style={styles.box}>
    <Text style={styles.title}>Disadvantages</Text>
    <Text>1. Development of Resistance</Text>
    <Text>2. Non-Target Species Impact</Text>
    <Text>3. Environmental Pollution</Text>
    <Text>4. Health Risks</Text>
    <Text>5. Disruption of Ecosystems</Text>
    {/* Add more disadvantages */}
  </View>
);

const InsecticideUsage = () => (
  <View style={styles.box}>
    <Text style={styles.title}>Usage Description</Text>
    <Text>
      Insecticides are chemical substances used to control and eliminate harmful insects that can damage crops
      and transmit diseases. They are applied through various methods such as spraying, dusting, or seed treatment.
      Proper application techniques, timing, and dosage are crucial to achieve effective pest control while minimizing
      negative impacts on the environment and human health. Integrated pest management strategies often combine the use
      of insecticides with other methods to achieve sustainable pest control.
    </Text>
  </View>
);

const App = () => (
  <ScrollView style={styles.container}>
    <Advantages />
    <Disadvantages />
    <InsecticideUsage />
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
