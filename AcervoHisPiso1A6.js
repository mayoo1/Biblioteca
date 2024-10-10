import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

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

  render() {
    const { showImage } = this.state;

    return (
      <View style={{ flex: 1, backgroundColor: '#eeeeee' }}>
        {showImage ? (
          <ImageBackground
            source={require('./fotos/micro.jpg')}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            blurRadius={10}
          >
            <View style={{ alignItems: 'center' }}>
              <Image 
                source={require('./fotos/micro.jpg')} 
                style={{ height: 450, width: 300, borderRadius: 10 }}
              />
              <TouchableOpacity onPress={this.handleCloseImage} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Cerrar Imagen</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        ) : (
          <View style={{ flex: 1 }}>
            <View style={{ height: '50%', width: '90%', backgroundColor: '#454545', borderRadius: 5, marginLeft: 20, marginTop: 10 }}>
              <Image 
                source={require('./fotos/micro.jpg')} 
                style={{ height: '70%', width: '60%', marginTop: '10%', borderRadius: 5, alignSelf: 'center' }}
              />
              <TouchableOpacity style={{ borderWidth: 0, borderColor: 'white', width: '30%', height: '7%', alignSelf: 'center', justifyContent: 'center', marginTop: 1 }} onPress={this.handleImagePress}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, textAlign: 'center', marginTop:20, height:'100%', borderColor:'red', borderWidth:0}}>Ver Imagen</Text>
              </TouchableOpacity>
            </View>
            <Text style={{color:'white', fontSize:13, borderRadius: 5, backgroundColor: 'darkred', marginTop: 10, marginHorizontal: 20, textAlign:'center' }}>Piso 1.6 Microfilmes</Text>

            <View style={{ flexDirection: 'row', width: '40%', alignItems: 'center', marginTop: 10, marginLeft: 20 }}>

            </View>

            <ScrollView style={{ borderWidth: 0, width: '90%', marginLeft: 15 }} contentContainerStyle={{ paddingHorizontal: 20}}>

              <View style={{ height: 1, backgroundColor: 'gray', marginTop: 10, marginHorizontal: -1 }}></View>
              
              <Text style={{ color: 'black', fontSize: 15, lineHeight: 20, textAlign: 'justify', }}>
              Material microfilmado del Cabildo de Guadalajara, de algunas parroquias de las Diócesis de Guadalajara, Zacatecas, Aguascalientes y Durango; de los Cónsules Americanos en México durante la época la Revolución (NARA), así como otros archivos particulares.  
              </Text>
              <View style={{ height: 1, backgroundColor: 'gray', marginTop: 20, marginHorizontal: -1 }}></View>
              
              <Text style={{ color: 'black', fontSize: 15, lineHeight: 20, textAlign: 'justify', fontWeight:'bold'}}>
              {'\n'}1.6.1. Libros de Cabildo de Guadalajara, siglos XVI-XVIII (15 rollos)
              </Text>

              <View style={{ height: 1, backgroundColor: 'gray', marginTop: 20, marginHorizontal: -1 }}></View>

              <Text style={{ color: 'black', fontSize: 15, lineHeight: 20, textAlign: 'justify', fontWeight:'bold'}}>
              {'\n'}1.6.2. NARA Archivos Nacionales y Administración de documentos de los Estados Unidos (441 rollos)
              </Text>

              <View style={{ height: 1, backgroundColor: 'gray', marginTop: 20, marginHorizontal: -1 }}></View>

              <Text style={{ color: 'black', fontSize: 15, lineHeight: 20, textAlign: 'justify', fontWeight:'bold'}}>
              {'\n'}1.6.3 Archivos Particulares: Correspondencia de Isabel Kelly y Carl Saber (1 rollo y una copia)
              </Text>

              <View style={{ height: 1, backgroundColor: 'gray', marginTop: 20, marginHorizontal: -1 }}></View>

              <Text style={{ color: 'black', fontSize: 15, lineHeight: 20, textAlign: 'justify', fontWeight:'bold'}}>
              {'\n'}1.6.4. Parroquias de las Diócesis de Guadalajara, Zacatecas, Aguascalientes y Durango.
              </Text>
             
              <View style={{ height: 1, backgroundColor: 'gray', marginTop: 20, marginHorizontal: -1 }}></View>

              <Text style={{ color: 'black', fontSize: 15, lineHeight: 20, textAlign: 'justify'}}>
              {'\n'}Archivo de la Parroquia de Santa María de los Lagos. Arquidiócesis de Guadalajara (188 Rollos)</Text>
              <Text>
              {'\n'}• Bautismos de hijos legítimos 1634-1911
              {'\n'}• Matrimonios  1667-1798
              {'\n'}• Defunciones  1708-1910
              {'\n'}• Fábrica1733-1787
              {'\n'}• Padrones   1810-1874
              </Text>

              <View style={{ height: 1, backgroundColor: 'gray', marginTop: 20, marginHorizontal: -1 }}></View>

              <Text style={{ color: 'black', fontSize: 15, lineHeight: 20, textAlign: 'justify'}}>
              {'\n'}Archivo de la Parroquia de Nuestra Señora de Asunción. Jalostotitlán, Jalisco. Arquidiócesis de Guadalajara (136 Rollos)</Text>
              <Text>
              {'\n'}• Bautismos de hijos legítimos 1698-1910
              {'\n'}• Bautismos de hijos naturales 1878-1892
              {'\n'}• Información matrimonial 1751-1909
              {'\n'}• Matrimonios 1707-1760
              {'\n'}• Información matrimonial de Indios 1726-1809
              {'\n'}• Información de defunciones 1659-1686
              {'\n'}• Defunciones 1750-1933
              {'\n'}• Padrones 1764-1794
              </Text>
              
              <View style={{ height: 1, backgroundColor: 'gray', marginTop: 20, marginHorizontal: -1 }}></View>

              <Text style={{ color: 'black', fontSize: 15, lineHeight: 20, textAlign: 'justify'}}>
              {'\n'} Archivo de la Vicaría de San Miguel el Alto, perteneciente a la Parroquia de Jalostotitlán</Text>
              <Text>
              {'\n'}• Bautismos y entierros  1773-1779
              </Text>
              
              <View style={{ height: 1, backgroundColor: 'gray', marginTop: 20, marginHorizontal: -1 }}></View>

              <Text style={{ color: 'black', fontSize: 15, lineHeight: 20, textAlign: 'justify'}}>
              {'\n'}Archivo de la Vicaría de Ciénega de Mata. Parroquia de Ojuelos, Jalisco. Diócesis de Aguascalientes (72 Rollos)</Text>
              <Text>
              {'\n'}• Bautismos de hijos legítimos 1670-1916
              {'\n'}• Bautismos de hijos naturales 1865-1891
              {'\n'}• Información matrimonial1699-1907
              {'\n'}• Matrimonios1667-1912
              {'\n'}• Defunciones1667-1867
              </Text>
             
              <View style={{ height: 1, backgroundColor: 'gray', marginTop: 20, marginHorizontal: -1 }}></View>

              <Text style={{ color: 'black', fontSize: 15, lineHeight: 20, textAlign: 'justify'}}>
              {'\n'}Archivo de la Parroquia de San Luis en Colotlán, Jalisco. Diócesis de Zacatecas (81 Rollos)</Text>
              <Text>
              {'\n'}• Bautismos de hijos legítimos
              {'\n'}• Bautismos de hijos naturales 1703-1912
              {'\n'}• Información matrimonial1842-1899
              {'\n'}• Matrimonios1758-1911
              {'\n'}• Defunciones1720-1902
              </Text>
              
              <View style={{ height: 1, backgroundColor: 'gray', marginTop: 20, marginHorizontal: -1 }}></View>

              <Text style={{ color: 'black', fontSize: 15, lineHeight: 20, textAlign: 'justify'}}>
              {'\n'}Archivo de la catedral de Durango, siglo XVII-XVIII, (2 Rollos)</Text>
              <Text>
              {'\n'}• Visita de Obispo
              {'\n'}• Matrimonios, Confirmaciones, etc.
              {'\n'}• Construcciones de Iglesia y Capillas
              {'\n'}• Autorización para petición de limosnas  
              </Text>
              
            </ScrollView>

            <Image source={require('./fotos/Logo3.jpg')} style={styles.logo} />
          </View>
        )}
      </View>
    );
  }
}

const styles = {
  logo: {
    height: '10%',
    width: '40%',
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
    fontSize: 16,
    fontWeight: 'bold',
  },
};
