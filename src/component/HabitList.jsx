// HabitList.jsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { updateHabit,deleteHabit } from '../Redux/actions/habitActions';
import { useNavigation } from '@react-navigation/native';

const HabitList = ({ habits, onDeleteHabit ,onUpdateHabit }) => {
  const navigation = useNavigation();

  return (
    <View>
      {habits.map(habit => (
        <View key={habit.id} style={styles.habitContainer}>
          <Text>{habit.name}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => onUpdateHabit(habit.id)}>
              <Text style={styles.editButton}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onDeleteHabit(habit.id)}>
              <Text style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  habitContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  editButton: {
    color: 'blue',
    marginRight: 10,
  },
  deleteButton: {
    color: 'red',
  },
});

const mapStateToProps = state => ({
  habits: state.habits.habits, 
});

const mapDispatchToProps = dispatch => ({
  onDeleteHabit: id => dispatch(deleteHabit(id)),
  onUpdateHabit: id => {
    // Navigate to the EditHabitScreen and pass the habitId as a parameter
    navigation.navigate('EditHabitScreen', { habitId: id });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HabitList);


// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const HabitList = ({ habits }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Habit List</Text>
//       {habits.map(habit => (
//         <Text key={habit.id}>{habit.name}</Text>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
// });

// export default HabitList;
