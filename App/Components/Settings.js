import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(false); // Dark mode state

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const toggleDarkMode = () => {
    setDarkModeEnabled(!darkModeEnabled);
  };

  // Conditional styles based on dark mode
  const dynamicStyles = darkModeEnabled ? darkStyles : lightStyles;

  return (
    <View style={[styles.container, dynamicStyles.container]}>
      <Text style={[styles.title, dynamicStyles.text]}>Settings</Text>
      <View style={styles.optionContainer}>
        <Text style={[styles.optionText, dynamicStyles.text]}>Enable Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={toggleNotifications}
          thumbColor="#007BFF" // Blue thumb color
          trackColor={{ true: '#007BFF80', false: '#B0B0B0' }} // Blue when enabled, gray when disabled
        />
      </View>
      <View style={styles.optionContainer}>
        <Text style={[styles.optionText, dynamicStyles.text]}>Dark1 Mode</Text>
        <Switch
          value={darkModeEnabled}
          onValueChange={toggleDarkMode}
          thumbColor="#007BFF" // Blue thumb color
          trackColor={{ true: '#007BFF80', false: '#B0B0B0' }} // Blue when enabled, gray when disabled
        />
      </View>
    </View>
  );
};

// Base styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  optionText: {
    fontSize: 18,
  },
});

// Light mode styles
const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2', // Light gray background
  },
  text: {
    color: '#333', // Dark gray text color
  },
});

// Dark mode styles
const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: '#1c1c1c', // Dark background
  },
  text: {
    color: '#f2f2f2', // Light gray text color
  },
});

export default SettingsScreen;
