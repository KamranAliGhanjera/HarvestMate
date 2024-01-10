import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = ({ navigation }) => {
  const handleLogout = () => {
    // Navigate to the Login screen
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Setting</Text>
      <TouchableOpacity style={styles.item}>
        <Text>Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text>Privacy and Security</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text>Help and Support</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text>About</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logout} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  logout: {
    marginTop: 16,
    paddingVertical: 16,
    backgroundColor: 'lightpink',
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
