import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';

const sections = [
  {
    title: 'Busqueda en base de datos',
    icon: require('./fotos/ico2.png'),
    link: 'https://www.ejemplo.com'
  },
  {
    title: 'Presentación',
    icon: require('./fotos/ico3.png'),
    link: 'https://www.ejemplo.com'
  },
  {
    title: 'Sitios de interés',
    icon: require('./fotos/ico4.png'),
    link: 'https://www.ejemplo.com'
  }
];

const SectionItem = ({ title, icon, link }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={() => link && Linking.openURL(link)}
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 5,
      marginLeft: '5%'
    }}
  >
    <Image
      source={icon}
      style={{ width: 20, height: 20, marginRight: 10 }}
    />
    <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>
      {title}
    </Text>
  </TouchableOpacity>
);

const Piso2 = () => (
  <View style={{ flex: 1, backgroundColor: '#eeeeee' }}>
    <View style={{ height: '30%', backgroundColor: '#7b0000', margin: 10, borderRadius: 5 }} />
    <Image
      source={require('./fotos/Libros2.png')}
      style={{
        height: '25%',
        width: '60%',
        borderRadius: 7,
        position: 'absolute',
        top: 25,
        left: '20%'
      }}
    />

    {sections.slice(0, 2).map((section, index) => (
      <SectionItem key={index} title={section.title} icon={section.icon} link={section.link} />
    ))}

    <View
      style={{
        borderWidth: 1,
        borderColor: 'gray',
        width: '90%',
        alignSelf: 'center',
        marginVertical: 20
      }}
    />

    <ScrollView
      style={{
        marginHorizontal: '5%',
        marginVertical: '-5%',
        marginBottom: -20,
        borderColor: 'gray',
        borderWidth: 0,
      }}
    >
      <Text style={{color:'black', fontSize: 18, lineHeight: 25, textAlign: 'justify', borderWidth: 0, borderColor: 'gray' }}>
        Dentro de la Colección privada se ha conformado el Tesoro de la Biblioteca Álvarez del Castillo. 
        Entre ellas se incluyen las siguientes colecciones: Hemeroteca, Manuscritos, Impresos Europeos, 
        Impresos Mexicanos, Impresos Jaliscienses, Lenguas Indígenas, Misceláneas, Códices Facsimilares y 
        el Fondo Reservado. Aquí se encuentran valiosas piezas históricas que abarcan varios siglos de cultura 
        y conocimiento. La colección está abierta a académicos e investigadores, con la finalidad de promover 
        el estudio y la preservación de estos importantes documentos.
      </Text>
    </ScrollView>

    <View style={{ marginTop: 20 }}>
      <SectionItem title={sections[2].title} icon={sections[2].icon} link={sections[2].link} />
      
      <Image
        source={require('./fotos/Logo3.jpg')}
        style={{ height: 50, width: 100, marginTop: 10, marginLeft:'5%' }}
      />
    </View>
  </View>
);

export default Piso2;
