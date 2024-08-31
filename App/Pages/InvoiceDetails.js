import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const InvoiceDetail = ({ route }) => {
  const { invoice } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Invoice #{invoice.invoiceNumber}</Text>
      <Text>Name: {invoice.name}</Text>
      <Text>Address: {invoice.address}</Text>
      <Text>Mobile No: {invoice.mobileNo}</Text>

      <Text style={styles.sectionTitle}>Items:</Text>
      <FlatList
        data={invoice.items}
        renderItem={({ item }) => (
          <View style={styles.itemRow}>
            <Text>{item.description}</Text>
            <Text>Qty: {item.quantity}</Text>
            <Text>Price: ₹{item.price.toFixed(2)}</Text>
            <Text>Total: ₹{item.total.toFixed(2)}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <Text style={styles.total}>Total: ₹{invoice.total.toFixed(2)}</Text>
      <Text>Notes: {invoice.notes}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: 16,
  },
});

export default InvoiceDetail;
