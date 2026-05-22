import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function PerfilScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={{ uri: 'https://avatars.githubusercontent.com/u/197297076?v=4'}}
                style={styles.imagem}
                />
                <Text style={styles.nome}>Isabella Pinesso Cabrera</Text>
                <Text style={styles.cargo}>Desenvolvedora Mobile Jr</Text>

                <View style={styles.sobreContainer}>
                    <Text style={styles.sobreTitulo}>Sobre mim</Text>
                    <Text style={styles.sobreTexto}>Estudante de Desenvolvimento de sistemas </Text>

                </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    imagem: {
        width: 150,
        height:150,
        borderRadius: 75,
        marginBottom: 20,
        borderWidth: 3,
    },
    nome: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333'
    },
    cargo: {
        fontSize: 18,
        color: '#333',
        marginBottom: 20,
    },
    sobreContainer: {
        width: '100%',
        padding: 15,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
    },
    sobreTitulo: {
        fontSize: 23,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#89bde7'
    },
    sobreTexto: {
        fontSize: 16,
        lineHeight: 24,
        color: '#333',
    },
});

