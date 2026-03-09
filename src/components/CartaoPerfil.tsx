import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export function CartaoPerfil() {
  return (
    <View style={styles.card}>
      <View style={styles.header}>

        <Image
          source={{ uri: 'https://i.pravatar.cc/100' }}
          style={styles.foto}
        />

        <View style={styles.infoTexto}>

          <Text style={styles.nome} >Ana Silva</Text>

          <Text style={styles.cargo}>Dev React Native</Text>

        </View>
      </View>

      <Text style={styles.bio}>Apaixonada por mobile e UI bonita ✨</Text>

      <View style={styles.botao}>
        <Text style={styles.botaoTexto}>Ver Perfil</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1A1D2E",
    borderRadius: 16,
    padding: 20,
    margin: 16,

    // Sombras IOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,

    // Sombra Android
    elevation: 8

  },
  header: {
    flexDirection: "row",
    alignContent: "center",
    marginBottom: 12
  },
  foto: {
    width: 60,
    height: 60,
    borderRadius: 20,
    marginRight: 12
  },
  infoTexto: {
    flex: 1,
    // gap: 2
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#fff"
  },
  cargo: {
    fontSize: 13,
    color: "#a78bfa",
    marginTop: 2
  },
  bio: {
    fontSize: 14,
    color: "#9ca3af",
    marginBottom: 16
  },
  botao: {
    backgroundColor: "#7C3AED",
    borderRadius: 8,
    padding: 12,
    alignItems: 'center'
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15
  },
});
