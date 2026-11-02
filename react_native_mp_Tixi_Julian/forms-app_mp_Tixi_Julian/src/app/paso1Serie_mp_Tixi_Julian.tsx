// app/paso1Serie_mp_Tixi_Julian.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Paso1SerieServidor } from './paso1SerieServidor_mp_Tixi_Julian'

export type TecnicoGuardia = {
  id: string
  nombre: string
  especialidad: string
  extension: number
  disponible: boolean
}

export const TECNICOS_GUARDIA: TecnicoGuardia[] = [
  { id: '1', nombre: 'Julián Oswaldo Tixi', especialidad: 'Soporte N2 · Redes y Servidores', extension: 201, disponible: true },
  { id: '2', nombre: 'Carlos Mendoza', especialidad: 'Soporte N1 · Hardware y Periféricos', extension: 202, disponible: false },
  { id: '3', nombre: 'Sofía Paredes', especialidad: 'Soporte N3 · Ciberseguridad e Infraestructura', extension: 203, disponible: true },
  { id: '4', nombre: 'David Morales', especialidad: 'Mesa de Ayuda · Cuentas y Accesos', extension: 204, disponible: true },
]

export function Paso1Serie() {
  return (
    <SafeAreaView style={styles.contenedor}>
      <View style={styles.cabecera}>
        <Text style={styles.subtitulo}>PERSONAL DE TURNO</Text>
        <Text style={styles.titulo}>Técnicos de Soporte en Guardia</Text>
      </View>
      <FlatList<TecnicoGuardia>
        data={TECNICOS_GUARDIA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Paso1SerieServidor tecnico={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  )
}

export default Paso1Serie

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f1f5f9' },
  cabecera: {
    padding: 18,
    backgroundColor: '#0284c7',
  },
  subtitulo: {
    fontSize: 11,
    fontWeight: '700',
    color: '#bae6fd',
    letterSpacing: 0.5,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
    marginTop: 2,
  },
})
