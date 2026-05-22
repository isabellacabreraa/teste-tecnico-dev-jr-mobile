import React, { useState } from 'react';
import { 
  View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert 
} from 'react-native';

export default function ProjetosScreen() {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSend = () => {
    Alert.alert("Sucesso", `Obrigado ${nome}, sua mensagem foi "enviada"!`);
    setNome('');
    setMensagem('');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Projetos</Text>
      
      <View style={styles.projectCard}>
        <Text style={styles.projectTitle}>App de Finanças</Text>
        <Text style={styles.projectDesc}>Um app para controle de gastos mensais usando React Native e AsyncStorage.</Text>
      </View>

      <View style={styles.projectCard}>
        <Text style={styles.projectTitle}>Task Manager</Text>
        <Text style={styles.projectDesc}>Lista de tarefas interativa com sistema de notificações e filtros.</Text>
      </View>

      <View style={styles.contactSection}>
        <Text style={styles.sectionTitle}>Contato</Text>
        <Text style={styles.contactInfo}>Email: seuemail@dev.com</Text>
        <Text style={styles.contactInfo}>LinkedIn: /in/seu-perfil</Text>

        <TextInput 
          style={styles.input} 
          placeholder="Seu Nome" 
          value={nome}
          onChangeText={setNome}
        />
        <TextInput 
          style={[styles.input, styles.textArea]} 
          placeholder="Sua Mensagem" 
          multiline
          numberOfLines={4}
          value={mensagem}
          onChangeText={setMensagem}
        />

        <TouchableOpacity style={styles.button} onPress={handleSend}>
          <Text style={styles.buttonText}>Enviar Contato</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#6200ee',
  },
  projectCard: {
    padding: 15,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    marginBottom: 15,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  projectDesc: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  contactSection: {
    marginTop: 20,
    paddingBottom: 40,
  },
  contactInfo: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});