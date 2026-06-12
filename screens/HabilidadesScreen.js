import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const habilidades = [
  { id: '1', name: 'JavaScript' },
  { id: '2', name: 'HTML5' },
  { id: '3', name: 'TypeScript' },
  { id: '4', name: 'React' },
  { id: '5', name: 'Node.js' },
  { id: '6', name: 'React Native' },
  { id: '7', name: 'CSS3' },
  { id: '8', name: 'Git & GitHub' },
];

export default function HabilidadesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minhas Habilidades</Text>
      <FlatList
        data={habilidades}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.habilidade}>
            <Text style={styles.textoHabilidade}>• {item.name}</Text>
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
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  habilidade: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  textoHabilidade: {
    fontSize: 18,
    color: '#555',
  },
});