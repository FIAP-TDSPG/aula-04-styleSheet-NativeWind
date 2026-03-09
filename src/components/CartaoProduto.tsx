// ============================================================
// CartaoProduto.tsx — Cartão de produto com badge de promoção
// ============================================================
// O que vamos estilizar aqui:
//   → position: 'relative' no wrapper  (container do badge)
//   → position: 'absolute' no badge    (sai do fluxo normal)
//   → top, right, zIndex no badge      (posiciona no canto)
//   → width: '100%' na imagem
//   → flexDirection row para preço + botão
// ============================================================

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

// ============================================================
// ESTILOS — preencher ao longo da aula
// ============================================================

// TODO: importar StyleSheet do react-native
// import { StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//   card: {
//     // backgroundColor: '#1E2235',
//     // borderRadius: 12,
//     // margin: 16,
//     // overflow: 'hidden',     ← garante que a imagem respeite o borderRadius
//     // elevation: 5,
//     // shadowColor: '#000',
//     // shadowOffset: { width: 0, height: 2 },
//     // shadowOpacity: 0.25,
//     // shadowRadius: 4,
//   },
//   imagemWrapper: {
//     // position: 'relative',   ← padrão, mas explícito para o badge funcionar
//   },
//   imagem: {
//     // width: '100%',
//     // height: 160,
//   },
//   badge: {
//     // position: 'absolute',   ← sai do fluxo do Flexbox
//     // top: 8,                 ← 8px da borda de cima do pai
//     // right: 8,               ← 8px da borda direita do pai
//     // zIndex: 10,             ← fica na frente da imagem
//     // backgroundColor: '#F59E0B',
//     // paddingHorizontal: 8,
//     // paddingVertical: 4,
//     // borderRadius: 4,
//   },
//   badgeTexto: {
//     // color: '#000000',
//     // fontWeight: 'bold',
//     // fontSize: 10,
//   },
//   info: {
//     // padding: 12,
//   },
//   nomeProduto: {
//     // fontSize: 16,
//     // fontWeight: 'bold',
//     // color: '#ffffff',
//     // marginBottom: 8,
//   },
//   rodape: {
//     // flexDirection: 'row',
//     // justifyContent: 'space-between',
//     // alignItems: 'center',
//   },
//   preco: {
//     // fontSize: 18,
//     // fontWeight: 'bold',
//     // color: '#10B981',       ← verde para destaque de preço
//   },
//   botaoCarrinho: {
//     // backgroundColor: '#7C3AED',
//     // paddingHorizontal: 16,
//     // paddingVertical: 8,
//     // borderRadius: 6,
//   },
//   botaoCarrinhoTexto: {
//     // color: '#ffffff',
//     // fontWeight: 'bold',
//     // fontSize: 13,
//   },
// });
