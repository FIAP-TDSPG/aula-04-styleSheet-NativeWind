import React from 'react';
import { View, Text, Image } from 'react-native';

export function CartaoProduto() {
  return (
    // TODO: adicionar style={styles.card}
    <View>

      {/* ── Wrapper da imagem (precisa ser 'relative' para o badge funcionar) ── */}
      {/* TODO: adicionar style={styles.imagemWrapper} */}
      {/* position: 'relative' é o PADRÃO — mas colocamos explícito para lembrar */}
      <View>

        {/* Imagem do produto */}
        {/* TODO: adicionar style={styles.imagem} */}
        <Image
          source={{ uri: 'https://picsum.photos/seed/produto/400/200' }}
        // style={styles.imagem}
        />

        {/* Badge PROMOÇÃO — fica no canto superior direito */}
        {/* TODO: adicionar style={styles.badge} */}
        {/*
          position: 'absolute' → sai do fluxo do Flexbox
          top: 8, right: 8    → distância das bordas do pai
          zIndex: 10          → fica na frente de tudo
        */}
        <View>
          {/* TODO: adicionar style={styles.badgeTexto} */}
          <Text>PROMOÇÃO</Text>
        </View>

      </View>

      {/* ── Informações do produto ───────────────────────── */}
      {/* TODO: adicionar style={styles.info} */}
      <View>

        {/* TODO: adicionar style={styles.nomeProduto} */}
        <Text>Tênis Esportivo Pro</Text>

        {/* ── Linha de preço + botão lado a lado ─────────── */}
        {/* TODO: adicionar style={styles.rodape} */}
        {/* Queremos: flexDirection row, space-between, alignItems center */}
        <View>

          {/* TODO: adicionar style={styles.preco} */}
          <Text>R$ 199,90</Text>

          {/* TODO: adicionar style={styles.botaoCarrinho} */}
          <View>
            {/* TODO: adicionar style={styles.botaoCarrinhoTexto} */}
            <Text>+ Carrinho</Text>
          </View>

        </View>
      </View>

    </View>
  );
}
// const styles = StyleSheet.create({
//   card: {
//   },
//   imagemWrapper: {
//   },
//   imagem: {
//   },
//   badge: {
//   },
//   badgeTexto: {
//   },
//   info: {
//   },
//   nomeProduto: {
//   },
//   rodape: {
//   },
//   preco: {
//   },
//   botaoCarrinho: {
//   },
//   botaoCarrinhoTexto: {
//   },
// });
