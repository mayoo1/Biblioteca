import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, Linking, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../3Diseno';

const { width } = Dimensions.get('window');

const AcervoHisPiso1A4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={[styles.infoContainer, { height: width * 0.70, width: width * 0.95 }]}>
          <Image
            source={require('../fotos/Libreria8.jpg')}
            style={[styles.infoImage, { height: width * 0.5, width: width * 0.8 }]}
          />
          <TouchableOpacity
            style={[styles.viewButton, { height: width * 0.08, width: width * 0.3, marginLeft: '-50%' }]}
            onPress={() => navigation.navigate('Qsabh')}
          >
            <Text style={styles.viewButtonText}>Historia</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.viewButton, { height: width * 0.08, width: width * 0.3, marginLeft: '40%', marginTop: '-8%' }]}
            onPress={() => navigation.navigate('Qsabho')}
          >
            <Text style={styles.viewButtonText}>Hoy en dia</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.titleText}>Quienes Somos?</Text>
        <Text style={styles.subtitleText}>Acerca de la Biblioteca</Text>

        <ScrollView style={styles.scrollView}>
          <View style={styles.separator} />
          <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, { height: width * 0.07, width: width * 0.07 }]} />
          <Text style={[styles.sectionTitle, { width: width * 0.5 }]}>Presentación</Text>

          <View style={[styles.descriptionContainer, { width: width * 0.85 }]}>
            <Text style={styles.descriptionText}>
              La Biblioteca Pública del Estado de Jalisco (BPEJ) “Juan José Arreola” es una institución que ha evolucionado a lo largo del tiempo, influenciada por el contexto
              nacional e histórico en el que se originó y por las transformaciones impulsadas por la globalización y las tecnologías de la información.{'\n'}{'\n'}
              En primer lugar, es esencial comprender el momento histórico que dio origen a esta biblioteca. Jalisco, como estado de México, fue testigo de momentos significativos que dejaron una impronta en su desarrollo cultural y educativo.{'\n'}La creación de la principal biblioteca estuvo influenciada por las necesidades de la sociedad en este período particular, vinculado a momentos de cambios políticos, sociales o culturales. Nuestra biblioteca fue concebida como un centro de acceso al conocimiento y la información en un momento en que el recurso impreso era la principal y única fuente de aprendizaje.{'\n'}{'\n'}
              En segundo lugar, la globalización y los avances tecnológicos actuales marcan una nueva era para las bibliotecas, imponiendo la necesidad de adaptarse a las tendencias digitales. Esta transición hacia el mundo digital implica incorporar tecnologías de información y comunicación, así como redefinir los servicios bibliotecarios para satisfacer las demandas de una comunidad que busca información de manera rápida y accesible. Es por esto que, hoy en día, nos enfrentamos al mayor desafío de nuestra historia, que no es otro que el de equilibrar la herencia histórica con la necesidad de ofrecer servicios modernos y accesibles.
            </Text>
          </View>
          <View style={styles.separator} />
        </ScrollView>
      </View>
    </View>
  );
};

export default AcervoHisPiso1A4;
