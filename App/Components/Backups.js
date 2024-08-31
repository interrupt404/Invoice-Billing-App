import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const BackupScreen = ({ darkModeEnabled }) => {
  const [backupEnabled, setBackupEnabled] = React.useState(false);
  const [dailyBackup, setDailyBackup] = React.useState(false);
  const [cloudBackup, setCloudBackup] = React.useState(false);

  const toggleBackup = () => {
    setBackupEnabled(!backupEnabled);
  };

  const dynamicStyles = darkModeEnabled ? darkStyles : lightStyles;

  return (
    <View style={[styles.container, dynamicStyles.container]}>
      <Text style={[styles.title, dynamicStyles.text]}>Backup</Text>
      <View style={styles.optionContainer}>
        <Text style={[styles.optionText, dynamicStyles.text]}>Enable Backup</Text>
        <Switch
          value={backupEnabled}
          onValueChange={toggleBackup}
          thumbColor={darkModeEnabled ? "#f4f3f4" : "#007BFF"}
          trackColor={{ true: darkModeEnabled ? "#767577" : "#007BFF80", false: "#B0B0B0" }}
        />
      </View>
      {backupEnabled && (
        <>
          <View style={styles.optionContainer}>
            <Text style={[styles.optionText, dynamicStyles.text]}>Backup Frequency</Text>
            <Switch
              value={dailyBackup}
              onValueChange={() => setDailyBackup(!dailyBackup)}
              thumbColor={darkModeEnabled ? "#f4f3f4" : "#007BFF"}
              trackColor={{ true: darkModeEnabled ? "#767577" : "#007BFF80", false: "#B0B0B0" }}
            />
            <Text style={[styles.optionSubText, dynamicStyles.subText]}>Daily</Text>
          </View>
          <View style={styles.optionContainer}>
            <Text style={[styles.optionText, dynamicStyles.text]}>Backup Location</Text>
            <Switch
              value={cloudBackup}
              onValueChange={() => setCloudBackup(!cloudBackup)}
              thumbColor={darkModeEnabled ? "#f4f3f4" : "#007BFF"}
              trackColor={{ true: darkModeEnabled ? "#767577" : "#007BFF80", false: "#B0B0B0" }}
            />
            <Text style={[styles.optionSubText, dynamicStyles.subText]}>Cloud</Text>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  optionText: {
    fontSize: 18,
  },
  optionSubText: {
    fontSize: 16,
  },
});

const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2', // Light gray background
  },
  text: {
    color: '#333', // Dark gray text color
  },
  subText: {
    color: '#555', // Gray text color
  },
});

const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: '#333', // Dark background
  },
  text: {
    color: '#f2f2f2', // Light gray text color
  },
  subText: {
    color: '#ccc', // Lighter gray text color
  },
});

export default BackupScreen;
