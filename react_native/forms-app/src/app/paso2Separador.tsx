// app/index.tsx — añade debajo de styles1
import { StyleSheet, View} from 'react-native'



export function Paso2Separador() {
  return <View style={styles2.separador} />
}
const styles2 = StyleSheet.create({

  separador: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 12,
  },

})