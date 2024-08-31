import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ContactScreen = ({ darkModeEnabled }) => {
  const dynamicStyles = darkModeEnabled ? darkStyles : lightStyles;

  return (
    <View style={[styles.container, dynamicStyles.container]}>
      <Text style={[styles.title, dynamicStyles.text]}>Contact Us</Text>
      <View style={styles.contactInfo}>
        <Text style={[styles.infoLabel, dynamicStyles.subText]}>Email:</Text>
        <Text style={[styles.infoText, dynamicStyles.text]}>contact@example.com</Text>
      </View>
      <View style={styles.contactInfo}>
        <Text style={[styles.infoLabel, dynamicStyles.subText]}>Phone:</Text>
        <Text style={[styles.infoText, dynamicStyles.text]}>+91 123457891</Text>
      </View>
      <TouchableOpacity style={[styles.contactButton, dynamicStyles.button]}>
        <Text style={styles.buttonText}>Send Message</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  infoText: {
    fontSize: 18,
  },
  contactButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
    elevation: 3, // Android shadow
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2', // Light gray background
  },
  text: {
    color: '#333', // Dark gray text color
  },
  subText: {
    color: '#555', // Gray text color
  },
  button: {
    backgroundColor: '#007BFF', // Blue button
  },
});

const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: '#333', // Dark background
  },
  text: {
    color: '#f2f2f2', // Light gray text color
  },
  subText: {
    color: '#ccc', // Lighter gray text color
  },
  button: {
    backgroundColor: '#0056b3', // Darker blue button
  },
});

export default ContactScreen;
