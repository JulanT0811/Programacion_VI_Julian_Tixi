// app/paso4_detalle_mp_Tixi_Julian.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { router } from 'expo-router'
import { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

interface DetalleServidorSoporte {
  id: string
  nombre: string
  ip: string
  sistema: string
  cpu: string
  ram: string
  disco: string
  puertos: string[]
  sla: string
  estado: string
  tecnicoAsignado: string
  ultimaIncidencia: string
}

const SERVIDORES_DETALLES: Record<string, DetalleServidorSoporte> = {
  '1': {
    id: '1',
    nombre: 'srv-web-01 (Portal HelpDesk)',
    ip: '10.0.2.10',
    sistema: 'Ubuntu 24.04 LTS (Kernel 6.8)',
    cpu: '4 vCPU · 38% uso',
    ram: '8 GB · 2.9 GB utilizados',
    disco: '100 GB NVMe · 41 GB libres',
    puertos: ['22 (SSH)', '80 (HTTP)', '443 (HTTPS)', '3000 (Node.js)'],
    sla: '99.98% (Óptimo)',
    estado: 'ACTIVO',
    tecnicoAsignado: 'Ing. Julián Oswaldo Tixi Páez',
    ultimaIncidencia: 'Certificado SSL renovado automáticamente hace 2 días',
  },
  '2': {
    id: '2',
    nombre: 'srv-db-primary (PostgreSQL)',
    ip: '10.0.2.20',
    sistema: 'Debian 12 Bookworm',
    cpu: '8 vCPU · 72% uso',
    ram: '32 GB · 18.4 GB utilizados',
    disco: '500 GB RAID-10 · 213 GB libres',
    puertos: ['22 (SSH)', '5432 (PostgreSQL)'],
    sla: '99.99% (Excelente)',
    estado: 'ACTIVO',
    tecnicoAsignado: 'Ing. Julián Oswaldo Tixi Páez',
    ultimaIncidencia: 'Optimización de índices de tickets completada',
  },
  '3': {
    id: '3',
    nombre: 'srv-cache-01 (Redis In-Memory)',
    ip: '10.0.2.30',
    sistema: 'Alpine Linux 3.19',
    cpu: '2 vCPU · 15% uso',
    ram: '4 GB · 3.1 GB utilizados',
    disco: '20 GB · 17 GB libres',
    puertos: ['22 (SSH)', '6379 (Redis)', '26379 (Sentinel)'],
    sla: '98.50% (Atención)',
    estado: 'DEGRADADO',
    tecnicoAsignado: 'Ing. Julián Oswaldo Tixi Páez',
    ultimaIncidencia: 'Consumo de memoria próximo al límite 85%',
  },
  '4': {
    id: '4',
    nombre: 'srv-worker-01 (Cola Notificaciones)',
    ip: '10.0.2.40',
    sistema: 'Ubuntu 22.04 LTS',
    cpu: '4 vCPU · 94% saturación',
    ram: '16 GB · 15.2 GB saturados',
    disco: '200 GB · 8 GB libres (Alerta Crítica)',
    puertos: ['22 (SSH)', '4001 (Worker-Queue)'],
    sla: '92.10% (Crítico)',
    estado: 'ERROR',
    tecnicoAsignado: 'Ing. Julián Oswaldo Tixi Páez',
    ultimaIncidencia: 'Falla en el envío de emails de notificación de SLA',
  },
  '5': {
    id: '5',
    nombre: 'srv-storage-nas (Respaldos)',
    ip: '10.0.2.50',
    sistema: 'TrueNAS Scale 24',
    cpu: '2 vCPU · 5% uso',
    ram: '8 GB · 1.1 GB utilizados',
    disco: '20 TB ZFS · 14.2 TB libres',
    puertos: ['22 (SSH)', '445 (SMB)', '2049 (NFS)'],
    sla: '100% (Perfecto)',
    estado: 'ACTIVO',
    tecnicoAsignado: 'Ing. Julián Oswaldo Tixi Páez',
    ultimaIncidencia: 'Snapshot nocturno completado sin anomalías',
  },
}

function FilaMetrica({ etiqueta, valor }: { etiqueta: string; valor: string }) {
  return (
    <View style={styles.filaMetrica}>
      <Text style={styles.etiqueta}>{etiqueta}</Text>
      <Text style={styles.valor}>{valor}</Text>
    </View>
  )
}

export function Paso4Detalle() {
  const [servidorId, setServidorId] = useState<string>('1')
  const srv = SERVIDORES_DETALLES[servidorId] || SERVIDORES_DETALLES['1']

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.contenido}>
      <View style={styles.cabecera}>
        <Text style={styles.subtitulo}>RUTAS DINÁMICAS · VISOR DE PARÁMETROS</Text>
        <Text style={styles.titulo}>Detalle de Nodo / Servidor</Text>
        <Text style={styles.tecnico}>Soporte Técnico: {srv.tecnicoAsignado}</Text>
      </View>

      {/* Selector de servidor para simulación de parámetros */}
      <View style={styles.selectorContenedor}>
        <Text style={styles.selectorTitulo}>Simular Navegación a Nodo:</Text>
        <View style={styles.botonesSelector}>
          {Object.keys(SERVIDORES_DETALLES).map((id) => (
            <Pressable
              key={id}
              style={[styles.botonId, servidorId === id && styles.botonIdActivo]}
              onPress={() => setServidorId(id)}
            >
              <Text style={[styles.textoId, servidorId === id && styles.textoIdActivo]}>
                Nodo #{id}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      {/* Tarjeta Resumen */}
      <View style={styles.tarjetaEncabezado}>
        <View style={styles.filaEstado}>
          <Text style={styles.nombreServidor}>{srv.nombre}</Text>
          <View
            style={[
              styles.badgeEstado,
              {
                backgroundColor:
                  srv.estado === 'ACTIVO'
                    ? '#15803d'
                    : srv.estado === 'DEGRADADO'
                    ? '#b45309'
                    : '#b91c1c',
              },
            ]}
          >
            <Text style={styles.badgeTexto}>{srv.estado}</Text>
          </View>
        </View>
        <Text style={styles.ipServidor}>IP Asignada: {srv.ip}</Text>
        <Text style={styles.sistemaServidor}>{srv.sistema}</Text>
      </View>

      {/* Métricas de Hardware */}
      <View style={styles.seccion}>
        <Text style={styles.seccionTitulo}>MÉTRICAS DE RENDIMIENTO</Text>
        <FilaMetrica etiqueta="Procesador CPU" valor={srv.cpu} />
        <FilaMetrica etiqueta="Memoria RAM" valor={srv.ram} />
        <FilaMetrica etiqueta="Almacenamiento" valor={srv.disco} />
        <FilaMetrica etiqueta="Cumplimiento SLA" valor={srv.sla} />
      </View>

      {/* Red y Puertos */}
      <View style={styles.seccion}>
        <Text style={styles.seccionTitulo}>SERVICIOS DE RED Y PUERTOS</Text>
        {srv.puertos.map((p) => (
          <FilaMetrica key={p} etiqueta="Servicio activo" valor={p} />
        ))}
      </View>

      {/* Historial de Incidencia */}
      <View style={styles.seccion}>
        <Text style={styles.seccionTitulo}>ÚLTIMA INCIDENCIA REPORTADA</Text>
        <Text style={styles.incidencia}>{srv.ultimaIncidencia}</Text>
      </View>

      {/* Botones de acción del Router */}
      <View style={styles.botonera}>
        <Text style={styles.botoneraTitulo}>Acciones Expo Router:</Text>
        <Pressable
          style={styles.botonAccion}
          onPress={() => router.push(`/servidores/${srv.id}` as any)}
        >
          <Text style={styles.botonAccionTexto}>
            Navegar a la ruta real `/servidores/{srv.id}` (push)
          </Text>
        </Pressable>

        <Pressable
          style={[styles.botonAccion, { backgroundColor: '#0284c7' }]}
          onPress={() => router.push('/(modals)/agregar' as any)}
        >
          <Text style={styles.botonAccionTexto}>
            Reportar Incidencia sobre este Nodo (Modal)
          </Text>
        </Pressable>

        <Pressable
          style={[styles.botonAccion, { backgroundColor: '#64748b' }]}
          onPress={() => router.back()}
        >
          <Text style={styles.botonAccionTexto}>← Regresar a Pantalla Anterior (back)</Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}

export default Paso4Detalle

const styles = StyleSheet.create({
  scroll: { flex: 1, backgroundColor: '#f1f5f9' },
  contenido: { padding: 16, gap: 14, paddingBottom: 40 },
  cabecera: {
    backgroundColor: '#0284c7',
    padding: 18,
    borderRadius: 12,
  },
  subtitulo: { fontSize: 11, fontWeight: '700', color: '#bae6fd', letterSpacing: 0.5 },
  titulo: { fontSize: 20, fontWeight: '700', color: '#ffffff', marginTop: 2 },
  tecnico: { fontSize: 12, color: '#e0f2fe', marginTop: 4 },
  selectorContenedor: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  selectorTitulo: { fontSize: 12, fontWeight: '700', color: '#475569', marginBottom: 8 },
  botonesSelector: { flexDirection: 'row', gap: 6, flexWrap: 'wrap' },
  botonId: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#f1f5f9',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#cbd5e1',
  },
  botonIdActivo: { backgroundColor: '#0284c7', borderColor: '#0284c7' },
  textoId: { fontSize: 12, fontWeight: '600', color: '#475569' },
  textoIdActivo: { color: '#ffffff' },
  tarjetaEncabezado: {
    backgroundColor: '#0f172a',
    borderRadius: 12,
    padding: 18,
    gap: 6,
  },
  filaEstado: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  nombreServidor: { fontSize: 17, fontWeight: '700', color: '#f8fafc', flex: 1, marginRight: 8 },
  badgeEstado: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 6 },
  badgeTexto: { fontSize: 10, fontWeight: '700', color: '#ffffff' },
  ipServidor: { fontSize: 13, color: '#38bdf8', fontFamily: 'monospace' },
  sistemaServidor: { fontSize: 12, color: '#94a3b8' },
  seccion: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    gap: 10,
  },
  seccionTitulo: {
    fontSize: 11,
    fontWeight: '700',
    color: '#64748b',
    letterSpacing: 1,
  },
  filaMetrica: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#f1f5f9',
  },
  etiqueta: { fontSize: 13, color: '#475569', fontWeight: '500' },
  valor: { fontSize: 13, color: '#0f172a', fontWeight: '600' },
  incidencia: { fontSize: 13, color: '#334155', fontStyle: 'italic', lineHeight: 20 },
  botonera: { gap: 8, marginTop: 6 },
  botoneraTitulo: { fontSize: 13, fontWeight: '700', color: '#334155' },
  botonAccion: {
    backgroundColor: '#0f172a',
    borderRadius: 10,
    padding: 13,
    alignItems: 'center',
  },
  botonAccionTexto: { color: '#ffffff', fontWeight: '600', fontSize: 13 },
})
