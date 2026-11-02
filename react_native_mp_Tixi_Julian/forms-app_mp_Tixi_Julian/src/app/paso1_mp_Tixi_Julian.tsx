// app/paso1_mp_Tixi_Julian.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Paso1FilaServidor } from './paso1FilaServidor_mp_Tixi_Julian'

export type TicketSoporte = {
  id: string
  codigo: string
  asunto: string
  solicitante: string
  departamento: string
  estado: 'ABIERTO' | 'EN PROCESO' | 'RESUELTO'
}

export const TICKETS_INICIALES: TicketSoporte[] = [
  { id: '1', codigo: 'TCK-101', asunto: 'Falla en acceso a base de datos ERP', solicitante: 'Ana Morales', departamento: 'Finanzas', estado: 'ABIERTO' },
  { id: '2', codigo: 'TCK-102', asunto: 'Impresora de red sin conexión', solicitante: 'Carlos Ruiz', departamento: 'Logística', estado: 'EN PROCESO' },
  { id: '3', codigo: 'TCK-103', asunto: 'Reseteo de contraseña correo corporativo', solicitante: 'Diana Ortiz', departamento: 'RRHH', estado: 'RESUELTO' },
  { id: '4', codigo: 'TCK-104', asunto: 'Lentitud en enlace VPN sucursal norte', solicitante: 'Luis Andrade', departamento: 'Ventas', estado: 'ABIERTO' },
  { id: '5', codigo: 'TCK-105', asunto: 'Instalación de antivirus corporativo', solicitante: 'Mónica Silva', departamento: 'Auditoría', estado: 'RESUELTO' },
  { id: '6', codigo: 'TCK-106', asunto: 'Error en timbrado de facturas electrónicas', solicitante: 'Javier Vega', departamento: 'Facturación', estado: 'EN PROCESO' },
]

export function Paso1() {
  return (
    <SafeAreaView style={styles.contenedor}>
      <View style={styles.cabecera}>
        <Text style={styles.subtitulo}>MESA DE AYUDA · JULIÁN TIXI</Text>
        <Text style={styles.titulo}>Cola de Tickets de Soporte</Text>
      </View>
      <FlatList<TicketSoporte>
        data={TICKETS_INICIALES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Paso1FilaServidor ticket={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  )
}

export default Paso1

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
