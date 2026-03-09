import React from 'react';
import { View, Text, Image } from 'react-native';

export function CartaoPerfil() {
  return (
    // TODO: adicionar style={styles.card}
    // Queremos: fundo escuro, cantos arredondados, padding, sombra
    <View>

      {/* ── Linha do topo: foto + nome/cargo ────────────────── */}
      {/* TODO: adicionar style={styles.header} */}
      {/* Queremos: flexDirection row, alignItems center */}
      <View>

        {/* Foto — precisa ser circular */}
        {/* TODO: adicionar style={styles.foto} */}
        {/* borderRadius: 30 = metade de width/height (60) = círculo */}
        <Image
          source={{ uri: 'https://i.pravatar.cc/100' }}
        // style={styles.foto}
        />

        {/* Bloco de texto ao lado da foto */}
        {/* TODO: adicionar style={styles.infoTexto} */}
        {/* flex: 1 faz ele ocupar o espaço que sobrou */}
        <View>

          {/* TODO: adicionar style={styles.nome} */}
          <Text>Ana Silva</Text>

          {/* TODO: adicionar style={styles.cargo} */}
          <Text>Dev React Native</Text>

        </View>
      </View>

      {/* ── Bio ─────────────────────────────────────────────── */}
      {/* TODO: adicionar style={styles.bio} */}
      <Text>Apaixonada por mobile e UI bonita ✨</Text>

      {/* ── Botão ───────────────────────────────────────────── */}
      {/* TODO: adicionar style={styles.botao} */}
      {/* alignItems: 'center' centraliza o texto dentro do botão */}
      <View>
        {/* TODO: adicionar style={styles.botaoTexto} */}
        <Text>Ver Perfil</Text>
      </View>

    </View>
  );
}

// const styles = StyleSheet.create({
//   card: {
//   },
//   header: {
//   },
//   foto: {
//   },
//   infoTexto: {
//   },
//   nome: {
//   },
//   cargo: {
//   },
//   bio: {
//   },
//   botao: {
//   },
//   botaoTexto: {
//   },
// });
