import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ApplicationSuccessPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.successText}>You Have Successfully Submitted Your Application.</Text>
      <Text style={styles.infoText}>
        Your information will be checked, and if your given information is incorrect, then you will not be selected.
        After the verification, you will receive a message, and you will have to visit our office for further procedures.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5DEB3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  successText: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  infoText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ApplicationSuccessPage;
