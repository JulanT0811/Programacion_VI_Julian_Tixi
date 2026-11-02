// app/index.tsx — añade debajo de styles1
import { StyleSheet, ActivityIndicator, SafeAreaView, FlatList } from 'react-native'
import { useState, useCallback } from 'react'
import {Servidor, SERVIDORES} from './paso1'
import { Paso2Separador } from './paso2Separador'
import { Paso2ListaVacia } from './paso2ListaVacia'
import { Paso1FilaServidor } from './paso1FilaServidor'

// Simula una página extra de servidores (llegará del backend)
const PAGINA_2: Servidor[] = [
  { id: '9',  nombre: 'monitor-01', ip: '10.0.5.10', activo: true  },
  { id: '10', nombre: 'monitor-02', ip: '10.0.5.11', activo: false },
]





export function Paso2() {
  const [datos, setDatos] = useState<Servidor[]>(SERVIDORES)
  const [refrescando, setRefrescando] = useState(false)
  const [cargandoMas, setCargandoMas] = useState(false)
  const [paginaActual, setPaginaActual] = useState(1)

  const onRefresh = useCallback(() => {
    setRefrescando(true)
    // Simula llamada a la API (1 segundo)
    setTimeout(() => {
      setDatos(SERVIDORES) // restaura la lista original
      setPaginaActual(1)
      setRefrescando(false)
    }, 1000)
  }, [])

  const onEndReached = useCallback(() => {
    if (cargandoMas || paginaActual >= 2) return
    setCargandoMas(true)
    setTimeout(() => {
      setDatos((prev) => [...prev, ...PAGINA_2])
      setPaginaActual(2)
      setCargandoMas(false)
    }, 800)
  }, [cargandoMas, paginaActual])

  return (
    <SafeAreaView style={styles2.contenedor}>
      <Text style={styles2.titulo}>Servidores · p.{paginaActual}</Text>
      <FlatList<Servidor>
        data={datos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Paso1FilaServidor servidor={item} />}
        ItemSeparatorComponent={Paso2Separador}
        ListEmptyComponent={<Paso2ListaVacia />}
        refreshing={refrescando}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.3}
        ListFooterComponent={
          cargandoMas ? (
            <ActivityIndicator style={{ margin: 16 }} color="#1565c0" />
          ) : null
        }
      />
    </SafeAreaView>
  )
}

const styles2 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#1565c0',
    color: '#fff',
  },
  Paso2Separador: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 12,
  },
  vacio: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  vacioTexto: { fontSize: 16, fontWeight: '600', color: '#555' },
  vacioSub: { fontSize: 13, color: '#999', marginTop: 6 },
})