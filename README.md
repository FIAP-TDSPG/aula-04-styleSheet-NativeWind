# EstilizacaoApp 🎨

Projeto base da aula de **Estilização no React Native**.

## Como rodar

```bash
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

---

## Roteiro da aula

Cada componente tem os `// TODO:` comentados indicando
o que adicionar em cada momento da aula.

| Componente        | Conceito principal            | Slide |
|-------------------|-------------------------------|-------|
| `BarraNavegacao`  | `flexDirection`, `gap`        | 6–8   |
| `CartaoPerfil`    | StyleSheet, sombra, `flex: 1` | 3–5   |
| `CartaoProduto`   | `position: 'absolute'`        | 14    |
| `BotaoAcao`       | NativeWind vs StyleSheet      | 9–11  |

---

## Para instalar o NativeWind (bônus)

```bash
npx expo install nativewind
npx expo install --dev tailwindcss

# Depois configure tailwind.config.js e babel.config.js
# conforme o Slide 9 da apresentação
```
# aula-04-styleSheet-NativeWind
