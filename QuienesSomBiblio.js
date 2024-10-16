import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const resources = [
  {
    section: 'Planta baja, Módulo Contemporáneo',
    items: [
      { Titulo: 'Modulo de Referencia' },
      { Titulo: 'Modulo de Atención de usuarios' },
      { Titulo: 'Áreas de Cultura' }
    ],
  },
  {
    section: 'Planta baja, Módulo Histórico',
    items: [
      { Titulo: 'Recepción' },
      { Titulo: 'Auditorio' },
      { Titulo: 'Galería' }
    ],
  },
  {
    section: 'Mezzanine, Módulo Histórico',
    items: [
      { Titulo: 'Galería' }
    ],
  },
  {
    section: 'Primer nivel, Módulo Contemporáneo',
    items: [
      { Titulo: 'Acervo General' },
      { Titulo: 'Biblioteca Infantil "José Rosas Moreno"' },
      { Titulo: 'Colección Juvenil' },
      { Titulo: 'Colección Infantil Benjamín Franklin' },
      { Titulo: 'Colección Libro de Texto Gratuito' },
      { Titulo: 'Colección de Novedades' },
      { Titulo: 'Área de Cuenta Cuentos' },
      { Titulo: 'Laboratorio de Computo Infantil' },
      { Titulo: 'Talleres Infantil' },
      { Titulo: 'Teatro Guinol' }
    ],
  },
  {
    section: 'Primer nivel, Módulo Histórico',
    items: [
      { Titulo: 'Archivo de la Real Audiencia de la Nueva Galicia' },
      { Titulo: 'Supremo Tribunal de Justicia del Estado de Jalisco' },
      { Titulo: 'Dirección General de Instrucción Pública del Estado de Jalisco' },
      { Titulo: 'Hospital' },
      { Titulo: 'Archivos Particulares' },
      { Titulo: 'Microfilmes' },
      { Titulo: 'Mapoteca Histórica' }
    ],
  },
  {
    section: 'Segundo nivel, Módulo Contemporáneo',
    items: [
      { Titulo: 'Colección General' },
      { Titulo: 'Colección de Referencias' },
      { Titulo: 'Colección de Novedades' },
      { Titulo: 'Salón de Recursos Electrónicos' },
      { Titulo: 'Sala de Trabajo' }
    ],
  },
  {
    section: 'Segundo nivel, Módulo Histórico',
    items: [
      { Titulo: 'Acervo General' },
      { Titulo: 'Colección Privada' },
      { Titulo: 'Tesoro' },
      { Titulo: 'Acervo Sonoro Histórico' }
    ],
  },
  {
    section: 'Tercer nivel, Módulo Contemporáneo',
    items: [
      { Titulo: 'Hemeroteca Contemporánea' },
      { Titulo: 'Colección de Pueblos Indígenas' },
      { Titulo: 'Mapoteca' },
      { Titulo: 'Salón INEGI: Conociendo a México' },
      { Titulo: 'Tiflotecnia (Área de atención a personas con discapacidad visual)' },
      { Titulo: 'Salón de Usos Múltiples' }
    ],
  },
  {
    section: 'Tercer nivel, Módulo Histórico',
    items: [
      { Titulo: 'Hemeroteca: Publicaciones Seriadas' }
    ],
  },
  {
    section: 'Cuarto nivel, Módulo Contemporáneo',
    items: [
      { Titulo: 'Fondo Jalisco' },
      { Titulo: 'Fondo Enrique Beltrán' },
      { Titulo: 'Fondo Emilio García Riera' },
      { Titulo: 'Fondo Ignacio L. Vallarta' },
      { Titulo: 'Colección Enrique Estrada Faudón' },
      { Titulo: 'Colección Universidad de Guadalajara' },
      { Titulo: 'Hemeroteca especializada sobre la Universidad de Guadalajara' },
      { Titulo: 'Mediateca Emilio García Riera' },
      { Titulo: 'Lectura al Aire Libre' },
      { Titulo: 'Salas de Trabajo' }
    ],
  },
  {
    section: 'Cuarto nivel, Módulo Histórico',
    items: [
      { Titulo: 'Hemeroteca: Publicaciones Periódicas' }
    ],
  },
  {
    section: 'Quinto nivel, Módulo Contemporáneo',
    items: [
      { Titulo: 'Colecciones Internacionales' },
      { Titulo: 'Biblioteca Paul Rivet del CCC-IFAL' },
      { Titulo: 'Biblioteca Benjamin Franklin' },
      { Titulo: 'Biblioteca Josep M. Muirá i Romaní' },
      { Titulo: 'Window of Shanghai' },
      { Titulo: 'Salones de Usos Múltiples' }
    ],
  },
  {
    section: 'Quinto nivel, Módulo Histórico',
    items: [
      { Titulo: 'Obras Bibliográficas entre los Siglos XVII y XX' },
      { Titulo: 'Fondo de Impresos Europeos Siglos XVII y XVIII.' },
      { Titulo: 'Fondo Histórico Siglo XX' },
      { Titulo: 'Fondos Particulares' },
      { Titulo: 'Colección Emilio García Riera' },
      { Titulo: 'Fototeca Fondo Alberto Gómez Barbosa' }
    ],
  },
  {
    section: 'Sexto nivel, Módulo Contemporáneo',
    items: [
      { Titulo: 'Dirección de la Biblioteca Pública del Estado de Jalisco "Juan José Arreola"' },
      { Titulo: 'Oficinas del Centro Cultural Universitario' },
      { Titulo: 'Oficinas de Cultura UDG' }
    ],
  },
  {
    section: 'Sexto nivel, Módulo Histórico',
    items: [
      { Titulo: 'Tesoros Bibliográficos' },
      { Titulo: 'Acervo Especial' },
      { Titulo: 'Acervo General' },
      { Titulo: 'Sala Jalisciense' }
    ],
  }
];

export default class ServRecur extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resources,
    };
  }

  renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      {item.Titulo && <Text style={styles.titulo}>- {item.Titulo}</Text>}
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.resources}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.sectionContainer}>
              <Text style={styles.header}>{item.section}</Text>
              <FlatList
                data={item.items}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index.toString()}
                style={styles.innerList}
              />
            </View>
          )}
          stickySectionHeadersEnabled={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  sectionContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    borderColor: 'gainsboro',
    borderWidth: 2,
  },
  itemContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  header: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#db3210',
    marginBottom: 10,
  },
  titulo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#515151',
  },
});
