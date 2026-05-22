import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const skills = [
  { id: '1', name: 'React Native' },
  { id: '2', name: 'JavaScript (ES6+)' },
  { id: '3', name: 'TypeScript' },
  { id: '4', name: 'Expo' },
  { id: '5', name: 'Git & GitHub' },
  { id: '6', name: 'Styled Components' },
];

export default function HabilidadesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Habilidades</Text>
      <FlatList
        data={skills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.skillItem}>
            <Text style={styles.skillText}>• {item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  skillItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  skillText: {
    fontSize: 18,
    color: '#555',
  },
});