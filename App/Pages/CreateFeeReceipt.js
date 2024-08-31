import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Button, Alert } from 'react-native';
import dateFormat from 'dateformat';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { FeeReceiptPdfCode } from '../Components/FeeReceiptPdfCode'; // Adjust path if necessary

const CreateFeeReceipt = ({ navigation }) => {
    const [studentName, setStudentName] = useState('');
    const [studentId, setStudentId] = useState('');
    const [course, setCourse] = useState('');
    const [amount, setAmount] = useState('');
    const [receiptNo, setReceiptNo] = useState(dateFormat(new Date(), "ddmmyyhhMss"));
    const [receiptDate, setReceiptDate] = useState(dateFormat(new Date(), "yyyy-mm-dd"));
    const [notes, setNotes] = useState('');

    const printToFile = async () => {
        let html = FeeReceiptPdfCode({
            studentName,
            studentId,
            course,
            amount,
            receiptNo,
            receiptDate,
            notes
        });
        try {
            const { uri } = await Print.printToFileAsync({ html });
            console.log('File has been saved to:', uri);
            await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });

            // Pass data to Invoices screen
            navigation.navigate('Invoices');

            // Reset form fields
            setStudentName('');
            setStudentId('');
            setCourse('');
            setAmount('');
            setReceiptNo(dateFormat(new Date(), "ddmmyyhhMss"));
            setReceiptDate(dateFormat(new Date(), "yyyy-mm-dd"));
            setNotes('');
        } catch (err) {
            Alert.alert("Make sure you have an Internet Connection or contact @+91 8530730017");
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                {/* Fee Receipt Form */}
                <View style={styles.section}>
                    <Text>Student Name</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={setStudentName}
                        value={studentName}
                        placeholder="Student Name"
                    />
                    <Text>Student ID</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={setStudentId}
                        value={studentId}
                        placeholder="Student ID"
                    />
                    <Text>Course</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={setCourse}
                        value={course}
                        placeholder="Course"
                    />
                    <Text>Receipt No</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={setReceiptNo}
                        value={receiptNo}
                        placeholder="Receipt No"
                    />
                    <Text>Amount</Text>
                    <TextInput
                        style={styles.textInput}
                        keyboardType="numeric"
                        onChangeText={setAmount}
                        value={amount}
                        placeholder="Amount ₹"
                    />
                    <Text>Payment Date</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={setReceiptDate}
                        value={receiptDate}
                        placeholder="Payment Date (YYYY-MM-DD)"
                    />
                    <Text>Notes</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={setNotes}
                        value={notes}
                        placeholder="Additional Notes"
                    />
                </View>

                {/* Create Receipt Button */}
                <View style={styles.createInvoiceButton}>
                    <Button
                        title="Create Fee Receipt"
                        onPress={printToFile}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    section: {
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
    },
    textInput: {
        height: 40,
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 4,
        padding: 4,
        marginBottom: 10,
    },
    createInvoiceButton: {
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
    },
});

export default CreateFeeReceipt;
