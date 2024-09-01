import { View, Text, Button, StyleSheet, FlatList, Dimensions } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import { LineChart, BarChart } from 'react-native-chart-kit'; // Import chart components

const transactions = [
  { date: '2024-09-01', name: 'AARAV PATEL', rollNo: 'ABC123', type: 'Tuition Fee', amount: '₹15,000' },
  { date: '2024-08-30', name: 'SOPHIA VERMA', rollNo: 'XYZ456', type: 'Mess Fee', amount: '₹1,500' },
  { date: '2024-08-29', name: 'RAVI SHARMA', rollNo: 'LMN789', type: 'Hostel Fee', amount: '₹5,000' },
  { date: '2024-08-28', name: 'PRIYA NAIR', rollNo: 'OPQ012', type: 'Library Fee', amount: '₹1,200' },
  { date: '2024-08-27', name: 'VIJAY KUMAR', rollNo: 'RST345', type: 'Sports Fee', amount: '₹2,500' },
  { date: '2024-08-26', name: 'ANITA MEHRA', rollNo: 'UVW678', type: 'Exam Fee', amount: '₹3,000' },
  { date: '2024-08-25', name: 'RAHUL SINGH', rollNo: 'IJK901', type: 'Lab Fee', amount: '₹1,500' },
  { date: '2024-08-24', name: 'RANI CHAUHAN', rollNo: 'DEF234', type: 'Transportation Fee', amount: '₹1,800' },
  { date: '2024-08-23', name: 'MAYANK SINGH', rollNo: 'GHI567', type: 'Tuition Fee', amount: '₹20,000' },
  { date: '2024-08-22', name: 'KIRAN KAPOOR', rollNo: 'JKL890', type: 'Hostel Fee', amount: '₹6,000' }
];


const notifications = [
  'New research grant application received.',
  'Vendor payment approval required.',
  'Upcoming deadline for tuition fee payments.',
  'Library fee overdue notice sent.',
  'Sports fee collection starts next week.'
];

const pendingApprovals = [
  'Approve research grant application.',
  'Review vendor payment request.',
  'Approve tuition fee adjustments.',
  'Verify overdue library fees.',
  'Approve new sports fee collection.'
];

const renderTransaction = ({ item }) => (
  <View style={styles.transaction}>
    <Text style={styles.transactionDate}>Date: {item.date}</Text>
    <Text style={styles.transactionName}>Name: {item.name}</Text>
    <Text style={styles.transactionRollNo}>Roll No: {item.rollNo}</Text>
    <Text style={styles.transactionType}>Type: {item.type}</Text>
    <Text style={styles.transactionAmount}>Amount: {item.amount}</Text>
  </View>
);

const renderNotification = ({ item }) => (
  <Text style={styles.notification}>• {item}</Text>
);

const renderPendingApproval = ({ item }) => (
  <Text style={styles.notification}>• {item}</Text>
);

const renderChart = () => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>Financial Insights</Text>
    <LineChart
      data={{
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          { data: [20, 45, 28, 80, 99, 43] },
        ],
      }}
      width={Dimensions.get('window').width - 62} // Adjust width to fit within the phone frame
      height={220}
      chartConfig={{
        backgroundColor: '#e26a00',
        backgroundGradientFrom: '#fb8c00',
        backgroundGradientTo: '#ffa726',
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: { borderRadius: 16 },
        propsForDots: { r: '6', strokeWidth: '2', stroke: '#ffa726' },
      }}
      bezier
      style={{ marginVertical: 8, borderRadius: 16 }}
    />

    <BarChart
      data={{
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          { data: [20, 45, 28, 80, 99, 43] },
        ],
      }}
      width={Dimensions.get('window').width - 62} // Adjust width to fit within the phone frame
      height={220}
      chartConfig={{
        backgroundColor: '#1cc910',
        backgroundGradientFrom: '#eff3ff',
        backgroundGradientTo: '#efefef',
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: { borderRadius: 16 },
        propsForDots: { r: '6', strokeWidth: '2', stroke: '#ffa726' },
      }}
      style={{ marginVertical: 8, borderRadius: 16 }}
    />
  </View>
);

export default function Home() {
  const navigation = useNavigation(); // Use the navigation hook to get the navigation prop
  
  const data = [
    { key: 'title', title: 'Dashboard Overview' },
    { key: 'transactions', title: 'Recent Transactions', data: transactions, renderItem: renderTransaction },
    { key: 'notifications', title: 'Notifications', data: notifications, renderItem: renderNotification },
    { key: 'buttons' }, // Add a key for quick action buttons
    { key: 'charts', renderItem: renderChart },
    { key: 'pending', title: 'Pending Approvals', data: pendingApprovals, renderItem: renderPendingApproval }
  ];

  const renderItem = ({ item }) => {
    switch (item.key) {
      case 'title':
        return <Text style={styles.title}>{item.title}</Text>;
      case 'transactions':
      case 'notifications':
      case 'pending':
        return (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <FlatList
              data={item.data}
              renderItem={item.renderItem}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={item.key === 'transactions' ? false : true}
              horizontal={item.key === 'transactions'}
              pagingEnabled={item.key === 'transactions'}
            />
          </View>
        );
      case 'buttons':
        return (
          <View style={styles.actions}>
            <Button title="Create New Invoice" onPress={() => navigation.navigate('Invoices')} />
            <View style={styles.buttonSpacing} />
          </View>
        );
      case 'charts':
        return item.renderItem();
      default:
        return null;
    }
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.key}
      contentContainerStyle={styles.scrollContainer}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 100, // Provide space for the footer
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    marginVertical: 10,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  transaction: {
    marginRight: 10,
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    width: 250,
  },
  transactionDate: {
    fontSize: 14,
    marginBottom: 4,
  },
  transactionName: {
    fontSize: 14,
    marginBottom: 4,
  },
  transactionRollNo: {
    fontSize: 14,
    marginBottom: 4,
  },
  transactionType: {
    fontSize: 14,
    marginBottom: 4,
  },
  transactionAmount: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  notification: {
    fontSize: 14,
    marginBottom: 6,
  },
  actions: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonSpacing: {
    height: 10, // Adjust the height to provide spacing between buttons
  },
  footer: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
});