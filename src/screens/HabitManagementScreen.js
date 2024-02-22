// HabitManagementScreen.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HabitList from '../component/HabitList';
import AddHabitModal from '../component/AddHabitModal';

const HabitManagementScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Habit Management</Text>
      <HabitList />
      <AddHabitModal />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default HabitManagementScreen;