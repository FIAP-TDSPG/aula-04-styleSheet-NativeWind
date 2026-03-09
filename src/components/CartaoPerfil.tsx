// ============================================================
// CartaoPerfil.tsx — Cartão com foto, nome e bio
// ============================================================
// O que vamos estilizar aqui:
//   → backgroundColor, borderRadius, padding, margin (card)
//   → shadowColor, shadowOffset, shadowOpacity (sombra iOS)
//   → elevation                               (sombra Android)
//   → flexDirection row + alignItems center   (header)
//   → borderRadius circular na foto           (borderRadius: 30)
//   → flex: 1 no bloco de texto
//   → alignItems center no botão
// ============================================================

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

// ============================================================
// ESTILOS — preencher ao longo da aula
// ============================================================

// TODO: importar StyleSheet do react-native
// import { StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: '#1E2235',
//     borderRadius: 16,
//     padding: 20,
//     margin: 16,
//
//     // ── Sombra iOS (4 propriedades separadas) ──
//     // shadowColor: '#000',
//     // shadowOffset: { width: 0, height: 4 },
//     // shadowOpacity: 0.3,
//     // shadowRadius: 8,
//
//     // ── Sombra Android (uma só propriedade) ──
//     // elevation: 8,
//
//     // ⚠️ Você pode colocar as 5 juntas:
//     // iOS usa as shadow*, Android usa só elevation
//   },
//   header: {
//     // flexDirection: 'row',   ← foto e texto lado a lado
//     // alignItems: 'center',   ← alinha verticalmente no centro
//     // marginBottom: 12,
//   },
//   foto: {
//     // width: 60,
//     // height: 60,
//     // borderRadius: 30,       ← metade de 60 = círculo perfeito
//     // marginRight: 12,
//   },
//   infoTexto: {
//     // flex: 1,                ← ocupa todo o espaço restante
//   },
//   nome: {
//     // fontSize: 18,
//     // fontWeight: 'bold',
//     // color: '#ffffff',
//   },
//   cargo: {
//     // fontSize: 13,
//     // color: '#A78BFA',
//     // marginTop: 2,
//   },
//   bio: {
//     // fontSize: 14,
//     // color: '#9CA3AF',
//     // marginBottom: 16,
//   },
//   botao: {
//     // backgroundColor: '#7C3AED',
//     // borderRadius: 8,
//     // padding: 12,
//     // alignItems: 'center',   ← centraliza o texto dentro do botão
//   },
//   botaoTexto: {
//     // color: '#ffffff',
//     // fontWeight: 'bold',
//     // fontSize: 15,
//   },
// });
