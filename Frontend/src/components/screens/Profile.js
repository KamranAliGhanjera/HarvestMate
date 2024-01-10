import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use any icon library you prefer

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('Muhammad Kamran');
  const [email, setEmail] = useState('kasghanjera@gmail.com');
  const [password, setPassword] = useState('********');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Request permission to access the device's image gallery
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work.');
      }
    })();
  }, []);

  const handleSaveProfile = () => {
    // Save the updated profile information (name, email, password, and selectedImage) to your backend or storage
    // You can implement this part based on your backend setup
    setIsEditing(false);
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.userName}>{name}</Text>
      {selectedImage && <Image source={{ uri: selectedImage }} style={styles.userImage} />}

      {isEditing ? (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
          <View style={styles.iconContainer}>
            <Icon
              name="camera" // Use the icon name that you prefer
              size={30}
              color="#108866"
              onPress={pickImage}
            />
          </View>
          <Button title="Save" onPress={handleSaveProfile} />
        </View>
      ) : (
        <View>
          <Text style={styles.boldText}>Email: {email}</Text>
          <Text style={styles.boldText}>Password: {password}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginVertical: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
  boldText: {
    fontWeight: 'bold',
  },
  iconContainer: {
    marginTop: 10,
  },
});

export default Profile;
