import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput, Alert } from 'react-native';

const Invoices = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [passcode, setPasscode] = useState('');
    const [error, setError] = useState('');

    

    const handleCreateBillPress = () => {
        setModalVisible(true); // Show the passcode modal
    };

    const handlePasscodeSubmit = () => {
        if (passcode === '1234' || passcode === '5678') {
            setModalVisible(false); // Hide the modal
            navigation.navigate('CreateBill'); // Navigate to CreateBill
        } else {
            setError('You are not authorized. Please contact the administration');
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={handleCreateBillPress}
            >
                <Text style={styles.text}>Create New Bill</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('CreateFeeReceipt')}
            >
                <Text style={styles.text}>Create Fee Receipt</Text>
            </TouchableOpacity>

            {/* Passcode Modal */}
            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Enter Passcode</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry
                            value={passcode}
                            onChangeText={setPasscode}
                            placeholder="Enter passcode"
                            keyboardType="numeric"
                        />
                        {error ? <Text style={styles.errorText}>{error}</Text> : null}
                        <TouchableOpacity
                            style={styles.modalButton}
                            onPress={handlePasscodeSubmit}
                        >
                            <Text style={styles.text}>Submit</Text>
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
        backgroundColor: '#fff',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    button: {
        width: '90%', 
        padding: 10,
        backgroundColor: "#0C7DE4",
        borderRadius: 7,
        elevation: 8,
        alignItems: 'center',
        marginBottom: 10,
    },
    text: {
        color: '#fff',
        fontSize: 18,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        marginBottom: 10,
    },
    input: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        textAlign: 'center',
    },
    modalButton: {
        width: '100%',
        padding: 10,
        backgroundColor: "#0C7DE4",
        borderRadius: 7,
        elevation: 8,
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
});

export default Invoices;
