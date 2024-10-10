import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Linking, StyleSheet } from 'react-native';

export default class ServAtencion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  openDial = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}></View>
        <Image 
          source={require('./fotos/Atencion.jpeg')} 
          style={styles.headerImage} 
        />
        
        <Text style={styles.descriptionText}>
          Es en el área de recepción donde se realiza el trámite para el acceso a la consulta de los fondos especiales, solicitudes de visita y de uso de espacios.
        </Text>

        <Image 
          source={require('./fotos/ico3.png')} 
          style={styles.icon} 
        />
        
        <Text style={styles.guidedVisitText}>
          Solicitud de Visita Guiada por la Biblioteca
        </Text>
        
        <View style={styles.separator}></View>
        
        <ScrollView>
          <View style={styles.requirementsContainer}>
            <Text style={styles.requirementsText}>
              <Text style={styles.boldTitle}>Requisitos</Text>
              {'\n'}Enviar oficio dirigido al Lic. José Trinidad Padilla López, Director de la Biblioteca Pública del Estado de Jalisco “Juan José Arreola” con los siguientes requisitos:
              {'\n\n'}
              • Hoja membretada de la institución solicitante y firmada por el responsable.
              {'\n'}
              • Grado y edades de asistentes.
              {'\n'}
              • Fecha y horario (a reserva de la disponibilidad de la agenda).
              {'\n'}
              • Número de personas que asistirán.
              {'\n'}
              • Nombre, correo electrónico y teléfono del responsable de grupo.
              {'\n'}
              • Enviar solicitud con 15 días de anticipación a la fecha de visita.
              {'\n\n'}
              <Text style={styles.boldTitle}>Tipos de visita que se ofrece:</Text>
              {'\n\n'}
              <Text style={styles.boldTitle}>Para niños de tres a seis años:</Text>
              {'\n'}
              Recorrido 1: Con taller, tiempo estimado de 2.5 hrs.
              {'\n'}
              Recorrido 2: Sin taller, tiempo estimado de 1.5 hrs.
              {'\n\n'}
              <Text style={styles.boldTitle}>Visitas niños de 7 a 12 años:</Text>
              {'\n'}
              Recorrido 1: Con taller, tiempo estimado de 2.5 hrs.
              {'\n'}
              Recorrido 2: Con charla, tiempo estimado de 2.5 hrs.
              {'\n'}
              Recorrido 3: Sin taller, ni charla, tiempo estimado de 1.5 hrs.
              {'\n'}
              Recorrido 4: Búsqueda en catálogo, tiempo estimado 2 hrs.
              {'\n\n'}
              Entregar en el módulo de Atención a Usuarios o enviar a la responsable Martha Blanco, al 
              {'\n'}
              <Text style={styles.mailText} onPress={()=>{Linking.openURL('mailto: patricia.blanco@udg.mx')}}>Correo: patricia.blanco@udg.mx</Text>
              {'\n'}
              <Text style={styles.phoneText} onPress={() => this.openDial('3338364530')}>Teléfono: 33 3836 4530 ext. 22143</Text>
              {'\n\n'}
              <Text style={styles.boldTitle}>Nivel Media Superior en adelante:</Text>
              {'\n'}
              Entregar en el módulo de Atención a Usuarios o enviar a la responsable Stefanie Muro, al 
              {'\n'}
              <Text style={styles.mailText} onPress={()=>{Linking.openURL('mailto: stefanie.muro@udg.mx')}}>Correo: stefanie.muro@udg.mx</Text>
              {'\n'}
              <Text style={styles.phoneText} onPress={() => this.openDial('3338364530')}>Teléfono: 33 3836 4530 ext. 22258</Text>
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#eeeeee',
  },
  headerContainer: {
    height: '40%',
    width: '95%',
    backgroundColor: '#7b0000',
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 10
  },
  headerImage: {
    height: '20%',
    width: '70%',
    marginTop: '-70%',
    borderRadius: 7,
    marginLeft: 55,
  },
  descriptionText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
    marginLeft: 53,
    marginTop: 20,
    width: '70%',
    height: '10%',
    lineHeight: 15,
    textAlign: 'justify',
  },
  icon: {
    height: 25,
    width: 25,
    marginLeft: 20,
    marginTop: '10%',
  },
  guidedVisitText: {
    fontWeight: 'bold',
    color: 'darkred',
    fontSize: 15,
    marginLeft: 50,
    width: '80%',
    height: '5%',
    marginTop: -20,
  },
  separator: {
    borderWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: 340,
    marginLeft: 20,
  },
  requirementsContainer: {
    height: '100%',
    width: '86.5%',
    marginTop: 10,
    marginLeft: '5%',
    borderRadius: 10,
  },
  requirementsText: {
    color: 'black',
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'justify',
  },
  boldTitle: {
    fontWeight: 'bold',
    color: 'darkred',
  },
  phoneText: {
    color: '#ce2307',
    fontWeight: 'bold',
  }, 
  mailText: {
    color: 'darkred',
    fontWeight: 'bold',
  },
});
