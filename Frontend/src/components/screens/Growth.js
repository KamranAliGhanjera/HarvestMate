import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const Advantages = () => (
  <View style={styles.box}>
    <Text style={styles.title}>Advantages</Text>
    <Text>1. Controlled Plant Growth</Text>
    <Text>2. Enhanced Crop Yield</Text>
    <Text>3. Improved Plant Quality</Text>
    <Text>4. Reduced Lodging</Text>
    <Text>5. Extended Shelf Life</Text>
    {/* Add more advantages */}
  </View>
);

const Disadvantages = () => (
  <View style={styles.box}>
    <Text style={styles.title}>Disadvantages</Text>
    <Text>1. Non-Target Effects</Text>
    <Text>2. Environmental Impact</Text>
    <Text>3. Regulatory Concerns</Text>
    <Text>4. Development of Resistance</Text>
    <Text>5. Health and Safety Risks</Text>
    {/* Add more disadvantages */}
  </View>
);

const GrowthRegulatorUsage = () => (
  <View style={styles.box}>
    <Text style={styles.title}>Usage Description</Text>
    <Text>
      Growth regulators, also known as plant growth regulators or plant hormones, are chemical substances that
      influence the growth and development of plants. They can promote or inhibit various physiological processes,
      such as cell elongation, flowering, and fruiting. Growth regulators are used to achieve specific goals in
      agriculture, horticulture, and landscaping. Proper application methods and timing are crucial to achieve
      desired outcomes and avoid unintended effects. Integrated plant management strategies often incorporate
      growth regulators along with other cultural practices to achieve optimal plant growth and development.
    </Text>
  </View>
);

const App = () => (
  <ScrollView style={styles.container}>
    <Advantages />
    <Disadvantages />
    <GrowthRegulatorUsage />
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
