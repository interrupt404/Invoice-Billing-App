import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal } from 'react-native';

const ContactScreen = ({ darkModeEnabled }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const dynamicStyles = darkModeEnabled ? darkStyles : lightStyles;

  const handleSendMessage = () => {
    setModalVisible(true);
    // Logic to send email can be added here
  };

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

      <TextInput
        style={[styles.input, dynamicStyles.input]}
        placeholder="Your Name"
        placeholderTextColor={dynamicStyles.placeholder.color}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={[styles.input, dynamicStyles.input]}
        placeholder="Your Email"
        placeholderTextColor={dynamicStyles.placeholder.color}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.textArea, dynamicStyles.input]}
        placeholder="Your Message"
        placeholderTextColor={dynamicStyles.placeholder.color}
        value={message}
        onChangeText={setMessage}
        multiline
      />

      <TouchableOpacity style={[styles.contactButton, dynamicStyles.button]} onPress={handleSendMessage}>
        <Text style={styles.buttonText}>Send Message</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={[styles.modalContainer, dynamicStyles.modal]}>
            <Text style={[styles.modalText, dynamicStyles.text]}>Message sent!</Text>
            <TouchableOpacity style={[styles.closeButton, dynamicStyles.button]} onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
  input: {
    width: '100%',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    fontSize: 16,
  },
  textArea: {
    height: 120, // Increase the height to make it bigger
    width:340,
    textAlignVertical: 'top', // Ensure text starts from the top
    padding: 15, // Optional: Adjust padding for more space inside
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#fff', // You can customize background color as needed
    borderColor: '#ccc', // Border color for light mode
    borderWidth: 1,
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
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  closeButton: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
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
  input: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  placeholder: {
    color: '#888',
  },
  modal: {
    backgroundColor: '#fff',
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
  input: {
    backgroundColor: '#444',
    borderColor: '#555',
    borderWidth: 1,
  },
  placeholder: {
    color: '#bbb',
  },
  modal: {
    backgroundColor: '#444',
  },
});

export default ContactScreen;
