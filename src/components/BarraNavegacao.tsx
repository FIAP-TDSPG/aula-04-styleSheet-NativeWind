import React from 'react';
import { View, Text } from 'react-native';

export function BarraNavegacao() {
  return (
    // TODO: adicionar style={styles.container}
    // Queremos: flexDirection row, space-between, padding 16
    <View>

      {/* Logo — lado esquerdo */}
      {/* TODO: adicionar style={styles.logo} */}
      <Text>🏠 MeuApp</Text>

      {/* Grupo de botões — lado direito */}
      {/* TODO: adicionar style={styles.grupoBotoes} */}
      {/* Queremos: flexDirection row, gap 12 */}
      <View>

        {/* TODO: adicionar style={styles.botao} */}
        <Text>Buscar</Text>

        {/* TODO: adicionar style={styles.botao} */}
        <Text>Perfil</Text>

      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//   },
//   logo: {
//   },
//   grupoBotoes: {
//   },
//   botao: {
//   },
// });
