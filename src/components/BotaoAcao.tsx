// ============================================================
// BotaoAcao.tsx — Botão de ação centralizado
// ============================================================
// O que vamos estilizar aqui:
//   → alignItems: 'center' no container (centraliza o botão)
//   → borderRadius alto                 (botão pill/arredondado)
//   → padding horizontal e vertical separados
//
// BÔNUS — versão com NativeWind:
//   Depois de estilizar com StyleSheet, refatoramos para
//   className= e comparamos as duas abordagens lado a lado
// ============================================================

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export function BotaoAcao() {
  return (
    // TODO: adicionar style={styles.container}
    // Queremos: padding 24, alignItems center
    <View>

      {/* Título da seção */}
      {/* TODO: adicionar style={styles.titulo} */}
      <Text>Pronto para começar?</Text>

      {/* Subtítulo */}
      {/* TODO: adicionar style={styles.subtitulo} */}
      <Text>Crie seu primeiro app estilizado</Text>

      {/* ── Botão principal ─────────────────────────────── */}
      {/* TouchableOpacity: igual ao View, mas responde ao toque */}
      {/* TODO: adicionar style={styles.botao} */}
      <TouchableOpacity onPress={() => console.log('Botão pressionado!')}>

        {/* TODO: adicionar style={styles.botaoTexto} */}
        <Text>Criar Meu App ✨</Text>

      </TouchableOpacity>

      {/* ── Botão secundário (outline) ──────────────────── */}
      {/* Demonstra: backgroundColor transparente + borda */}
      {/* TODO: adicionar style={styles.botaoSecundario} */}
      <TouchableOpacity onPress={() => console.log('Saiba mais!')}>

        {/* TODO: adicionar style={styles.botaoSecundarioTexto} */}
        <Text>Saiba mais</Text>

      </TouchableOpacity>

    </View>
  );
}

// ============================================================
// ESTILOS — preencher ao longo da aula
// ============================================================

// TODO: importar StyleSheet do react-native
// import { StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     // padding: 24,
//     // alignItems: 'center',   ← centraliza os filhos horizontalmente
//   },
//   titulo: {
//     // fontSize: 22,
//     // fontWeight: 'bold',
//     // color: '#ffffff',
//     // marginBottom: 8,
//     // textAlign: 'center',
//   },
//   subtitulo: {
//     // fontSize: 14,
//     // color: '#9CA3AF',
//     // marginBottom: 24,
//     // textAlign: 'center',
//   },
//   botao: {
//     // backgroundColor: '#7C3AED',
//     // paddingHorizontal: 32,   ← padding só horizontal (esquerda/direita)
//     // paddingVertical: 14,     ← padding só vertical (cima/baixo)
//     // borderRadius: 50,        ← valor alto = botão pill (pílula)
//     // marginBottom: 12,
//   },
//   botaoTexto: {
//     // color: '#ffffff',
//     // fontWeight: 'bold',
//     // fontSize: 16,
//   },
//   botaoSecundario: {
//     // paddingHorizontal: 32,
//     // paddingVertical: 14,
//     // borderRadius: 50,
//     // borderWidth: 1,          ← largura da borda
//     // borderColor: '#7C3AED',  ← cor da borda
//   },
//   botaoSecundarioTexto: {
//     // color: '#7C3AED',
//     // fontWeight: 'bold',
//     // fontSize: 16,
//   },
// });

// ============================================================
// VERSÃO NATIVEWIND (para mostrar depois do StyleSheet)
// ============================================================
//
// Depois de estilizar com StyleSheet, mostre esta versão
// e compare as duas abordagens lado a lado.
//
// <View className="p-6 items-center">
//
//   <Text className="text-2xl font-bold text-white mb-2 text-center">
//     Pronto para começar?
//   </Text>
//
//   <Text className="text-sm text-gray-400 mb-6 text-center">
//     Crie seu primeiro app estilizado
//   </Text>
//
//   <TouchableOpacity
//     className="bg-purple-600 px-8 py-3 rounded-full mb-3"
//     onPress={() => console.log('Botão pressionado!')}
//   >
//     <Text className="text-white font-bold text-base">
//       Criar Meu App ✨
//     </Text>
//   </TouchableOpacity>
//
//   <TouchableOpacity
//     className="px-8 py-3 rounded-full border border-purple-600"
//     onPress={() => console.log('Saiba mais!')}
//   >
//     <Text className="text-purple-500 font-bold text-base">
//       Saiba mais
//     </Text>
//   </TouchableOpacity>
//
// </View>
