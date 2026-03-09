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

// const styles = StyleSheet.create({
//   container: {
//   },
//   titulo: {
//   },
//   subtitulo: {
//   },
//   botao: {
//   },
//   botaoTexto: {
//   },
//   botaoSecundario: {
//   },
//   botaoSecundarioTexto: {
//   },
// });

