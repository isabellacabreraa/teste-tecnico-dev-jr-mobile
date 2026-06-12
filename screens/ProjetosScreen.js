
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Alert, Linking } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function ProjetosScreen() {
  const [mensagem, setMensagem] = useState('');

  const projetos = [
    {
      id: 1,
      nome: 'ReadFlow',
      descricao: 'O ReadFlow é uma plataforma desenvolvida para facilitar a descoberta e a organização de livros.',
      tecnologias: 'React, CSS3, JavaScript, Vercel, Node.js, Render, GitHub, PostgreeSQL',
      url: 'https://read-flow-front-end.vercel.app/'
    },

    {
      id: 2,
      nome: 'Guia Turístico',
      descricao: 'Aplicativo com o objetivo de ajudar turistas a encontrar lugares interessantes e restaurantes, com informações detalhadas e navegação simples.',
      tecnologias: 'React Native, CSS3, JavaScript, Node.js, GitHub, Expo',
      url: 'https://github.com/beatriztsumoto/app-turismo.git'
    }
  ];

  const abrirProjeto = async (url) => {
    if (!url) {
      Alert.alert('Erro', 'O link deste projeto não está disponível.');
      return;
    }

try {
      await Linking.openURL(url);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível abrir o link no seu dispositivo.');
      console.log(error);
    }
  };


  const enviarContato = () => {
    if (mensagem.trim() === '') {
      Alert.alert('Aviso', 'Por favor, preencha a mensagem antes de enviar.');
      return;
    }
    Alert.alert('Sucesso', 'Sua mensagem foi enviada com sucesso!');
    setMensagem('');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Meus Projetos</Text>
      </View>

      <View style={styles.conteudo}>
        {projetos.map((projeto) => (
          <TouchableOpacity F
            key={projeto.id}
            style={styles.cartaProjeto}
            activeOpacity={0.8}
          >
            <View style={styles.cardProjetos}>
              <Text style={styles.nomeProjeto}>{projeto.nome}</Text>
            </View>

            <Text style={styles.descricao}>{projeto.descricao}</Text>

            <View style={styles.tecnologiasContainer}>
              <Text style={styles.labelTecnologias}>Tecnologias:</Text>
              <Text style={styles.tecnologias}>{projeto.tecnologias}</Text>
            </View>

            <TouchableOpacity style={styles.botaoVer}
            onPress={() => abrirProjeto(projeto.url)} >
              <Text style={styles.textoBotao}>Ver Projeto</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.secaoContato}>
        <Text style={styles.tituloContato}>ENTRE EM CONTATO</Text>
        
        <View style={styles.contatosContainer}>
          <TouchableOpacity style={styles.itemContato}>
            <Text style={styles.labelItem}>📧 E-mail</Text>
            <Text style={styles.valorItem}>bellacabrera0325@gmail.com</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemContato}>
            <Text style={styles.labelItem}>📧 E-mail Educacional</Text>
            <Text style={styles.valorItem}>isabella.cabrera@aluno.senai.br</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemContato}>
            <Text style={styles.labelItem}>🐙 GitHub</Text>
            <Text style={styles.valorItem}>https://github.com/isabellacabreraa</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.formularioContainer}>
          <Text style={styles.labelFormulario}>Envie uma mensagem:</Text>
          
          <TextInput
            style={styles.campoMensagem}
            placeholder="Digite sua mensagem aqui..."
            placeholderTextColor="#999"
            value={mensagem}
            onChangeText={setMensagem}
            multiline
            numberOfLines={5}
          />

          <TouchableOpacity 
            style={styles.botaoEnviar}
            onPress={enviarContato}
          >
            <Text style={styles.textoEnviar}>Enviar Mensagem</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e9e9',
  },
  header: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#758fad',
    marginTop: 10,
  },
  conteudo: {
    paddingHorizontal: 15,
    paddingBottom: 20,
    margin: 100,
  },
  cartaProjeto: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 18,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardProjetos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  nomeProjeto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#758fad',
    flex: 1,
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginLeft: 10,
  },
  textoStatus: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  descricao: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 12,
    lineHeight: 20,
  },
  tecnologiasContainer: {
    marginBottom: 15,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  labelTecnologias: {
    fontSize: 12,
    fontWeight: '600',
    color: '#758fad',
    marginBottom: 5,
  },
  tecnologias: {
    fontSize: 13,
    color: '#666666',
    lineHeight: 18,
  },
  botaoVer: {
    backgroundColor: '#0b1829',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 600,
    marginRight: 600,
  },
  textoBotao: {
    color: '#758fad',
    fontSize: 14,
    fontWeight: '600',
  },

  secaoContato: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginTop: 10,
    margin: 100,
  },
  tituloContato: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#758fad',
    marginBottom: 20,
    textAlign: 'center',
  },
  contatosContainer: {
    marginBottom: 25,
  },
  itemContato: {
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#a7c4f0',
  },
  labelItem: {
    fontSize: 13,
    fontWeight: '600',
    color: '#758fad',
    marginBottom: 4,
  },
  valorItem: {
    fontSize: 12,
    color: '#666666',
  },
  formularioContainer: {
    marginTop: 20,
    margin: 100,
  },
  labelFormulario: {
    fontSize: 14,
    fontWeight: '600',
    color: '#758fad',
    marginBottom: 12,
    
  },
  campoMensagem: {
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#a7c4f0',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 14,
    color: '#333333',
    textAlignVertical: 'top',
    marginBottom: 15,
  },
  botaoEnviar: {
    backgroundColor: '#758fad',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  textoEnviar: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

