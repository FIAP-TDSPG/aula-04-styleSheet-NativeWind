import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export function CartaoProduto() {
  return (
    <View style={styles.card}>

      <View style={styles.imagemWrapper}>

        <Image
          source={{ uri: 'https://picsum.photos/seed/produto/400/200' }}
          style={styles.imagem}
        />

        <View style={styles.badge}>
          <Text style={styles.badgeTexto}>PROMOÇÃO</Text>
        </View>

      </View>

      <View style={styles.info}>

        <Text style={styles.nomeProduto}>Tênis Esportivo Pro</Text>

        <View style={styles.rodape}>

          <Text style={styles.preco}>R$ 199,90</Text>

          <View style={styles.botaoCarrinho}>
            <Text style={styles.botaoCarrinhoTexto}>+ Carrinho</Text>
          </View>

        </View>
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1A1D2E",
    borderRadius: 12,
    margin: 16,
    overflow: 'hidden',

    // Sombra Android
    elevation: 5,

    // Sombra IOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4

  },
  imagemWrapper: {
    position: 'relative'
  },
  imagem: {
    width: '100%',
    height: 160
  },
  badge: {
    position: 'absolute',
    backgroundColor: "#F49E0B",
    top: 8,
    right: 8,
    zIndex: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10
  },
  badgeTexto: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 10
  },
  info: {
    padding: 12
  },
  nomeProduto: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8
  },
  rodape: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  preco: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#10b981"
  },
  botaoCarrinho: {
    backgroundColor: "#7C3AED",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6
  },
  botaoCarrinhoTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 13
  },
});
