
//------------Added Screens------------
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import HabitManagementScreen from './src/screens/HabitManagementScreen';
import { Provider } from 'react-redux';
import store from './src/Redux/store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="HabitManagement" component={HabitManagementScreen} options={{ title: 'Manage Habits' }} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;


//-------Redux management System

// import React from 'react';
// import { Provider } from 'react-redux';
// import store from './src/Redux/store'; // Assuming you have configured your Redux store
// import { View, StyleSheet } from 'react-native';
// // Import your components here
// import HabitList from './src/component/HabitList';
// import AddHabitModal from './src/component/AddHabitModal';

// const App = () => {
//   return (
//     <Provider store={store}>
//       <View style={styles.container}>
//         {/* Your components */}
//         <HabitList />
//         <AddHabitModal />
//       </View>
//     </Provider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



// export default App;


// useState data management System

// import React , {useState}from 'react';
// import { StyleSheet, View } from 'react-native';
// import HabitList from './component/HabitList';
// import AddHabitModal from './component/AddHabitModal';

// export default function App() {
//   // Dummy data for testing
//   const [habits, setHabits] = useState([
//     { id: 1, name: 'Exercise' },
//     { id: 2, name: 'Read' },
//     { id: 3, name: 'Meditate' },
//   ]);

//   // Function to add a new habit
//   const handleAddHabit = (habitName) => {
//     // Create a new habit object with a unique ID
//     const newHabit = {
//       id: Math.random().toString(),
//       name: habitName,
//     };
    
//     // Update the habits array with the new habit
//     setHabits(prevHabits => [...prevHabits, newHabit]);
//   };

//   return (
//     <View style={styles.container}>
//       <HabitList habits={habits} />
//       <AddHabitModal onAddHabit={handleAddHabit} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
