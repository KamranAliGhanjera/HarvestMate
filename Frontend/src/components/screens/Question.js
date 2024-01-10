import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Button, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const Question = () => {
  const [query, setQuery] = useState('');
  const [imageUri, setImageUri] = useState(null);

  const handleSendButtonPress = async () => {
    if (query.trim() === '') {
      alert('Please enter your query.');
      return;
    }

    const formData = new FormData();
    formData.append('question', query);

    if (imageUri) {
      const uri = imageUri;
      const uriParts = uri.split('.');
      const fileType = uriParts[uriParts.length - 1];

      formData.append('image', {
        uri,
        name: `image.${fileType}`,
        type: `image/${fileType}`,
      });
    }

    try {
      const response = await fetch('http://192.168.1.101:3000/saveQuestion', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const data = await response.json();

      console.log('Response from backend:', data);
      alert('Data saved successfully!');
      setQuery('');
      setImageUri(null);
    } catch (error) {
      console.error('Error saving the Data:', error);
      alert('Failed to save the Data. Please try again later.');
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
    });

    if (result.canceled) {
      // User canceled image selection
      return;
    }

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('./images/Query.png')} style={styles.icon} />

      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome To</Text>
        <Text style={styles.queryHomeText}>Query Home</Text>
      </View>

      <Text style={styles.askQueryText}>Ask a Query:</Text>
      <TextInput
        style={styles.queryInput}
        placeholder="Type your query here..."
        multiline
        value={query}
        onChangeText={setQuery}
      />

      {imageUri && (
        <Image source={{ uri: imageUri }} style={styles.selectedImage} />
      )}

      <View style={styles.selectImageButton}>
        <Button
          title="Select Image"
          onPress={pickImage}
          color="#108866"
          
        />
      </View>

      <TouchableOpacity style={styles.sendButton} onPress={handleSendButtonPress}>
        <Text style={styles.sendButtonText}>Send</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  icon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  queryHomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5,
  },
  askQueryText: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: 30,
  },
  queryInput: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    padding: 10,
    width: '100%',
    height: 150,
    textAlignVertical: 'top',
    marginTop: 10,
  },
  selectedImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 10,
  },
  sendButton: {
    backgroundColor: '#108866',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
  },
  sendButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  selectImageButton: {
    marginTop: 20,
  },
});

export default Question;
