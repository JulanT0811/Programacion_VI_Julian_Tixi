// app/paso2_mp_Tixi_Julian.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { useCallback, useState } from 'react'
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Paso1FilaServidor } from './paso1FilaServidor_mp_Tixi_Julian'
import { TicketSoporte, TICKETS_INICIALES } from './paso1_mp_Tixi_Julian'
import { Paso2ListaVacia } from './paso2ListaVacia_mp_Tixi_Julian'
import { Paso2Separador } from './paso2Separador_mp_Tixi_Julian'

// Simula página extra de tickets reportados
const TICKETS_PAGINA_2: TicketSoporte[] = [
  { id: '7', codigo: 'TCK-107', asunto: 'Caída de enlace en switch de piso 3', solicitante: 'Patricio Lara', departamento: 'Sistemas', estado: 'ABIERTO' },
  { id: '8', codigo: 'TCK-108', asunto: 'Reemplazo de batería UPS en rack principal', solicitante: 'Elena Romero', departamento: 'Operaciones', estado: 'EN PROCESO' },
]

export function Paso2() {
  const [datos, setDatos] = useState<TicketSoporte[]>(TICKETS_INICIALES)
  const [refrescando, setRefrescando] = useState(false)
  const [cargandoMas, setCargandoMas] = useState(false)
  const [paginaActual, setPaginaActual] = useState(1)

  const onRefresh = useCallback(() => {
    setRefrescando(true)
    setTimeout(() => {
      setDatos(TICKETS_INICIALES)
      setPaginaActual(1)
      setRefrescando(false)
    }, 1000)
  }, [])

  const onEndReached = useCallback(() => {
    if (cargandoMas || paginaActual >= 2) return
    setCargandoMas(true)
    setTimeout(() => {
      setDatos((prev) => [...prev, ...TICKETS_PAGINA_2])
      setPaginaActual(2)
      setCargandoMas(false)
    }, 800)
  }, [cargandoMas, paginaActual])

  return (
    <SafeAreaView style={styles.contenedor}>
      <View style={styles.cabecera}>
        <Text style={styles.subtitulo}>MESA DE AYUDA · PAGINACIÓN Y RECARGA</Text>
        <Text style={styles.titulo}>Tickets en Gestión · Página {paginaActual}</Text>
      </View>
      <FlatList<TicketSoporte>
        data={datos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Paso1FilaServidor ticket={item} />}
        ItemSeparatorComponent={Paso2Separador}
        ListEmptyComponent={<Paso2ListaVacia />}
        refreshing={refrescando}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.3}
        ListFooterComponent={
          cargandoMas ? (
            <ActivityIndicator style={{ margin: 16 }} color="#0284c7" />
          ) : null
        }
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </SafeAreaView>
  )
}

export default Paso2

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
