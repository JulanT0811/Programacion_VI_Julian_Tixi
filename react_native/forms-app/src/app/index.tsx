// app/index.tsx
import { useCallback, useRef, useState } from 'react'
import {
  ActivityIndicator,
  Alert,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import { Paso4Volumen } from './paso4Volumen'
import { Paso5Volumen } from './paso5Volumen'


// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia este número y guarda (Ctrl+S) para navegar entre pasos.     │
// │  1  FlatList básica — servidores con nombre/IP/estado               │
// │  2  FlatList avanzada — separadores, vacío, refresh, paginación     │
// │  3  SectionList — servidores agrupados por datacenter               │
// │  4  TextInput tipado — campo de IP con teclado controlado           │
// │  5  Formulario con validación — agregar servidor                    │
// │  6  KeyboardAvoidingView — formulario sin tapado de teclado         │
// └──────────────────────────────────────────────────────────────────────┘
const PASO = 5.1

export default function Index() {
  switch (PASO) {
    case 1:
      return <Paso1 />
    case 2:
      return <Paso2 />
    case 3:
      return <Paso3 />
    case 4:
      return <Paso4 />
    case 4.1:
      return <Paso4Volumen />
    case 5:
      return <Paso5 />
    case 5.1:
      return <Paso5Volumen />
    case 6:
      return <Paso6 />
    default:
      return (
        <View style={estilos.centrado}>
          <Text>Paso {PASO}: crea la pantalla primero</Text>
        </View>
      )
  }
}

// ─── Tipos compartidos ───────────────────────────────────────────────────
type Servidor = {
  id: string
  nombre: string
  ip: string
  activo: boolean
}

// ─── Datos de muestra ────────────────────────────────────────────────────
const SERVIDORES: Servidor[] = [
  { id: '1', nombre: 'web-01',      ip: '10.0.2.10',   activo: true  },
  { id: '2', nombre: 'web-02',      ip: '10.0.2.11',   activo: true  },
  { id: '3', nombre: 'db-primario', ip: '10.0.3.20',   activo: true  },
  { id: '4', nombre: 'db-replica',  ip: '10.0.3.21',   activo: false },
  { id: '5', nombre: 'cache-01',    ip: '10.0.4.10',   activo: true  },
  { id: '6', nombre: 'cache-02',    ip: '10.0.4.11',   activo: false },
  { id: '7', nombre: 'lb-01',       ip: '10.0.1.1',    activo: true  },
  { id: '8', nombre: 'bastion',     ip: '203.0.113.5', activo: true  },
]

const PAGINA_2: Servidor[] = [
  { id: '9',  nombre: 'monitor-01', ip: '10.0.5.10', activo: true  },
  { id: '10', nombre: 'monitor-02', ip: '10.0.5.11', activo: false },
]

type SeccionDatacenter = { title: string; region: string; data: Servidor[] }

const SECCIONES: SeccionDatacenter[] = [
  {
    title: 'DC Madrid (EU-West)',
    region: 'eu-west-1',
    data: [
      { id: 's1', nombre: 'web-01',    ip: '10.10.2.10', activo: true  },
      { id: 's2', nombre: 'web-02',    ip: '10.10.2.11', activo: true  },
      { id: 's3', nombre: 'db-master', ip: '10.10.3.20', activo: true  },
    ],
  },
  {
    title: 'DC Frankfurt (EU-Central)',
    region: 'eu-central-1',
    data: [
      { id: 's4', nombre: 'web-01',   ip: '10.20.2.10', activo: true  },
      { id: 's5', nombre: 'cache-01', ip: '10.20.4.10', activo: false },
    ],
  },
  {
    title: 'DC São Paulo (SA-East)',
    region: 'sa-east-1',
    data: [
      { id: 's6', nombre: 'web-01',     ip: '10.30.2.10',  activo: true  },
      { id: 's7', nombre: 'db-replica', ip: '10.30.3.21',  activo: false },
      { id: 's8', nombre: 'bastion',    ip: '203.0.113.6', activo: true  },
    ],
  },
]

// ─── Componente compartido: fila de servidor ─────────────────────────────
function FilaServidor({ servidor }: { servidor: Servidor }) {
  return (
    <View style={estilos.fila}>
      <View style={estilos.filaInfo}>
        <Text style={estilos.filaNombre}>{servidor.nombre}</Text>
        <Text style={estilos.filaIp}>{servidor.ip}</Text>
      </View>
      <View
        style={[
          estilos.badge,
          servidor.activo ? estilos.badgeActivo : estilos.badgeInactivo,
        ]}
      >
        <Text style={estilos.badgeTexto}>
          {servidor.activo ? 'ACTIVO' : 'CAÍDO'}
        </Text>
      </View>
    </View>
  )
}

// ─── Paso 1 ──────────────────────────────────────────────────────────────
function Paso1() {
  return (
    <SafeAreaView style={estilos.pantalla}>
      <Text style={estilos.barraTitle}>Inventario de servidores</Text>
      <FlatList<Servidor>
        data={SERVIDORES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FilaServidor servidor={item} />}
      />
    </SafeAreaView>
  )
}

// ─── Paso 2 ──────────────────────────────────────────────────────────────
function Paso2() {
  const [datos, setDatos] = useState<Servidor[]>(SERVIDORES)
  const [refrescando, setRefrescando] = useState(false)
  const [cargandoMas, setCargandoMas] = useState(false)
  const [paginaActual, setPaginaActual] = useState(1)

  const onRefresh = useCallback(() => {
    setRefrescando(true)
    setTimeout(() => {
      setDatos(SERVIDORES)
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
    <SafeAreaView style={estilos.pantalla}>
      <Text style={estilos.barraTitle}>Servidores · p.{paginaActual}</Text>
      <FlatList<Servidor>
        data={datos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FilaServidor servidor={item} />}
        ItemSeparatorComponent={() => <View style={estilos.separador} />}
        ListEmptyComponent={
          <View style={estilos.vacio}>
            <Text style={estilos.vacioTexto}>Sin servidores registrados</Text>
          </View>
        }
        refreshing={refrescando}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.3}
        ListFooterComponent={
          cargandoMas
            ? <ActivityIndicator style={{ margin: 16 }} color="#1565c0" />
            : null
        }
      />
    </SafeAreaView>
  )
}

// ─── Paso 3 ──────────────────────────────────────────────────────────────
function Paso3() {
  return (
    <SafeAreaView style={estilos.pantalla}>
      <Text style={estilos.barraTitle}>Infraestructura global</Text>
      <SectionList<Servidor, SeccionDatacenter>
        sections={SECCIONES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FilaServidor servidor={item} />}
        renderSectionHeader={({ section }) => (
          <View style={estilos.seccionHeader}>
            <Text style={estilos.seccionTitulo}>{section.title}</Text>
            <Text style={estilos.seccionRegion}>{section.region}</Text>
          </View>
        )}
        stickySectionHeadersEnabled
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: '#e0e0e0', marginHorizontal: 12 }} />
        )}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </SafeAreaView>
  )
}

// ─── Paso 4 ──────────────────────────────────────────────────────────────
function Paso4() {
  const [nombre, setNombre] = useState('')
  const [ip, setIp] = useState('')
  const [puerto, setPuerto] = useState('')
  const [password, setPassword] = useState('')
  const [mostrarPass, setMostrarPass] = useState(false)

  const refIp = useRef<TextInput>(null)
  const refPuerto = useRef<TextInput>(null)
  const refPass = useRef<TextInput>(null)

  return (
    <SafeAreaView style={estilos.pantalla}>
      <Text style={estilos.barraTitle}>Configurar acceso SSH</Text>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text style={estilos.etiqueta}>Nombre del servidor</Text>
        <TextInput
          style={estilos.campo}
          value={nombre}
          onChangeText={setNombre}
          placeholder="ej. web-03"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          onSubmitEditing={() => refIp.current?.focus()}
        />

        <Text style={estilos.etiqueta}>Dirección IP</Text>
        <TextInput
          ref={refIp}
          style={estilos.campo}
          value={ip}
          onChangeText={setIp}
          placeholder="192.168.1.1"
          keyboardType="numeric"
          returnKeyType="next"
          onSubmitEditing={() => refPuerto.current?.focus()}
        />

        <Text style={estilos.etiqueta}>Puerto SSH</Text>
        <TextInput
          ref={refPuerto}
          style={estilos.campo}
          value={puerto}
          onChangeText={setPuerto}
          placeholder="22"
          keyboardType="number-pad"
          returnKeyType="next"
          onSubmitEditing={() => refPass.current?.focus()}
        />

        <Text style={estilos.etiqueta}>Contraseña</Text>
        <View style={{ flexDirection: 'row', gap: 8, marginBottom: 14 }}>
          <TextInput
            ref={refPass}
            style={[estilos.campo, { flex: 1, marginBottom: 0 }]}
            value={password}
            onChangeText={setPassword}
            placeholder="••••••••"
            secureTextEntry={!mostrarPass}
            returnKeyType="done"
            autoCapitalize="none"
          />
          <Pressable
            onPress={() => setMostrarPass((v) => !v)}
            style={estilos.togglePass}
          >
            <Text style={estilos.togglePassTexto}>
              {mostrarPass ? 'Ocultar' : 'Ver'}
            </Text>
          </Pressable>
        </View>

        <View style={estilos.preview}>
          <Text style={estilos.previewTexto}>
            ssh {nombre || '<nombre>'}@{ip || '<ip>'} -p {puerto || '22'}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

// ─── Paso 5 ──────────────────────────────────────────────────────────────
const REGEX_IPV4 = /^(\d{1,3}\.){3}\d{1,3}$/

type CamposFormulario = { nombre: string; ip: string; puerto: string }
type ErroresFormulario = { nombre: string | null; ip: string | null; puerto: string | null }

function validar(campos: CamposFormulario): ErroresFormulario {
  const e: ErroresFormulario = { nombre: null, ip: null, puerto: null }
  if (!campos.nombre.trim()) e.nombre = 'El nombre es obligatorio'
  else if (campos.nombre.trim().length < 2) e.nombre = 'Mínimo 2 caracteres'
  else if (/\s/.test(campos.nombre)) e.nombre = 'Sin espacios'
  if (!campos.ip.trim()) e.ip = 'La IP es obligatoria'
  else if (!REGEX_IPV4.test(campos.ip.trim())) e.ip = 'Formato inválido (ej. 192.168.1.10)'
  const p = Number(campos.puerto)
  if (!campos.puerto.trim()) e.puerto = 'El puerto es obligatorio'
  else if (!Number.isInteger(p) || p < 1 || p > 65535) e.puerto = 'Puerto inválido (1 – 65 535)'
  return e
}

function hayErrores(e: ErroresFormulario) {
  return Object.values(e).some((v) => v !== null)
}

function Paso5() {
  const [campos, setCampos] = useState<CamposFormulario>({ nombre: '', ip: '', puerto: '22' })
  const [errores, setErrores] = useState<ErroresFormulario>({ nombre: null, ip: null, puerto: null })

  function actualizar(campo: keyof CamposFormulario, valor: string) {
    setCampos((p) => ({ ...p, [campo]: valor }))
    if (errores[campo]) setErrores((p) => ({ ...p, [campo]: null }))
  }

  function onSubmit() {
    const nuevos = validar(campos)
    setErrores(nuevos)
    if (hayErrores(nuevos)) return
    Alert.alert('Servidor agregado', `${campos.nombre} · ${campos.ip}:${campos.puerto}`, [
      {
        text: 'Agregar otro',
        onPress: () => {
          setCampos({ nombre: '', ip: '', puerto: '22' })
          setErrores({ nombre: null, ip: null, puerto: null })
        },
      },
    ])
  }

  return (
    <SafeAreaView style={estilos.pantalla}>
      <Text style={estilos.barraTitle}>Agregar servidor</Text>
      <ScrollView
        contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
        keyboardShouldPersistTaps="handled"
      >
        {(['nombre', 'ip', 'puerto'] as const).map((campo) => (
          <View key={campo} style={{ marginBottom: 16 }}>
            <Text style={estilos.etiqueta}>
              {campo === 'nombre' ? 'Nombre del servidor *' : campo === 'ip' ? 'Dirección IP *' : 'Puerto *'}
            </Text>
            <TextInput
              style={[estilos.campo, errores[campo] ? estilos.campoError : null]}
              value={campos[campo]}
              onChangeText={(v) => actualizar(campo, v)}
              placeholder={campo === 'nombre' ? 'web-03' : campo === 'ip' ? '192.168.1.10' : '22'}
              keyboardType={campo === 'nombre' ? 'default' : 'numeric'}
              autoCapitalize="none"
              autoCorrect={false}
            />
            {errores[campo] && (
              <Text style={estilos.textoError}>{errores[campo]}</Text>
            )}
          </View>
        ))}
        <Pressable
          style={({ pressed }) => [estilos.boton, pressed && { opacity: 0.8 }]}
          onPress={onSubmit}
        >
          <Text style={estilos.textoBoton}>Agregar servidor</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

// ─── Paso 6 ──────────────────────────────────────────────────────────────
function Paso6() {
  const [nombre, setNombre] = useState('')
  const [ip, setIp] = useState('')
  const [puerto, setPuerto] = useState('22')
  const [etiqueta, setEtiqueta] = useState('')
  const [errorBanner, setErrorBanner] = useState<string | null>(null)

  function onAgregar() {
    if (!nombre.trim() || !ip.trim() || !puerto.trim()) {
      setErrorBanner('Completa todos los campos antes de continuar')
      return
    }
    setErrorBanner(null)
    Alert.alert('Servidor listo', `${nombre} · ${ip}:${puerto}`)
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#f0f4f8' }}
      behavior={Platform.select({ ios: 'padding', android: 'height' })}
      keyboardVerticalOffset={Platform.select({ ios: 0, android: 24 })}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={estilos.cabecera}>
          <Text style={estilos.cabeceraTitle}>Nuevo servidor</Text>
          <Text style={estilos.cabeceraPlataforma}>
            {Platform.OS === 'ios' ? 'iOS · padding mode' : 'Android · height mode'}
          </Text>
        </View>
        <ScrollView
          contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
          keyboardShouldPersistTaps="handled"
        >
          {[
            { etiqueta: 'Nombre del servidor', valor: nombre, setter: setNombre, teclado: 'default' as const, placeholder: 'db-replica-02' },
            { etiqueta: 'Dirección IP',         valor: ip,     setter: setIp,     teclado: 'numeric'  as const, placeholder: '10.0.3.22' },
            { etiqueta: 'Puerto SSH',            valor: puerto, setter: setPuerto, teclado: 'number-pad' as const, placeholder: '22' },
          ].map(({ etiqueta: e, valor, setter, teclado, placeholder }) => (
            <View key={e} style={{ marginBottom: 16 }}>
              <Text style={estilos.etiqueta}>{e}</Text>
              <TextInput
                style={estilos.campo}
                value={valor}
                onChangeText={setter}
                placeholder={placeholder}
                keyboardType={teclado}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
          ))}

          <Text style={estilos.etiqueta}>Etiqueta (opcional)</Text>
          <TextInput
            style={[estilos.campo, { height: 80, textAlignVertical: 'top', paddingTop: 10, marginBottom: 16 }]}
            value={etiqueta}
            onChangeText={setEtiqueta}
            placeholder="Réplica de lectura para región SA-East..."
            multiline
            numberOfLines={3}
          />

          {errorBanner && (
            <View style={estilos.bannerError}>
              <Text style={estilos.bannerErrorTexto}>{errorBanner}</Text>
            </View>
          )}

          <Pressable
            style={({ pressed }) => [estilos.boton, pressed && { opacity: 0.8 }]}
            onPress={onAgregar}
          >
            <Text style={estilos.textoBoton}>Agregar servidor</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

// ─── Estilos compartidos ─────────────────────────────────────────────────
const estilos = StyleSheet.create({
  centrado: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  pantalla: { flex: 1, backgroundColor: '#f0f4f8' },
  barraTitle: {
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
  filaInfo: { flex: 1 },
  filaNombre: { fontSize: 15, fontWeight: '600', color: '#1a1a1a' },
  filaIp: { fontSize: 12, color: '#666', marginTop: 2 },
  badge: { borderRadius: 4, paddingVertical: 4, paddingHorizontal: 8 },
  badgeActivo: { backgroundColor: '#e8f5e9' },
  badgeInactivo: { backgroundColor: '#ffebee' },
  badgeTexto: { fontSize: 11, fontWeight: '700' },
  separador: { height: 1, backgroundColor: '#e0e0e0', marginHorizontal: 12 },
  vacio: { alignItems: 'center', padding: 40 },
  vacioTexto: { fontSize: 16, fontWeight: '600', color: '#555' },
  seccionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e3f2fd',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#1565c0',
  },
  seccionTitulo: { fontSize: 13, fontWeight: '700', color: '#0d47a1' },
  seccionRegion: { fontSize: 11, color: '#546e7a', fontFamily: 'monospace' },
  etiqueta: { fontSize: 13, fontWeight: '600', color: '#444', marginBottom: 4 },
  campo: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#cfd8dc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: '#1a1a1a',
    marginBottom: 14,
  },
  campoError: { borderColor: '#e53935', backgroundColor: '#fff8f8' },
  textoError: { fontSize: 12, color: '#e53935', marginTop: 4 },
  togglePass: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
  },
  togglePassTexto: { fontSize: 13, color: '#1565c0', fontWeight: '600' },
  preview: { backgroundColor: '#1a1a2e', borderRadius: 8, padding: 12, marginTop: 8 },
  previewTexto: { fontFamily: 'monospace', fontSize: 13, color: '#a8ff78' },
  boton: {
    backgroundColor: '#1565c0',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  textoBoton: { color: '#fff', fontWeight: '700', fontSize: 16 },
  cabecera: { backgroundColor: '#1565c0', paddingHorizontal: 16, paddingVertical: 14 },
  cabeceraTitle: { fontSize: 18, fontWeight: '700', color: '#fff' },
  cabeceraPlataforma: { fontSize: 11, color: '#90caf9', marginTop: 2 },
  bannerError: {
    backgroundColor: '#ffebee',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    borderLeftWidth: 3,
    borderLeftColor: '#e53935',
  },
  bannerErrorTexto: { fontSize: 13, color: '#c62828' },
})