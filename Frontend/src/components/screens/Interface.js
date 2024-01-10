import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  BackHandler,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

const Interface = () => {
  

  const route = useRoute();
  const [email, setEmail] = useState(''); // User's email
  const [userName, setUserName] = useState(''); // User's name from MongoDB Atlas

  useEffect(() => {
    if (route.params && route.params.userName) {
      setUserName(route.params.userName);
    }
  }, [route.params]);


  // Function to get the user's name from the database
  const getUserNameFromDatabase = async (userEmail) => {
    console.log('Fetching user data for email:', userEmail);
    try {
      const response = await fetch(`http://192.168.1.101:3000/getUserName?email=${userEmail}`);
      // Log the response status here
      console.log('Response status:', response.status);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Response data:', data); // Log the entire response for debugging
      if (data.name) {
        setUserName(data.name); // Set the obtained username
        console.log('Received user name:', data.name);
      } else {
        console.log('User name not found in response data.');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      // Log the response content when an error occurs
      if (error instanceof Error) {
        console.error('Error message:', error.message);
      }
    }
  };
  const handleLogout = () => {
    navigation.navigate('Login');
  };

  // Function to handle user login
  const handleUserLogin = (userEmail) => {
    console.log('User logged in with email:', userEmail); // Log the email
    setEmail(userEmail); // Set the user's email
    getUserNameFromDatabase(userEmail); // Fetch the user's name from MongoDB Atlas
    // You can also navigate to other screens or perform other actions after login.
  };


  useEffect(() => {
    if (email) {
      getUserNameFromDatabase(email);
    }
  }, [email, userName]);

  console.log('Updated userName:', userName); // Add this line


  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [filteredFeatures, setFilteredFeatures] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSolarPanelPress = () => {
    navigation.navigate('LeasingSystemPage');
  };

  const handleWeatherPress = () => {
    navigation.navigate('Home');
  };

  const handleLoanButtonPress = () => {
    navigation.navigate('LoanApplicationForm');
  };

  const handleMedicineButtonPress = () => {
    navigation.navigate('MedicineInformationPage');
  };

  const handleServicesButtonPress = () => {
    navigation.navigate('ServicesPage');
  };

  const handleQuestionPress = () => {
    navigation.navigate('Question');
  };

  const handleMachineryButtonPress = () => {
    navigation.navigate('MachinaryPage');
  };

  const handleCropsInfo = () => {
    navigation.navigate('CropsInformationPage');
  };

  const handleMarketPricePress = () => {
    navigation.navigate('MarketPricePage');
  };

  const customSearchIcon = require('./images/love.png');

  const features = [
    {
      name: 'Machinery',
      image: require('./images/tkk2.png'),
      onPress: handleMachineryButtonPress,
    },
    {
      name: 'Weather',
      image: require('./images/68.png'),
      onPress: handleWeatherPress,
    },
    {
      name: 'Services',
      image: require('./images/trq.jpg'),
      onPress: handleServicesButtonPress,
      iconSize: 100,
    },
    {
      name: 'Solar Panel',
      image: require('./images/ytyt.png'),
      onPress: handleSolarPanelPress,
    },
    {
      name: 'Medicine Info',
      image: require('./images/Churail2.jpg'),
      onPress: handleMedicineButtonPress,
    },
    {
      name: 'Crops Info',
      image: require('./images/qwe.png'),
      onPress: handleCropsInfo,
    },
    {
      name: 'Loan',
      image: require('./images/ll.jpg'),
      onPress: handleLoanButtonPress,
    },
    {
      name: 'Crops Prices',
      image: require('./images/re1.png'),
      onPress: handleMarketPricePress,
    },
    {
      name: 'Help',
      image: require('./images/kk.png'),
      onPress: handleQuestionPress,
    },
  ];

  function handleSearch(text) {
    const filtered = features.filter((feature) =>
      feature.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredFeatures(filtered);
  }

  const imageSize = { width: 1000, height: 400 };
  const targetSize = 90;
  const scaleFactor =
    Math.min(targetSize / imageSize.width, targetSize / imageSize.height);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      setShowConfirmation(true);
      return true;
    });

    return () => backHandler.remove();
  }, []);

  const handleConfirmation = (shouldNavigateBack) => {
    setShowConfirmation(false);

    if (shouldNavigateBack) {
      BackHandler.exitApp();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBackground}>
        <View style={styles.userInfoContainer}>
          <Text style={styles.usernameText}>{userName}</Text>
          {console.log('Rendered userName:', userName)}
        </View>

         {/* Add the Logout button here */}
      <TouchableOpacity
        style={styles.logoutButtonContainer}
        onPress={handleLogout}
      >
        <Text style={styles.logoutButton}>Logout</Text>
      </TouchableOpacity>


        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search..."
            style={styles.searchInput}
            onChangeText={(text) => {
              setSearchText(text);
              handleSearch(text);
            }}
            value={searchText}
          />
          <Image source={customSearchIcon} style={styles.searchIcon} />
        </View>
      </View>
      <ScrollView>
        <View style={styles.featureContainer}>
          {searchText === ''
            ? chunkArray(features, 2).map((row, rowIndex) => (
              <View key={rowIndex} style={styles.featureRow}>
                {row.map((feature, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.featureButton}
                    onPress={feature.onPress}
                  >
                    <View style={styles.circle}>
                      {feature.name === 'Services' ? (
                        <Image
                          source={feature.image}
                          style={[
                            styles.buttonIcon,
                            {
                              width: imageSize.width * scaleFactor,
                              height: imageSize.height * scaleFactor,
                            },
                          ]}
                        />
                      ) : (
                        <Image source={feature.image} style={styles.buttonIcon} />
                      )}
                    </View>
                    <View style={styles.buttonTextContainer}>
                      <Text style={styles.buttonText}>{feature.name}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            ))
            : filteredFeatures.length > 0
              ? filteredFeatures.map((feature, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.featureButton}
                  onPress={feature.onPress}
                >
                  <View style={styles.circle}>
                    {feature.name === 'Services' ? (
                      <Image
                        source={feature.image}
                        style={[
                          styles.buttonIcon,
                          {
                            width: imageSize.width * scaleFactor,
                            height: imageSize.height * scaleFactor,
                          },
                        ]}
                      />
                    ) : (
                      <Image source={feature.image} style={styles.buttonIcon} />
                    )}
                  </View>
                  <View style={styles.buttonTextContainer}>
                    <Text style={styles.buttonText}>{feature.name}</Text>
                  </View>
                </TouchableOpacity>
              ))
              : (
                <View style={styles.noResultContainer}>
                  <Text style={styles.noResultText}>Not Found</Text>
                </View>
              )}
        </View>
      </ScrollView>

      {showConfirmation && (
        <View style={styles.confirmationContainer}>
          <Text>Are you sure you want to go back?</Text>
          <TouchableOpacity onPress={() => handleConfirmation(true)}>
            <Text>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleConfirmation(false)}>
            <Text>No</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#108866',
  },
  topBackground: {
    height: '20%',
    backgroundColor: '#108866',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },

  usernameText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    position: 'absolute', // Use absolute positioning
    top: 20, // Adjust the top position as needed
    left: -340,
  },
  userInfoContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  searchContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    top: 15,
    left: -20,
    width: '100%',
  },
  searchInput: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: 'black',
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  featureContainer: {
    paddingHorizontal: 20,
    backgroundColor: 'white',
    marginTop: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
  },
  featureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 10,
  },
  featureButton: {
    flex: 1,
    alignItems: 'center',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 80,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  buttonIcon: {
    width: 60,
    height: 60,
  },
  buttonTextContainer: {
    marginTop: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logoutButtonContainer: {
    position: 'absolute',
    top: 10,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.4)', // Transparent white background
    borderRadius: 10, // Rounded corners
    padding: 10, // Add padding to the container
  },
  logoutButton: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
  },
  confirmationContainer: {
    // Define your styles for the confirmation container here
  },
});

function chunkArray(array, chunkSize) {
  const chunked = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunked.push(array.slice(i, i + chunkSize));
  }
  return chunked;
}

export default Interface;
