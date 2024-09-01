import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const VendorManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [vendors, setVendors] = useState([
    {
      id: 1,
      name: 'Blue Dart Express Ltd.',
      email: 'info@bluedart.com',
      phone: '022-6260 1234',
      address: 'Sakinaka, Andheri East, Mumbai, Maharashtra 400072',
    },
    {
      id: 2,
      name: 'DTDC Express Ltd.',
      email: 'customercare@dtdc.com',
      phone: '080-2536 5533',
      address: 'No. 3, Ejipura Main Road, Koramangala, Bengaluru, Karnataka 560095',
    },
    {
      id: 3,
      name: 'Gati Ltd.',
      email: 'customercare@gati.com',
      phone: '040-2333 3333',
      address: '1-7-293/97, Plot No. 97, Nagarjuna Hills, Punjagutta, Hyderabad, Telangana 500082',
    },
    {
      id: 4,
      name: 'FedEx Express Transportation and Supply Chain Services (India) Pvt. Ltd.',
      email: 'india@fedex.com',
      phone: '022-2827 6200',
      address: 'Unit No. 101, 1st Floor, Eros Corporate Tower, Nehru Place, New Delhi, Delhi 110019',
    },
    {
      id: 5,
      name: 'Aegis Logistics Ltd.',
      email: 'info@aegislogistics.com',
      phone: '022-6777 1000',
      address: 'Aegis House, 5th Floor, Plot No. 12, Sector 44, Gurgaon, Haryana 122002',
    },
    {
      id: 6,
      name: 'Mahindra Logistics Ltd.',
      email: 'info@mahindralogistics.com',
      phone: '022-2495 4500',
      address: 'Mahindra Towers, 1st Floor, P. K. Kurne Chowk, Worli, Mumbai, Maharashtra 400018',
    },
    {
      id: 7,
      name: 'Toll Group',
      email: 'india@tollgroup.com',
      phone: '022-6777 1000',
      address: 'Unit No. 101, 1st Floor, Eros Corporate Tower, Nehru Place, New Delhi, Delhi 110019',
    },
    {
      id: 8,
      name: 'DHL Express (India) Pvt. Ltd.',
      email: 'india@dhl.com',
      phone: '022-2827 6200',
      address: 'DHL Express, 5th Floor, Eros Corporate Tower, Nehru Place, New Delhi, Delhi 110019',
    },
  ]);

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const filteredVendors = vendors.filter((vendor) => {
    return vendor.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Vendor Management</Text>
      <TextInput
        placeholder="Search Vendors"
        value={searchQuery}
        onChangeText={handleSearch}
        style={styles.searchInput}
      />
      <Button title="Add New Vendor" style={styles.addButton} />
      
      {filteredVendors.map((vendor) => (
        <View key={vendor.id} style={styles.card}>
          <Text style={styles.cardHeader}>{vendor.name}</Text>
          <Text style={styles.cardText}>{vendor.email}</Text>
          <Text style={styles.cardText}>{vendor.phone}</Text>
          <Text style={styles.cardText}>{vendor.address}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  addButton: {
    marginBottom: 14, 
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 16,
    marginTop:10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default VendorManagement;
