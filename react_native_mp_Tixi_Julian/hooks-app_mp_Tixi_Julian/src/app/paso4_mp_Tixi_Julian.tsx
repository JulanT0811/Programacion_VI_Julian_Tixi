// app/paso4.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { useColorScheme, useWindowDimensions } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

// ─── Paso 4 — Hooks nativos: Dimensiones y Tema en Soporte Técnico ────

export default function Paso4() {
  const { width, height, scale } = useWindowDimensions()
  const esquema = useColorScheme() // 'light' | 'dark' | null

  // Paleta dinámica según el modo claro/oscuro del dispositivo
  const colores = {
    fondo:   esquema === 'dark' ? '#0f172a' : '#f8fafc',
    tarjeta: esquema === 'dark' ? '#1e293b' : '#ffffff',
    texto:   esquema === 'dark' ? '#f8fafc' : '#0f172a',
    detalle: esquema === 'dark' ? '#94a3b8' : '#64748b',
    borde:   esquema === 'dark' ? '#334155' : '#e2e8f0',
  }

  // Layout adaptativo: 1 columna en pantallas angostas, 2 en anchas
  const columnas = width > 500 ? 2 : 1
  const anchoTarjeta = (width - 48 - (columnas - 1) * 12) / columnas

  const nodosSoporte = [
    { nombre: 'srv-helpdesk-01', ip: '10.0.2.10', servicio: 'Portal de Tickets', estado: 'activo' },
    { nombre: 'srv-tickets-db',  ip: '10.0.2.20', servicio: 'Base PostgreSQL',  estado: 'activo' },
    { nombre: 'srv-ldap-auth',   ip: '10.0.2.30', servicio: 'Active Directory', estado: 'falla' },
    { nombre: 'srv-backup-it',   ip: '10.0.2.40', servicio: 'Copias de Seguridad', estado: 'activo' },
  ]

  return (
    <View style={[styles.contenedor, { backgroundColor: colores.fondo }]}>
      <Text style={[styles.badge, { backgroundColor: esquema === 'dark' ? '#0369a1' : '#e0f2fe' }]}>
        INFRAESTRUCTURA DE SOPORTE TÉCNICO
      </Text>
      <Text style={[styles.titulo, { color: colores.texto }]}>
        Nodos de la Mesa de Ayuda
      </Text>

      {/* Información de pantalla con useWindowDimensions */}
      <View
        style={[
          styles.tarjeta,
          {
            backgroundColor: colores.tarjeta,
            borderColor: colores.borde,
            width: '100%',
          },
        ]}
      >
        <Text style={[styles.infoPantalla, { color: colores.detalle }]}>
          Resolución: {Math.round(width)} × {Math.round(height)} dp · Escala: {scale.toFixed(1)} · Tema: {esquema ?? 'sin preferencia'}
        </Text>
      </View>

      {/* Grid de servidores con columnas adaptativas */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12, width: '100%' }}>
        {nodosSoporte.map(nodo => (
          <View
            key={nodo.nombre}
            style={[
              styles.tarjeta,
              {
                backgroundColor: colores.tarjeta,
                borderColor: colores.borde,
                width: anchoTarjeta,
              },
            ]}
          >
            <Text style={[styles.nombreServidor, { color: colores.texto }]}>
              {nodo.nombre}
            </Text>
            <Text style={[styles.ipServidor, { color: colores.detalle }]}>
              {nodo.ip} · {nodo.servicio}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '700',
                marginTop: 4,
                color: nodo.estado === 'activo' ? '#15803d' : '#b91c1c',
              }}
            >
              {nodo.estado === 'activo' ? '● OPERATIVO' : '✕ ALERTA DE FALLA'}
            </Text>
          </View>
        ))}
      </View>

      {/* Nota técnica */}
      <View style={[styles.nota, { borderColor: colores.borde }]}>
        <Text style={[styles.notaTexto, { color: colores.detalle }]}>
          💡 useWindowDimensions() & useColorScheme(): permiten adaptar dinámicamente la interfaz del sistema de soporte según las dimensiones de la pantalla y el modo oscuro/claro del sistema operativo.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    gap: 14,
  },
  badge: {
    fontSize: 11,
    fontWeight: '700',
    color: '#0284c7',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  tarjeta: {
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    gap: 4,
  },
  infoPantalla: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
  nombreServidor: {
    fontSize: 15,
    fontWeight: '700',
  },
  ipServidor: {
    fontSize: 12,
  },
  nota: {
    width: '100%',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'dashed',
    marginTop: 6,
  },
  notaTexto: {
    fontSize: 11,
    lineHeight: 16,
  },
})