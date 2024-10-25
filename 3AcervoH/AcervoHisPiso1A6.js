import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, Dimensions, Linking } from 'react-native';

const { width, height } = Dimensions.get('window');

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

  handleLogoPress = () => {
    const url = 'https://www.gob.mx/agn';
    Linking.openURL(url).catch(err => console.error("Failed to open URL:", err));
  };

  render() {
    const { showImage } = this.state;
    const { width, height } = Dimensions.get('window');

    return (
      <View style={{ flex: 1, backgroundColor: '#eeeeee' }}>
        {showImage ? (
          <ImageBackground
            source={require('../fotos/micro.jpg')}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            blurRadius={10}
          >
            <View style={{ alignItems: 'center' }}>
              <Image 
                source={require('../fotos/micro.jpg')} 
                style={{ height: height * 0.6, width: width * 0.8, borderRadius: 10 }}
              />
              <TouchableOpacity onPress={this.handleCloseImage} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Cerrar Imagen</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        ) : (
          <View style={{ flex: 1 }}>
            <View style={[styles.imageContainer, { height: height * 0.3, width: width * 0.9 }]}>
              <Image 
                source={require('../fotos/micro.jpg')} 
                style={{ height: '70%', width: '60%', marginTop: '10%', borderRadius: 5, alignSelf: 'center' }}
              />
              <TouchableOpacity 
                style={styles.viewImageButton} 
                onPress={this.handleImagePress}
              >
                <Text style={styles.viewImageText}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.titleText}>Piso 1.6 Microfilmes</Text>

            <ScrollView style={{ borderWidth: 0, width: '90%', marginLeft: '5%' }} contentContainerStyle={{ paddingHorizontal: 20 }}>
              <View style={styles.divider}></View>
              
              <Text style={styles.descriptionText}>
                Material microfilmado del Cabildo de Guadalajara, de algunas parroquias de las Diócesis de Guadalajara, Zacatecas, Aguascalientes y Durango; de los Cónsules Americanos en México durante la época la Revolución (NARA), así como otros archivos particulares.
              </Text>

              <View style={styles.divider}></View>

              <Text style={styles.sectionTitle}>1.6.1. Libros de Cabildo de Guadalajara, siglos XVI-XVIII (15 rollos)</Text>

              <View style={styles.divider}></View>

              <Text style={styles.sectionTitle}>1.6.2. NARA Archivos Nacionales y Administración de documentos de los Estados Unidos (441 rollos)</Text>

              <View style={styles.divider}></View>

              <Text style={styles.sectionTitle}>1.6.3 Archivos Particulares: Correspondencia de Isabel Kelly y Carl Saber (1 rollo y una copia)</Text>

              <View style={styles.divider}></View>

              <Text style={styles.sectionTitle}>1.6.4. Parroquias de las Diócesis de Guadalajara, Zacatecas, Aguascalientes y Durango.</Text>

              <View style={styles.divider}></View>

              <Text style={styles.descriptionText}>Archivo de la Parroquia de Santa María de los Lagos. Arquidiócesis de Guadalajara (188 Rollos)</Text>
              <Text>{'\n'}• Bautismos de hijos legítimos 1634-1911{'\n'}• Matrimonios 1667-1798{'\n'}• Defunciones 1708-1910{'\n'}• Fábrica1733-1787{'\n'}• Padrones 1810-1874</Text>

              <View style={styles.divider}></View>

              <Text style={styles.descriptionText}>Archivo de la Parroquia de Nuestra Señora de Asunción. Jalostotitlán, Jalisco. Arquidiócesis de Guadalajara (136 Rollos)</Text>
              <Text>{'\n'}• Bautismos de hijos legítimos 1698-1910{'\n'}• Bautismos de hijos naturales 1878-1892{'\n'}• Información matrimonial 1751-1909{'\n'}• Matrimonios 1707-1760{'\n'}• Información matrimonial de Indios 1726-1809{'\n'}• Información de defunciones 1659-1686{'\n'}• Defunciones 1750-1933{'\n'}• Padrones 1764-1794</Text>

              <View style={styles.divider}></View>

              <Text style={styles.descriptionText}>Archivo de la Vicaria de San Miguel el Alto, perteneciente a la Parroquia de Jalostotitlán</Text>
              <Text>{'\n'}• Bautismos y entierros 1773-1779</Text>

              <View style={styles.divider}></View>

              <Text style={styles.descriptionText}>Archivo de la Vicaria de Ciénega de Mata. Parroquia de Ojeos, Jalisco. Diócesis de Aguascalientes (72 Rollos)</Text>
              <Text>{'\n'}• Bautismos de hijos legítimos 1670-1916{'\n'}• Bautismos de hijos naturales 1865-1891{'\n'}• Información matrimonial 1699-1907{'\n'}• Matrimonios 1667-1912{'\n'}• Defunciones 1667-1867</Text>

              <View style={styles.divider}></View>

              <Text style={styles.descriptionText}>Archivo de la Parroquia de San Luis en Colotlán, Jalisco. Diócesis de Zacatecas (81 Rollos)</Text>
              <Text>{'\n'}• Bautismos de hijos legítimos{'\n'}• Bautismos de hijos naturales 1703-1912{'\n'}• Información matrimonial 1842-1899{'\n'}• Matrimonios 1758-1911{'\n'}• Defunciones 1720-1902</Text>

              <View style={styles.divider}></View>

              <Text style={styles.descriptionText}>Archivo de la catedral de Durango, siglo XVII-XVIII, (2 Rollos)</Text>
              <Text>{'\n'}• Visita de Obispo{'\n'}• Matrimonios, Confirmaciones, etc.{'\n'}• Construcciones de Iglesia y Capillas{'\n'}• Autorización para petición de limosnas</Text>
            </ScrollView>

            <TouchableOpacity onPress={this.handleLogoPress}>
              <Image source={require('../fotos/Logo3.jpg')} style={styles.logo} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

const styles = {
  imageContainer: {
    backgroundColor: '#454545',
    borderRadius: 5,
    marginLeft: '5%',
    marginTop: 10,
  },
  viewImageButton: {
    borderWidth: 0,
    borderColor: 'white',
    width: '30%',
    height: '7%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },
  viewImageText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 20,
  },
  titleText: {
    color: 'white',
    fontSize: 13,
    borderRadius: 5,
    backgroundColor: 'darkred',
    marginTop: 10,
    marginHorizontal: 20,
    textAlign: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: 'gray',
    marginTop: 10,
    marginHorizontal: -1,
  },
  descriptionText: {
    color: 'black',
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'justify',
  },
  sectionTitle: {
    color: 'black',
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'justify',
    fontWeight: 'bold',
  },
  logo: {
    height: height * 0.09,
    width: width * 0.5,
    marginLeft: 20,
    marginTop: 10,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#444',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    textAlign: 'center',
  },
};