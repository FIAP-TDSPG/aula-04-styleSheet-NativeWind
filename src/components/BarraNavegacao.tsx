import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function BarraNavegacao() {
  const { top } = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: Platform.OS === "ios" ? top : top + 10,
        }
      ]}
    >
      <Text style={styles.logo}>🏠 MeuApp</Text>

      <View style={styles.grupoBotoes}>

        <Text style={styles.botao}>Buscar</Text>

        <Text style={styles.botao}>Perfil</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#1A1D2E"
  },
  logo: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold"
  },
  grupoBotoes: {
    flexDirection: "row",
    gap: 12
  },
  botao: {
    fontSize: 12,
    color: "#a78bfa"
  },
});
