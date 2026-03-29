# EstilizacaoApp 🎨

Projeto base da aula de **Estilização no React Native**.

## Objetivo da aula

Aprender a montar interfaces reutilizáveis e bem organizadas no React Native, aplicando estilos com:

- `StyleSheet` (estilos locais, composição e organização)
- Flexbox (layout em linha/coluna, alinhamento e espaçamento)
- Posicionamento (incluindo `position: absolute`)
- Sombra e “cartões” (visuais comuns em apps)
- Constantes de tema (cores centralizadas)

Como bônus, você também verá como aplicar estilos utilitários usando **NativeWind** (inspirado no Tailwind).

## Como rodar

```bash
npm install
npx expo start
```

Abra no **Expo Go** (celular) ou no simulador.

---

## Estrutura do projeto

```
EstilizacaoApp/
├── App.tsx                          ← ponto de entrada
└── src/
    ├── components/
    │   ├── BarraNavegacao.tsx       ← Slide 6-8: Flexbox row
    │   ├── CartaoPerfil.tsx         ← Slide 3-5: StyleSheet + sombra
    │   ├── CartaoProduto.tsx        ← Slide 14: position absolute
    │   └── BotaoAcao.tsx           ← Slide 9-11: NativeWind bônus
    └── styles/
        └── cores.ts                 ← constantes de cores
```

## Para instalar o NativeWind (bônus)

```bash
npx expo install nativewind
npx expo install --dev tailwindcss

# Depois configure tailwind.config.js e babel.config.js
# conforme o Slide 9 da apresentação
```
