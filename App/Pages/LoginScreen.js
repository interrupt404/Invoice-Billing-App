import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleLogin = (role) => {
    navigation.navigate('LoginForm', { role });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.adminButton]} 
          onPress={() => handleLogin('admin')}
        >
          <Text style={styles.buttonText}>Login as Administrator</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, styles.financeButton]} 
          onPress={() => handleLogin('finance')}
        >
          <Text style={styles.buttonText}>Login as Finance Officer</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, styles.departmentButton]} 
          onPress={() => handleLogin('department')}
        >
          <Text style={styles.buttonText}>Login as Department Head</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa', // Light gray background
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#343a40', // Dark gray color
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    width: 250,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
  adminButton: {
    backgroundColor: '#007bff', // Blue color
  },
  financeButton: {
    backgroundColor: '#28a745', // Green color
  },
  departmentButton: {
    backgroundColor: '#6f42c1', // Purple color
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default LoginScreen;
