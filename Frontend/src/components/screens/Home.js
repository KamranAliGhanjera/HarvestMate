import React, { useState } from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { deviceHeight, deviceWidth } from './Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import Cards from './Cards';
import { API_KEY } from './Constants'; // Make sure to import your API key

export default function Home(props) {
  const [city, setCity] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const cities = [
    {
      name: 'New Delhi',
      image: require('./images/5c.jpg'),
    },
    {
      name: 'New York',
      image: require('./images/HH.png'),
    },
    {
      name: 'London',
      image: require('./images/london.jpg'),
    },
    {
      name: 'San Francisco',
      image: require('./images/san.jpg'),
    },
    {
      name: 'New Jersey',
      image: require('./images/HH.png'),
    },
  ];

  const handleSearch = () => {
    if (city) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        .then((response) => {
          if (response.ok) {
            // City found, navigate to the Details screen
            props.navigation.navigate('Details', { name: city });
            setErrorMessage(''); // Clear any previous error message
          } else {
            // City not found, display an error message
            setErrorMessage('There is no city of this name');
            setTimeout(() => {
              setErrorMessage(''); // Clear the error message after 5 seconds
            }, 5000); // 5000 milliseconds (5 seconds)
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      setErrorMessage('Please enter a city first');
      setTimeout(() => {
        setErrorMessage(''); // Clear the error message after 5 seconds
      }, 5000); // 5000 milliseconds (5 seconds)
    }
  };

  return (
    <View>
      <ImageBackground
        source={require('./images/Weather.jpg')}
        style={{ height: deviceHeight, width: deviceWidth }}
        imageStyle={{ opacity: 0.6, backgroundColor: 'white' }}
        resizeMode="stretch"
      />
      <View
        style={{
          position: 'absolute',
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}>
        <View style={{ paddingHorizontal: 20, marginTop: 100 }}>
          <Text style={{ fontSize: 40, color: 'white' }}>Weather</Text>
          <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold' }}>
            Search the city by name
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 50,
              borderWidth: 1,
              borderColor: 'white',
              marginTop: 16,
              paddingHorizontal: 10,
            }}>
            <TextInput
              value={city}
              onChangeText={(val) => setCity(val)}
              placeholder="Search City"
              placeholderTextColor="white"
              style={{ paddingHorizontal: 10, color: 'white', fontSize: 16 }}
            />
            <TouchableOpacity onPress={handleSearch}>
              <Icon name="search" size={22} color="white" />
            </TouchableOpacity>
          </View>

          {errorMessage ? (
            <Text style={{ color: 'red', fontSize: 18, marginTop: 10 }}>{errorMessage}</Text>
          ) : null}

          <Text style={{ color: 'white', fontSize: 25, paddingHorizontal: 10, marginTop: 170, marginBottom: 20 }}>
            My Locations
          </Text>
          <FlatList
            horizontal
            data={cities}
            renderItem={({ item }) => (
              <Cards name={item.name} image={item.image} navigation={props.navigation} />
            )}
          />
        </View>
      </View>
    </View>
  );
}
