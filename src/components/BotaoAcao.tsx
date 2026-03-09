import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export function BotaoAcao() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Pronto para começar?
      </Text>

      <Text style={styles.subtitulo}>
        Crie seu primeiro app estilizado
      </Text>

      <TouchableOpacity
        onPress={() => console.log('Botão pressionado!')}
        style={styles.botao}
      >
        <Text style={styles.botaoTexto}>Criar Meu App ✨</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => console.log('Saiba mais!')}
        style={styles.botaoSecundario}
      >
        <Text
          style={styles.botaoSecundarioTexto}
        >
          Saiba mais
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: "center"
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: "#fff",
    marginBottom: 8,
    textAlign: 'center'
  },
  subtitulo: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 24,
    textAlign: 'center'
  },
  botao: {
    backgroundColor: "#7C3AED",
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 50,
    marginBottom: 12
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 16
  },
  botaoSecundario: {
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 50,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#7C3AED'
  },
  botaoSecundarioTexto: {
    color: "#7C3AED",
    fontWeight: 'bold',
    fontSize: 16
  },
});

