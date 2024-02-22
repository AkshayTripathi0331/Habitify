// HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.quote}>"The secret of getting ahead is getting started."</Text>
      <Button title="Manage Habits" onPress={() => navigation.navigate('HabitManagement')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  quote: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default HomeScreen;
