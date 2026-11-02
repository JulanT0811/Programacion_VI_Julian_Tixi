// app/index.tsx — añade esto debajo de los estilos
import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native'
import { Paso1SerieServidor } from './paso1Serie'

type Pirata = {
  id: string
  nombre: string
  Barco: string
}

const PIRATAS: Pirata[] = [
  { id: '1', nombre: 'Monky D. Luffy',   Barco: 'Sunny Go' },
  { id: '2', nombre: 'Gold D. Roger',   Barco: 'Oro Jackson' },
  { id: '3', nombre: 'Shirogigue', Barco: 'Moby Dick' },

]



export function Paso1Serie() {
  return (
    <SafeAreaView style={styles1.contenedor}>
      <Text style={styles1.titulo}>Inventario de PIRATAS</Text>
      <FlatList<Pirata>
        data={PIRATAS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Paso1SerieServidor Pirata={item} />}
      />
    </SafeAreaView>
  )
}

const styles1 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#1565c0',
    color: '#fff',
  },
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 12,
    marginTop: 8,
    borderRadius: 8,
    padding: 12,
  },
  info: { flex: 1 },
  nombre: { fontSize: 15, fontWeight: '600', color: '#1a1a1a' },
  ip: { fontSize: 12, color: '#666', marginTop: 2 },
  estado: {
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  estadoActivo: { backgroundColor: '#e8f5e9' },
  estadoInactivo: { backgroundColor: '#ffebee' },
  textoEstado: { fontSize: 11, fontWeight: '700' },
})