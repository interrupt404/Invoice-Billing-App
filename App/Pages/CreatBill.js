import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Button,
  Alert,
  TouchableOpacity,
  FlatList,
} from "react-native";
import dateFormat from "dateformat";
import { Picker } from "@react-native-picker/picker";
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { PdfCode } from "../Components/PdfCode";
import * as React from 'react';

const CreateBill = ({ navigation }) => {
  const [lineItems, setLineItems] = useState([{ productName: '', quantity: '', price: '' }]);
  const [address, setAddress] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [invoiceNo, setInvoiceNo] = useState(dateFormat(new Date(), "ddmmyyhhMss"));
  const [total, setTotal] = useState('');
  const [receivedBalance, setReceivedBalance] = useState('');
  const [paymentType, setPaymentType] = useState('Credit');
  const [remainingBalance, setRemainingBalance] = useState('Paid');
  const [tax, setTax] = useState('');
  const [discount, setDiscount] = useState('');
  const [notes, setNotes] = useState('');

  const handleAddLineItem = () => {
    setLineItems([...lineItems, { productName: '', quantity: '', price: '' }]);
  };

  const handleLineItemChange = (index, field, value) => {
    const newLineItems = [...lineItems];
    newLineItems[index][field] = value;
    setLineItems(newLineItems);
  };

  const calculateTotal = () => {
    // Calculate subtotal
    let subtotal = lineItems.reduce((acc, item) => 
        acc + (parseFloat(item.quantity || 0) * parseFloat(item.price || 0)), 0);

    // Apply tax
    let totalWithTax = subtotal + (parseFloat(tax) || 0);

    // Apply discount
    let totalWithDiscount = totalWithTax - (parseFloat(discount) || 0);

    // Update total state
    setTotal(totalWithDiscount.toFixed(2));
};


  const printToFile = async () => {
    let html = PdfCode({
      lineItems,
      address,
      mobileNo,
      invoiceNo,
      total,
      receivedBalance,
      paymentType,
      remainingBalance,
      tax,
      discount,
      notes
    });
    try {
      const { uri } = await Print.printToFileAsync({ html });
      console.log('File has been saved to:', uri);
      await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });

      // Pass data to Invoices screen
      navigation.navigate('Invoices', {
        address,
        mobileNo,
        invoiceNo,
        total,
        receivedBalance,
        paymentType,
        remainingBalance,
        tax,
        discount,
        notes,
        lineItems
      });

      // Reset form fields
      setAddress('');
      setMobileNo('');
      setInvoiceNo(dateFormat(new Date(), "ddmmyyhhMss"));
      setTotal('');
      setReceivedBalance('');
      setRemainingBalance('Paid');
      setTax('');
      setDiscount('');
      setNotes('');
      setLineItems([{ productName: '', quantity: '', price: '' }]);
    } catch (err) {
      Alert.alert("Make sure you have an Internet Connection or contact @+91 8530730017");
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Line Items */}
        <View style={styles.section}>
          <Text>Line Items</Text>
          {lineItems.map((item, index) => (
            <View key={index} style={styles.lineItemContainer}>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => handleLineItemChange(index, 'productName', text)}
                value={item.productName}
                placeholder="Product Name"
              />
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                onChangeText={(text) => handleLineItemChange(index, 'quantity', text)}
                value={item.quantity}
                placeholder="Quantity"
                onEndEditing={calculateTotal}
              />
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                onChangeText={(text) => handleLineItemChange(index, 'price', text)}
                value={item.price}
                placeholder="Price"
                onEndEditing={calculateTotal}
              />
            </View>
          ))}
          <TouchableOpacity style={styles.addButton} onPress={handleAddLineItem}>
            <Text style={styles.addButtonText}>Add Line Item</Text>
          </TouchableOpacity>
        </View>

        {/* Additional Fields */}
        <View style={styles.section}>
          <Text>Address</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setAddress}
            value={address}
            placeholder="Address"
          />
          <Text>Mobile No</Text>
          <TextInput
            style={styles.textInput}
            keyboardType="number-pad"
            onChangeText={setMobileNo}
            value={mobileNo}
            placeholder="Mobile No"
          />
          <Text>Invoice No</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setInvoiceNo}
            value={invoiceNo}
            placeholder="Invoice No"
          />
          <Text>Tax</Text>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={(text) => { setTax(text); calculateTotal(); }}
            value={tax}
            placeholder="Tax ₹"
          />
          <Text>Discount</Text>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={(text) => { setDiscount(text); calculateTotal(); }}
            value={discount}
            placeholder="Discount ₹"
          />
          <Text>Notes</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setNotes}
            value={notes}
            placeholder="Additional Notes"
          />
        </View>

        {/* Payment Details */}
        <View style={styles.section}>
          <Text>Payment Method</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={paymentType}
              style={styles.picker}
              onValueChange={(itemValue) => setPaymentType(itemValue)}
            >
              <Picker.Item label="Credit" value="Credit" />
              <Picker.Item label="Cash" value="Cash" />
              <Picker.Item label="Other" value="Other" />
            </Picker>
          </View>
          <Text>Received Amount</Text>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={setReceivedBalance}
            value={receivedBalance}
            placeholder="Received Amount ₹"
          />
          <Text>Remaining Balance</Text>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={setRemainingBalance}
            value={remainingBalance}
            placeholder="Remaining Balance ₹"
          />
        </View>

        {/* Create Invoice Button */}
        <View style={styles.createInvoiceButton}>
          <Button
            title="Create Invoice"
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
  lineItemContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 4,
    padding: 4,
    marginRight: 8,
  },
  addButton: {
    backgroundColor: "#0C7DE4",
    padding: 10,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  pickerContainer: {
    borderWidth: 1,
    borderRadius: 4,
    height: 50,
    marginTop: 10,
  },
  picker: {
    height: 50,
  },
  createInvoiceButton: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
  },
});

export default CreateBill;
