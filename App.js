import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Toolbar from './components/toolbar.js';
import Resultat from './components/resultat.js';
import Task from './components/task.js';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Toolbar />
      <Resultat />
      <View style={styles.taskContainer}>
        <Task title="Applications Autorisation" />
        <Task title="Groupe nPermissions" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
});
