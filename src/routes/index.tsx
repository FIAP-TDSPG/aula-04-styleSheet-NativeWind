import { ScrollView, View } from "react-native"
import { BarraNavegacao } from "../components/BarraNavegacao"
import { CartaoPerfil } from "../components/CartaoPerfil"
import { CartaoProduto } from "../components/CartaoProduto"
import { BotaoAcao } from "../components/BotaoAcao"
import { CORES } from "../styles/cores"

export default function Routes() {
  // const { top } = useSafeAreaInsets();

  return (
    <View
      // style={{
      //   flex: 1,
      //   // marginTop: top
      //   // paddingTop: top,
      //   backgroundColor: CORES.fundoEscuro
      // }}
      className={`flex bg-[${CORES.fundoEscuro}]`}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <BarraNavegacao />

        <CartaoPerfil />

        <CartaoProduto />

        <BotaoAcao />

      </ScrollView >
    </View>
  )
}