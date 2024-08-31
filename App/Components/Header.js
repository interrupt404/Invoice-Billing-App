import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

const App = ({ darkModeEnabled }) => {
  const dynamicStyles = darkModeEnabled ? darkStyles : lightStyles;

  return (
    <SafeAreaView style={[styles.container, dynamicStyles.container]}>
      <View style={styles.content}>
        {/* Your content */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
  },
});

const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});

const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
  },
});

export default App;
