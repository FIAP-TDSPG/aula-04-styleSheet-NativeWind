import React from 'react';

import { ScrollView } from 'react-native';

import { CartaoPerfil } from './src/components/CartaoPerfil';
import { BarraNavegacao } from './src/components/BarraNavegacao';
import { CartaoProduto } from './src/components/CartaoProduto';
import { BotaoAcao } from './src/components/BotaoAcao';
import { SafeAreaView, SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { CORES } from './src/styles/cores';
import Routes from './src/routes';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  return (
    <SafeAreaProvider>
      <Routes />

      <StatusBar style='light' />
    </SafeAreaProvider>
  );
}
