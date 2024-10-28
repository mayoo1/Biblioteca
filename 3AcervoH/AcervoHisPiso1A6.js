import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, Linking, StyleSheet, Dimensions } from 'react-native';
import styles from '../3Diseno';

const { width } = Dimensions.get('window');

export default class QuienesSom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showImage: false,
    };
  }

  handleImagePress = () => {
    this.setState({ showImage: true });
  };

  handleCloseImage = () => {
    this.setState({ showImage: false });
  };

  openURL = (url) => {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  };

  render() {
    const { showImage } = this.state;

    return (
      <View style={styles.container}>
        {showImage ? (
          <ImageBackground
            source={require('../fotos/micro.jpg')}
            style={styles.imageBackground}
            blurRadius={10}
          >
            <View style={styles.imageView}>
              <Image
                source={require('../fotos/micro.jpg')}
                style={[styles.fullImage, {height: width * 1.2, width: width * 0.8}]}
              />
              <TouchableOpacity onPress={this.handleCloseImage} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Cerrar Imagen</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        ) : (
          <View style={{ flex: 1 }}>
            <View style={[styles.infoContainer, {height: width * 0.70, width: width * 0.95}]}>
              <Image
                source={require('../fotos/micro.jpg')}
                style={[styles.infoImage, {height: width * 0.45, width: width * 0.75}]}
              />
              <TouchableOpacity style={[styles.viewButton, {height: width * 0.08, width: width * 0.3}]} onPress={this.handleImagePress}>
                <Text style={styles.viewButtonText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.titleText}>Piso 1 Archivos y Mapoteca</Text>
            <Text style={styles.subtitleText}>1.6. Microfilmes</Text>

            <ScrollView style={styles.scrollView}>
              <View style={styles.separator} />

              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                Material microfilmado del Cabildo de Guadalajara, de algunas parroquias de las Diócesis de Guadalajara, Zacatecas, Aguascalientes y Durango; de los 
                Cónsules Americanos en México durante la época la Revolución (NARA), así como otros archivos particulares.{'\n'}              
                </Text>
              </View>

              <View style={styles.separator} />
              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                <Text style={{fontWeight: 'bold'}}>1.6.1. Libros de Cabildo de Guadalajara</Text>, siglos XVI-XVIII (15 rollos){'\n'}              
                </Text>
              </View>

              <View style={styles.separator} />
              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                <Text style={{fontWeight: 'bold'}}>1.6.2. NARA</Text> Archivos Nacionales y Administración de documentos de los Estados Unidos (441 rollos){'\n'}              
                </Text>
              </View>

              <View style={styles.separator} />
              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                <Text style={{fontWeight: 'bold'}}>1.6.3 Archivos Particulares:</Text> Correspondencia de Isabel Kelly y Carl Saber (1 rollo y una copia){'\n'}              
                </Text>
              </View>

              <View style={styles.separator} />
              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                <Text style={{fontWeight: 'bold'}}>1.6.4. Parroquias</Text> de las Diócesis de Guadalajara, Zacatecas, Aguascalientes y Durango.{'\n'}              
                </Text>
              </View>
              
              <View style={styles.separator} />
              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                <Text style={{fontWeight: 'bold'}}>Archivo de la Parroquia de Santa María de los Lagos.{'\n'}</Text>     
                  Arquidiócesis de Guadalajara (188 Rollos){'\n'}
                  Bautismos de hijos legítimos 1634-1911{'\n'}
                  Matrimonios 1667-1798{'\n'}
                  Defunciones 1708-1910{'\n'}
                  Fábrica1733-1787{'\n'}
                  Padrones 1810-1874{'\n'}
                </Text>
              </View>

              <View style={styles.separator} />
              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                <Text style={{fontWeight: 'bold'}}>Archivo de la Parroquia de Nuestra Señora de Asunción. Jalostotitlán, Jalisco.{'\n'}</Text>     
                Arquidiócesis de Guadalajara (136 Rollos){'\n'}
                Bautismos de hijos legítimos 1698-1910{'\n'}
                Bautismos de hijos naturales 1878-1892{'\n'}
                Información matrimonial 1751-1909{'\n'}
                Matrimonios 1707-1760{'\n'}
                Información matrimonial de Indios 1726-1809{'\n'}
                Información de defunciones 1659-1686{'\n'}
                Defunciones 1750-1933{'\n'}
                Padrones 1764-1794{'\n'}
                </Text>
              </View>

              <View style={styles.separator} />
              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                <Text style={{fontWeight: 'bold'}}>Archivo de la Vicaría de San Miguel el Alto, </Text>     
                perteneciente a la Parroquia de Jalostotitlán Bautismos y entierros 1773-1779 {'\n'}
                </Text>
              </View>

              <View style={styles.separator} />
              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                <Text style={{fontWeight: 'bold'}}>Archivo de la Vicaría de Ciénega de Mata.</Text> Parroquia de Ojuelos, Jalisco.{'\n'}     
                Diócesis de Aguascalientes (72 Rollos){'\n'}
                Bautismos de hijos legítimos 1670-1916{'\n'}
                Bautismos de hijos naturales 1865-1891{'\n'}
                Información matrimonial 1699-1907{'\n'}
                Matrimonios 1667-1912{'\n'}
                Defunciones 1667-1867{'\n'}
                </Text>
              </View>

              <View style={styles.separator} />
              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                <Text style={{fontWeight: 'bold'}}>Archivo de la Parroquia de San Luis en Colotlán, Jalisco.</Text>{'\n'}     
                Diócesis de Zacatecas (81 Rollos){'\n'} 
                Bautismos de hijos legítimos{'\n'} 
                Bautismos de hijos naturales 1703-1912{'\n'} 
                Información matrimonial 1842-1899{'\n'} 
                Matrimonios 1758-1911{'\n'} 
                Defunciones 1720-1902{'\n'} 
                Padrones 1718-1818{'\n'} 
                </Text>
              </View>

              <View style={styles.separator} />
              <View style={[styles.descriptionContainer, {width: width * 0.85}]}>
                <Text style={styles.descriptionText}>
                <Text style={{fontWeight: 'bold'}}>Archivo de la catedral de Durango,</Text>{'\n'}     
                siglo XVII-XVIII, (2 Rollos){'\n'}
                Visita de Obispo{'\n'}
                Matrimonios, Confirmaciones, etc.{'\n'}
                Construcciones de Iglesia y Capillas{'\n'}
                Autorización para petición de limosnas{'\n'}  
                </Text>
              </View>

              <View style={styles.separator} />
              <TouchableOpacity onPress={() => this.openURL('https://www.gob.mx/agn')}style={{ height: width * 0.30, width: width * 0.5 }}>
              <Image source={require('../fotos/Logo3.jpg')} style={[styles.logoImage,{height: width * 0.25, width: width * 0.5}]} />
              </TouchableOpacity>
            </ScrollView>
          </View>
        )}
      </View>
    );
  }
}
