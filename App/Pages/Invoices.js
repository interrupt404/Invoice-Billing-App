import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput } from 'react-native';

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

    // Hardcoded values
    const lineItems = [
        { description: 'Item 1', quantity: 1, price: 100 },
        { description: 'Item 2', quantity: 2, price: 150 },
    ];
    const address = '1234 Main St, Anytown, USA';
    const mobileNo = '123-456-7890';
    const invoiceNo = 'INV-001';
    const total = 400;
    const receivedBalance = 100;
    const paymentType = 'Credit Card';
    const remainingBalance = 300;
    const tax = 40;
    const discount = 20;
    const notes = 'Thank you for your business!';

    return (
        <View style={styles.container}>
         <Text style={styles.invoiceTitle}>Recent Invoice</Text>
            <View style={styles.invoiceCard}>
                <Text style={styles.invoiceText}>Invoice No: {invoiceNo}</Text>
                <Text style={styles.invoiceText}>Address: {address}</Text>
                <Text style={styles.invoiceText}>Mobile No: {mobileNo}</Text>
                <Text style={styles.invoiceText}>Total: ${total}</Text>
                <Text style={styles.invoiceText}>Received Balance: ${receivedBalance}</Text>
                <Text style={styles.invoiceText}>Payment Type: {paymentType}</Text>
                <Text style={styles.invoiceText}>Remaining Balance: ${remainingBalance}</Text>
                <Text style={styles.invoiceText}>Tax: ${tax}</Text>
                <Text style={styles.invoiceText}>Discount: ${discount}</Text>
                <Text style={styles.invoiceText}>Notes: {notes}</Text>
            </View>

            {/* Buttons */}
            <View style={styles.buttonContainer}>
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
            </View>

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
        padding: 16,
        justifyContent: 'space-between',
    },
    invoiceCard: {
        width: '100%',
        padding: 16,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        marginBottom: 20,
    },
    invoiceTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    invoiceText: {
        fontSize: 16,
        marginBottom: 8,
    },
    buttonContainer: {
        width: '100%',
        paddingBottom: 20,
    },
    button: {
        width: '90%',
        padding: 10,
        backgroundColor: "#0C7DE4",
        borderRadius: 7,
        elevation: 8,
        alignItems: 'center',
        marginBottom: 10,
        alignSelf: 'center',
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
