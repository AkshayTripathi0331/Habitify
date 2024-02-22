// AddHabitModal.jsx
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addHabit } from '../Redux/actions/habitActions';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddHabitModal = ({ dispatch }) => {
  const [habitName, setHabitName] = useState('');

  const handleAddHabit = () => {
    if (habitName.trim() !== '') {
      const habit = { id: Math.random(), name: habitName };
      dispatch(addHabit(habit));
      setHabitName('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={habitName}
        onChangeText={setHabitName}
        placeholder="Enter new habit"
      />
      <Button title="Add Habit" onPress={handleAddHabit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default connect()(AddHabitModal);



// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

// const AddHabitModal = ({ onAddHabit }) => {
//   const [habitName, setHabitName] = useState('');

//   const handleAddHabit = () => {
//     // Validate the habit name
//     if (!habitName.trim()) {
//       alert('Please enter a habit name');
//       return;
//     }

//     // Call the onAddHabit callback with the new habit name
//     onAddHabit(habitName);

//     // Reset the habit name input field
//     setHabitName('');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Add Habit</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter habit name"
//         value={habitName}
//         onChangeText={setHabitName}
//       />
//       <Button title="Add Habit" onPress={handleAddHabit} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
// });

// export default AddHabitModal;
