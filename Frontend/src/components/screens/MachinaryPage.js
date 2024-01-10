import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation from React Navigation

const machineryData = [
  { name: 'Cell Operated Sprayer', price: '$500', image: require('./images/COS.png') },
  { name: 'Sprayer', price: '$300', image: require('./images/S.png') },
  { name: 'Generator', price: '$800', image: require('./images/G.png') },
  { name: 'Rotatery Tiller', price: '$700', image: require('./images/RT.png') },
  { name: 'Backend Blade', price: '$400', image: require('./images/BB.png') },
  { name: 'Front Blade', price: '$400', image: require('./images/FB.png') },
  { name: 'Disk Harrow', price: '$600', image: require('./images/DH.png') },
  { name: 'Plow', price: '$250', image: require('./images/Plow.png') },
  { name: 'Plough', price: '$250', image: require('./images/plough.png') },
  // Add more machinery data here
];

const MachinaryPage = () => {
  const navigation = useNavigation();

  const [searchText, setSearchText] = useState('');
  const filteredMachinery = machineryData.filter((machinery) =>
    machinery.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search Machineries..."
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />

      <ScrollView>
        {filteredMachinery.length === 0 ? ( // Check if there are no filtered machineries
          <Text style={styles.notFoundText}>Equipment not Available</Text>
        ) : (
          <View style={styles.machineryContainer}>
            {filteredMachinery.map((machinery, index) => (
              <TouchableOpacity
                style={styles.machineryIconContainer}
                key={index}
                onPress={() => {
                  console.log(`Pressed: ${machinery.name}`);
                  navigation.navigate('Machinary2');
                }}
              >
                <View style={styles.machineryBox}>
                  <Image source={machinery.image} style={styles.machineryIcon} />
                  <Text style={styles.machineryName}>{machinery.name}</Text>
                  <Text style={styles.machineryPrice}>{machinery.price}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  machineryContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  machineryIconContainer: {
    alignItems: 'center',
    width: '30%',
    marginBottom: 20,
    marginRight: 5,
    marginLeft: 5,
  },
  machineryBox: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    height: 150,
  },
  machineryIcon: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  machineryName: {
    marginTop: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  machineryPrice: {
    marginTop: 5,
    textAlign: 'center',
    color: '#108866',
    fontWeight: 'bold',
  },
  notFoundText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default MachinaryPage;
