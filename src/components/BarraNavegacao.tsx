// ============================================================
// BarraNavegacao.tsx — Componente de barra de navegação
// ============================================================
// O que vamos estilizar aqui:
//   → flexDirection: 'row'       (logo e botões lado a lado)
//   → justifyContent: 'space-between' (empurrar para as pontas)
//   → alignItems: 'center'       (centralizar verticalmente)
//   → backgroundColor, padding
// ============================================================

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

// ============================================================
// ESTILOS — preencher ao longo da aula
// ============================================================

// TODO: importar StyleSheet do react-native e criar os estilos
// import { StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     // Passo 1: deixar os filhos lado a lado
//     // flexDirection: 'row',
//
//     // Passo 2: empurrar logo e botões para os extremos
//     // justifyContent: 'space-between',
//
//     // Passo 3: centralizar verticalmente
//     // alignItems: 'center',
//
//     // Passo 4: espaçamento e cor de fundo
//     // padding: 16,
//     // backgroundColor: '#1A1D2E',
//   },
//   logo: {
//     // fontSize: 18,
//     // fontWeight: 'bold',
//     // color: '#ffffff',
//   },
//   grupoBotoes: {
//     // flexDirection: 'row',
//     // gap: 12,          ← espaço automático entre os botões (RN 0.71+)
//   },
//   botao: {
//     // fontSize: 14,
//     // color: '#A78BFA',
//   },
// });
