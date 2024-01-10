import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const Advantages = () => (
  <View style={styles.box}>
    <Text style={styles.title}>Advantages</Text>
    <Text>1. Environmentally Friendly</Text>
    <Text>2. Target-Specific Pest Control</Text>
    <Text>3. Reduced Chemical Use</Text>
    <Text>4. Sustainable Pest Management</Text>
    <Text>5. Limited Harm to Non-Target Organisms</Text>
    {/* Add more advantages */}
  </View>
);

const Disadvantages = () => (
  <View style={styles.box}>
    <Text style={styles.title}>Disadvantages</Text>
    <Text>1. Slow Action</Text>
    <Text>2. Weather and Environmental Factors</Text>
    <Text>3. Limited Availability</Text>
    <Text>4. Risk of Establishing New Pests</Text>
    <Text>5. Compatibility with Other Pest Management Strategies</Text>
    {/* Add more disadvantages */}
  </View>
);

const BiologicalControlUsage = () => (
  <View style={styles.box}>
    <Text style={styles.title}>Usage Description</Text>
    <Text>
      Biological control agents, also known as natural enemies, are living organisms that are used to control
      pest populations. These agents include predators, parasitoids, and pathogens that attack and reduce pest
      numbers. Biological control is an eco-friendly approach that emphasizes the use of natural processes to
      manage pests. Proper selection, release, and management of biological control agents are crucial to
      achieve successful pest suppression. Integrated pest management strategies often incorporate biological
      control along with other methods to achieve effective and sustainable pest management.
    </Text>
  </View>
);

const App = () => (
  <ScrollView style={styles.container}>
    <Advantages />
    <Disadvantages />
    <BiologicalControlUsage />
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
