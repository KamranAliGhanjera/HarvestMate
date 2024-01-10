import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const Box = ({ children }) => (
  <View style={{ backgroundColor: '#f0f0f0', padding: 16, marginBottom: 20 }}>
    {children}
  </View>
);

const Advantages = () => (
  <Box>
    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
      Advantages :
    </Text>
    <Text>1. Increased Crop Yield</Text>
    <Text>2. Nutrient Balance</Text>
    <Text>3. Quick Nutrient Availability</Text>
    <Text>4. Precision Agriculture</Text>
    <Text>5. Improved Soil Fertility</Text>
    <Text>6. Seasonal Flexibility</Text>
    <Text>7. Reduced Land Use</Text>
    <Text>8. Economic Benefits</Text>
    <Text>9. Global Food Security</Text>
  </Box>
);

const Disadvantages = () => (
  <Box>
    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
      Disadvantages :
    </Text>
    <Text>Overuse or improper use of fertilizers can lead to several negative impacts, including:</Text>
    <Text>1. Environmental Pollution</Text>
    <Text>2. Soil Degradation</Text>
    <Text>3. Health Concerns</Text>
    <Text>4. Biodiversity Loss</Text>
  </Box>
);

const FertilizerUsage = () => {
  const fertilizers = [
    {
        name: 'Nitrogen Fertilizers',
        description:
          'Nitrogen fertilizers provide essential nitrogen to plants, promoting leaf and stem growth. They are especially important for the development of vibrant green foliage.',
      },
      {
        name: 'Phosphorus Fertilizers',
        description:
          'Phosphorus fertilizers are crucial for root development, flower formation, and overall plant energy transfer.',
      },
      {
        name: 'Potassium Fertilizers',
        description:
          'Potassium fertilizers, also known as potash fertilizers, contribute to overall plant health and disease resistance.',
      },
    // Fertilizer data...
  ];

  return (
    <Box>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
       Usage Description :
      </Text>
      {fertilizers.map((fertilizer, index) => (
        <View key={index} style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>{fertilizer.name}</Text>
          <Text>{fertilizer.description}</Text>
        </View>
      ))}
    </Box>
  );
};

const App = () => (
  <ScrollView style={{ flex: 1 }}>
    <View style={{ padding: 16 }}>
      <Advantages />
      <Disadvantages />
      <FertilizerUsage />
    </View>
  </ScrollView>
);

export default App;
