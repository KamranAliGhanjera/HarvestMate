import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const PaymentScreen = () => {
  const [accountName, setAccountName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handlePayment = () => {
    // Implement payment submission logic here.
    // You can use 'accountName', 'accountNumber', and 'image' for processing.
    console.log('Account Name:', accountName);
    console.log('Account Number:', accountNumber);
    console.log('Image URI:', image);
  };

  return (
    <View style={{ padding: 30 }}>
      <Text style={{ marginBottom: 100, fontSize: 30, }}>Payment</Text>
      
      <View style={styles.inputContainer}>
        <Text>Account Name:</Text>
        <View style={styles.valueContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your account name"
            value={accountName}
            onChangeText={(text) => setAccountName(text)}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text>Account Number:</Text>
        <View style={styles.valueContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your account number"
            value={accountNumber}
            onChangeText={(text) => setAccountNumber(text)}
          />
        </View>
      </View>

      {image && (
        <View style={{ marginBottom: 10 }}>
          <Image source={{ uri: image }} style={{ width: 200, height: 100 }} />
        </View>
      )}

      <TouchableOpacity onPress={pickImage}>
        <View style={{ marginBottom: 20, backgroundColor: 'lightgray', padding: 10 }}>
          <Text>Upload Screenshot</Text>
        </View>
      </TouchableOpacity>

      <Button title="Submit" onPress={handlePayment} />
    </View>
  );
};

const styles = {
  inputContainer: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'white',
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 5,
  },
};

export default PaymentScreen;
