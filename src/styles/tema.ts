export const tema = {
  tela: {
    fundo: 'flex-1 bg-[#0F1117]',
    segura: 'flex-1 bg-[#0F1117]',
    conteudo: 'flex-1 px-4',
  },
  card: {
    container: 'bg-[#1E2235] rounded-2xl p-5 mx-4 mb-4',
    titulo: 'text-white text-lg font-bold mb-1',
    subtitulo: 'text-gray-400 text-sm',
  },
  nav: {
    container: 'flex-row justify-between items-center bg-[#1A1D2E] px-4 py-3',

    logo: 'text-white text-lg font-bold',

    grupo: 'flex-row gap-3',

    botao: 'text-purple-400 text-sm',
  },


  texto: {
    titulo: 'text-white text-xl font-bold',

    subtitulo: 'text-purple-400 text-sm mt-0.5',

    corpo: 'text-gray-400 text-sm leading-5',

    label: 'text-xs font-bold',

    preco: 'text-green-500 text-lg font-bold',
  },

  botao: {
    // botão primário (preenchido)
    primario: 'bg-purple-600 px-8 py-3 rounded-full items-center',
    primarioTexto: 'text-white font-bold text-base',

    // botão secundário (só borda)
    secundario: 'border border-purple-600 px-8 py-3 rounded-full items-center',
    secundarioTexto: 'text-purple-500 font-bold text-base',

    // botão pequeno (dentro de card)
    pequeno: 'bg-purple-600 px-4 py-2 rounded-md items-center',
    pequenoTexto: 'text-white font-bold text-sm',

    // botão de perigo / cancelar
    perigo: 'bg-red-600 px-8 py-3 rounded-full items-center',
    perigoTexto: 'text-white font-bold text-base',
  },
  badge: {
    container: 'absolute top-2 right-2 z-10 bg-amber-500 px-2 py-1 rounded',
    texto: 'text-black text-xs font-bold',

    containerRoxo: 'absolute top-2 right-2 z-10 bg-purple-600 px-2 py-1 rounded',
    textoRoxo: 'text-white text-xs font-bold',
  },

  avatar: {
    pequeno: 'w-10 h-10 rounded-full',

    medio: 'w-15 h-15 rounded-full mr-3',

    grande: 'w-20 h-20 rounded-full',
  },

  layout: {
    linha: 'flex-row items-center',

    linhaSeparada: 'flex-row items-center justify-between',

    centralizado: 'flex-1 items-center justify-center',

    secao: 'mb-6',
  },

  divisor: 'border-b border-gray-800 my-3',

};