import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LineChart, BarChart, PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

// Get screen dimensions
const screenWidth = Dimensions.get('window').width;

const Analytics = () => {
  // Random data for charts
  const revenueData = [3000, 4000, 2500, 5000, 4500, 5500, 6000];
  const invoiceData = [5, 10, 15, 20, 25, 30, 35];
  const auditData = {
    labels: ['2024-08-01', '2024-08-02', '2024-08-03', '2024-08-04', '2024-08-05'],
    datasets: [
      {
        data: [20, 30, 25, 40, 35],
      },
    ],
  };
  const pieChartData = [
    { name: 'Tuition Fee', amount: 10000, color: '#ff6384', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Mess Fee', amount: 1500, color: '#36a2eb', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Hostel Fee', amount: 5000, color: '#cc65fe', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Library Fee', amount: 1000, color: '#ffce56', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Analytics Dashboard</Text>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Revenue Overview</Text>
        <LineChart
          data={{
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [
              {
                data: revenueData,
              },
            ],
          }}
          width={screenWidth - 30}
          height={220}
          yAxisLabel="$"
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Outstanding Invoices</Text>
        <BarChart
          data={{
            labels: ['Invoice 1', 'Invoice 2', 'Invoice 3', 'Invoice 4', 'Invoice 5', 'Invoice 6', 'Invoice 7'],
            datasets: [
              {
                data: invoiceData,
              },
            ],
          }}
          width={screenWidth - 30}
          height={220}
          yAxisLabel=""
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 99, 132, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Revenue Forecast</Text>
        <PieChart
          data={pieChartData}
          width={screenWidth - 30}
          height={220}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            color: (opacity = 1) => `rgba(255, 99, 132, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          accessor="amount"
          backgroundColor="transparent"
          paddingLeft="15"
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Audit Trail</Text>
        <LineChart
          data={auditData}
          width={screenWidth - 30}
          height={220}
          yAxisLabel=""
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            color: (opacity = 1) => `rgba(34, 193, 195, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={styles.chart}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#343a40',
  },
  chartContainer: {
    marginBottom: 30,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#343a40',
  },
  chart: {
    borderRadius: 16,
  },
});

export default Analytics;
