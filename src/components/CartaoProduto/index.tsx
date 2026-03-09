import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { styles } from './styles';

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

