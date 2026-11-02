import { memo, useCallback, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

interface ProductoItemProps {
  producto: Producto;
  onEliminar: (id: number) => void;
}

// Componente memorizado
const ProductoItem = memo(({ producto, onEliminar }: ProductoItemProps) => {
  console.log('Renderizando:', producto.nombre);

  return (
    <View style={styles.producto}>
      <Text>
        {producto.nombre} - ${producto.precio}
      </Text>

      <Button title="Eliminar" onPress={() => onEliminar(producto.id)} />
    </View>
  );
});

export default function Paso7() {
  const [productos, setProductos] = useState<Producto[]>([
    { id: 1, nombre: 'Teclado', precio: 25 },
    { id: 2, nombre: 'Mouse', precio: 15 },
  ]);

  const [contador, setContador] = useState(0);

  // Función memorizada para eliminar productos
  const eliminarProducto = useCallback((id: number) => {
    setProductos((actuales) =>
      actuales.filter((producto) => producto.id !== id)
    );
  }, []);

  // Función memorizada para agregar productos
  const agregarProducto = useCallback(() => {
    setProductos((actuales) => [
      ...actuales,
      {
        id: Date.now(),
        nombre: 'Monitor',
        precio: 200,
      },
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tienda de tecnología</Text>

      <Text>Contador: {contador}</Text>

      <Button
        title="Incrementar contador"
        onPress={() => setContador((c) => c + 1)}
      />

      <Button title="Agregar monitor" onPress={agregarProducto} />

      <FlatList
        data={productos}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ProductoItem producto={item} onEliminar={eliminarProducto} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 60,
    gap: 12,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  producto: {
    padding: 12,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    gap: 8,
  },
});