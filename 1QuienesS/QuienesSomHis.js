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
            style={[styles.viewButton, { height: width * 0.1, width: width * 0.4, marginLeft: '-40%' }]}
            onPress={() => navigation.navigate('Qshn')}
          >
            <Text style={styles.viewButtonText}>Nombramiento Juan Jose Arreola</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.viewButton, { height: width * 0.08, width: width * 0.3, marginLeft: '65%', marginTop: '-10%' }]}
            onPress={() => navigation.navigate('Qshp')}
          >
            <Text style={styles.viewButtonText}>Primera Sede</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.titleText}>Historia</Text>
        <Text style={styles.subtitleText}>Fundación</Text>

        <ScrollView style={styles.scrollView}>
          <View style={styles.separator} />
          <Image source={require('../fotos/ico3.png')} style={[styles.iconImage, { height: width * 0.07, width: width * 0.07 }]} />
          <Text style={[styles.sectionTitle, { width: width * 0.5 }]}>Fundación</Text>

          <View style={[styles.descriptionContainer, { width: width * 0.85 }]}>
            <Text style={styles.descriptionText}>
            La fundación de la Biblioteca Pública del Estado de Jalisco en el año 1861 marca un hito importante en la historia cultural y educativa de la región. Su establecimiento se llevó a cabo mediante el título quinto del Plan General de Enseñanza, a través de un decreto emitido por el Gobernador del Estado, Pedro Ogazón. La biblioteca se formó a partir de la consolidación de diversos acervos que pertenecían a instituciones educativas y religiosas de la época.{'\n'}{'\n'}
            Las colecciones que conformaron el primer acervo de la biblioteca provenían del Instituto de Estudios Profesionales del Estado, del Colegio Seminario Tridentino del Señor San José, el Colegio de niñas de San Diego y varios conventos que ya habían sido extintos para esa época: San Francisco, San Agustín, San Felipe, Santo Domingo, Nuestra Señora del Carmen, Nuestra Señora de la Merced, Belén y del Colegio Apostólico de Nuestra Señora de Zapopan. La incorporación de estas colecciones a la biblioteca no solo representó la consolidación de una nueva institución cultural en Jalisco, sino también justificó puesta a disposición del público de valiosos materiales provenientes de diversas fuentes religiosas de la época contribuyendo no sólo a disponer de una nueva forma de acceso al conocimiento, sino que también justificó la preservación de parte del patrimonio cultural y documental de la región.{'\n'}{'\n'}
            A lo largo de los años, la Biblioteca Pública ha ido evolucionando y ha enfrentado desafíos, pero su fundación estableció las bases para su papel crucial como guardiana del conocimiento y de la historia de la región. La diversidad de colecciones que la constituyeron refleja la riqueza cultural y educativa que ha sido parte integral de la identidad de Jalisco a lo largo del tiempo.{'\n'}{'\n'}
            El primer director fue el señor Ignacio Acal de 1861 hasta 1863, quien inició con los trabajos de clasificación y organización de los materiales, le sucedió José María Vigil en 1872. Debido a los arduos trabajos en la Biblioteca Pública, aunado a lo convulsionado del siglo XIX, esta se inauguró hasta el 18 de diciembre de 1874 durante el gobierno del licenciado Ignacio L. Vallarta, siendo su director Diego Baz, la Biblioteca puso a disposición de sus usuarios veinte mil volúmenes.{'\n'}{'\n'}
            En 1925 pasó a formar parte de la Universidad de Guadalajara, el gobernador José Guadalupe Zuno Hernández decretó el 15 de septiembre en lo relativo a la Ley Orgánica de la Universidad de Guadalajara que la Biblioteca Pública sería, de esa fecha en adelante, una de las instituciones que formarían parte de la Universidad tomando una función de apoyo y fomento a la cultura. Primero formó parte del Instituto de Bibliotecas, posteriormente de la Coordinación de Bibliotecas y a partir de 2009 del Centro Universitario de Ciencias Sociales y Humanidades (CUCSH)
            </Text>
          </View>
          <View style={styles.separator} />
        </ScrollView>
      </View>
    </View>
  );
};

export default AcervoHisPiso1A4;
