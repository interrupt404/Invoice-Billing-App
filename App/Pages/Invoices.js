import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Invoices = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Additional components and content can be added here */}

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('CreateBill')}
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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-end', // Ensures that content is pushed to the bottom
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
});

export default Invoices;
