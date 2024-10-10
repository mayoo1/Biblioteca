import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const resources = [
  {
    section: 'Dirección',
    items: [
      { Nombre: 'José Trinidad Padilla López', Puesto: 'Director', Telefono: '33 38364530', Correo: 'bpej@udg.mx' }
    ],
  },
  {
    section: 'Administración General',
    items: [
      { Nombre: 'Maria Dolores Arías Lara', Puesto: 'Administradora General', Telefono: '33 3836 4538', Correo: 'dolores.arias@udg.mx' }
    ],
  },
  {
    section: 'Coordinación General Operativa',
    items: [
      { Nombre: 'Luz María Farías Ruelas', Puesto: 'Coordinadora General Operativa', Telefono: '33 3836 4539', Correo: 'luz.farias@udg.mx' },
      { Nombre: 'Gabriela Alatorre López', Puesto: 'Responsable de Galería “Jesús Guerrero Galván”', Telefono: '33 3836 4532', Correo: 'gabriela.alatorre@udg.mx' }
    ],
  },
  {
    section: 'Unidad de Finanzas',
    items: [
      { Nombre: 'Ariadna Garcia Torres', Puesto: 'Coordinadora de Finanzas', Telefono: '33 3836 4530', Correo: 'ariadna.garcia@udg.mx' }
    ],
  },
  {
    section: 'Unidad de Recursos Humanos',
    items: [
      { Nombre: 'Mayra Cecilia Padilla Brambila', Puesto: 'Coordinador de Recursos Humanos', Telefono: '33 3836 4534', Correo: 'mayra.padilla@udg.mx' },
      { Nombre: 'Victor Hugo Carrera Magallanes', Puesto: 'Coordinador de Apoyo Servicio Social', Telefono: '33 3836 4533', Correo: 'victor.carrera@udg.mx' }
    ],
  },
  {
    section: 'Tecnologías de Información',
    items: [
      { Nombre: 'Isidro Sosa Díaz', Puesto: 'Coordinador de Tecnologías de Información', Telefono: '33 3836 4550', Correo: 'isidro.sosa@udg.mx' }
    ],
  },
  {
    section: 'Difusión y Comunicación Cultural',
    items: [
      { Nombre: 'Josué Eleazar Nolasco Hernández', Puesto: 'Coordinador de Difusión y Comunicación Cultural', Telefono: '33 3836 4532', Correo: 'josue.nolasco@udg.mx' }
    ],
  },
  {
    section: 'Vinculación Institucional',
    items: [
      { Nombre: 'Martha Patricia Blanco Nuñez', Puesto: 'Responsable de Vinculación Institucional', Telefono: '33 3836 4530', Correo: 'patricia.blanco@udg.mx' }
    ],
  },
  {
    section: 'Servicios Generales',
    items: [
      { Nombre: 'Juan Carlos Martínez Colima', Puesto: 'Coordinador de Servicios Generales', Telefono: '33 3836 4532', Correo: 'jcarlos.martinezcolima@udg.mx' },
      { Nombre: 'Miguel Angel Amézquita Rosas', Puesto: 'Jefe de Mantenimiento', Telefono: '33 3836 4532', Correo: 'angel.amezquita@udg.mx' }
    ],
  },
  {
    section: 'Unidad de Patrimonio',
    items: [
      { Nombre: 'Jesús Antonio Padilla Chávez', Puesto: 'Coordinador de Patrimonio', Telefono: '33 3836 4530', Correo: 'antonio.padilla@udg.mx' }
    ],
  },
  {
    section: 'Conservación y Restauración',
    items: [
      { Nombre: 'Juan Pedro Hernandez Cebreros', Puesto: 'Coordinador de Conservación y Restauración', Telefono: '33 3836 4539', Correo: 'juanpedro.hernandez@udg.mx' },
      { Nombre: 'Jorge Arturo María Pérez', Puesto: 'Responsable Laboratorio de Microbiología', Telefono: '33 3836 4532', Correo: 'jorge.maria@udg.mx' }
    ],
  },
  {
    section: 'Coordinación de la Biblioteca Contemporánea',
    items: [
      { Nombre: 'Francisco Javier Sanz Garcia', Puesto: 'Coordinador de la Biblioteca Contemporánea', Telefono: '33 3836 4539', Correo: 'franciscojavier.sanz@udg.mx' },
      { Nombre: 'Luz Aurora Orozco Ramirez', Puesto: 'Responsable de Atención a Usuarios', Telefono: '33 3836 4534', Correo: 'aurora.orozco@udg.mx' },
      { Nombre: 'Iliana Guillermina Aguilar Saldaña', Puesto: 'Responsable de Fondos Especiales Contemporáneos', Telefono: '33 3836 4530', Correo: 'iliana.aguilar@udg.mx' },
      { Nombre: 'Cielo Orozco Delgado', Puesto: 'Responsable de Procesos Técnicos', Telefono: '33 3836 4530', Correo: 'celia.orozco@udg.mx' },
      { Nombre: 'Osvaldo De Luna Herrera', Puesto: 'Responsable de Hemeroteca y Mapoteca Contemporáneo', Telefono: '33 3836 4530', Correo: 'osvaldo.deluna@udg.mx' },
      { Nombre: 'Rosa Muro Castro', Puesto: 'Responsable Desarrollo de Colecciones', Telefono: '33 3836 4530', Correo: 'rosa.muro@udg.mx' },
      { Nombre: 'Gema Perez Hermosillo', Puesto: 'Responsable de Tiflotecnia', Telefono: '33 3836 4530', Correo: 'gema.perez@udg.mx' },
      { Nombre: 'Maria del Pilar García de Alba Zepeda', Puesto: 'Responsable del Área Infantil y Juvenil', Telefono: '3836 4530', Correo: 'pilar.garciadealba@udg.mx' },
      { Nombre: 'Jocelyne Aldonza Hernández Hernández', Puesto: 'Responsable de Fomento a la Lectura', Telefono: '33 3836 4530', Correo: 'jocelyn.hernandez@udg.mx' }
    ],
  },
  {
    section: 'Coordinación de la Biblioteca Histórica',
    items: [
      { Nombre: 'María Guadalupe Martínez Corona', Puesto: 'Responsable de la Biblioteca Histórica', Telefono: '33 3836 4530', Correo: 'guadalupe.martinez@udg.mx' },
      { Nombre: 'Laura Benitez Barba', Puesto: 'Responsable de Archivos', Telefono: '33 3836 4530', Correo: 'laura.benitez@udg.mx' },
      { Nombre: 'Pendiente', Puesto: 'Responsable de Fondos Especiales y Tesoro Bibliográfico', Telefono: '33 3836 4530', Correo: '' },
      { Nombre: 'María Eugenia Barrios Hernández', Puesto: 'Responsable de Acervos General y Colecciones Particulares', Telefono: '33 3836 4530', Correo: 'eugenia.barrios@udg.mx' },
      { Nombre: 'Rafael Sánchez Villegas', Puesto: 'Responsable de Archivos Visuales y Sonoros', Telefono: '33 3836 4530', Correo: 'rafael.villegas@udg.mx' },
      { Nombre: 'Cristina Concepción Meza Bañuelos', Puesto: 'Responsable de Publicaciones Seriadas', Telefono: '33 3836 4530', Correo: 'cristina.meza@udg.mx' },
      { Nombre: 'Yadira del Carmen Cea Pacheco', Puesto: 'Laboratorio de Digitalización', Telefono: '33 3836 4530', Correo: 'yadira.cea@udg.mx' },
      { Nombre: 'Blanca Aurora García Floriano', Puesto: 'Responsable de Hemeroteca Histórica', Telefono: '33 3836 4530', Correo: 'blanca.garcia@udg.mx' },
      { Nombre: 'Alejandra Padilla González', Puesto: 'Responsable de Restauración de Libro Antiguo', Telefono: '33 3836 4530', Correo: 'alejandra.padilla@udg.mx' }
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

  handlePress = (type, value) => {
    let url = '';
    if (type === 'phone') {
      url = `tel:${value}`;
    } else if (type === 'email') {
      url = `mailto:${value}`;
    }
    Linking.openURL(url).catch(err => console.error('Error al abrir URL:', err));
  };

  renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      {item.Nombre && <Text style={styles.nombre}>{item.Nombre}</Text>}
      {item.Puesto && <Text style={styles.puesto}>{item.Puesto}</Text>}
      {item.Direccion && <Text style={styles.direccion}>{item.Direccion}</Text>}

      {item.Telefono ? (
        <TouchableOpacity onPress={() => this.handlePress('phone', item.Telefono)}>
          <Text style={styles.phone}>Teléfono: {item.Telefono}</Text>
        </TouchableOpacity>
      ) : null}

      {item.Correo ? (
        <TouchableOpacity onPress={() => this.handlePress('email', item.Correo)}>
          <Text style={styles.email}>Correo: {item.Correo}</Text>
        </TouchableOpacity>
      ) : null}
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
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    borderColor:'gainsboro',
    borderWidth:2
  },
  innerList: {
    paddingLeft: 10,
  },
  itemContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  header: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'darkred',
    marginBottom: 5,
    marginLeft: 10
  },
  nombre: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  puesto: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 5,
  },
  direccion: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 5,
  },
  phone: {
    fontSize: 15,
    color: 'darkred',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ce2307',
    marginBottom: 5,
  },
});
