import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HabitItem = ({ habit }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{habit.name}</Text>
      <Text style={styles.details}>Frequency: {habit.frequency}</Text>
      <Text style={styles.details}>Goal: {habit.goal}</Text>
      {/* Add more details here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default HabitItem;
