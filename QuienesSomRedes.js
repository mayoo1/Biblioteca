import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';

const sections = [
  {
    title: 'Biblioteca Publica del Estado de Jalisco',
    icon: require('./fotos/ico3,2.png'),
    link: 'https://www.ejemplo.com'
  },
  {
    title: 'Facebook',
    icon: require('./fotos/Fb.png'),
    link: 'https://www.facebook.com/bibliojalisco'
  },
  {
    title: 'Twitter',
    icon: require('./fotos/Tw.png'),
    link: 'https://x.com/BiblioJalisco'
  },
  {
    title: 'Instagram',
    icon: require('./fotos/Ins.png'),
    link: 'https://www.instagram.com/biblio_jalisco/?hl=es-la'
  },
  {
    title: 'Youtube',
    icon: require('./fotos/YT.png'),
    link: 'https://www.youtube.com/@bibliotecapublicadelestado384'
  },
];

const SectionItem = ({ title, icon, link }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={() => link && Linking.openURL(link)}
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 10,
      margin: 5,
      backgroundColor: '#fff',
      borderRadius: 5,
      flex: 1,
    }}
  >
    <Image
      source={icon}
      style={{ width: 30, height: 30, marginRight: 10 }}
    />
    <Text style={{ color: '#333', fontSize: 15, fontWeight: 'bold' }}>
      {title}
    </Text>
  </TouchableOpacity>
);

const Piso2 = () => (
  <View style={{ flex: 1, backgroundColor: '#eeeeee' }}>
    <View style={{ height: '35%',width:'95%', backgroundColor: '#7b0000', margin: -20, borderRadius: 5, marginLeft:10, borderRadius:10, marginTop:10}} />
    <Image
      source={require('./fotos/Biblioteca2.jpg')}
      style={{
        height: '20%',
        width: '80%',
        borderRadius: 7,
        position: 'absolute',
        top: 40,
        left: '10%'
      }}
    />
    <Text style={{
      color: 'white',
      fontSize: 14,
      fontWeight: 'bold',
      height: '5%',
      width: '80%',
      marginLeft: '15%',
      marginTop: -40
    }}>
      Biblioteca Pública del Estado de Jalisco:
    </Text>
    <Text style={{
      color: 'white',
      fontSize: 14,
      fontWeight: 'bold',
      height: '3%',
      width: '80%',
      marginTop: -20,
      marginLeft: '32%'
    }}>
      "Juan Jose Arreola"
    </Text>

    <Text style={{
      color: 'black',
      fontSize: 17,
      fontWeight: 'bold',
      marginLeft: '6%',
      marginTop: 30,
      width: '90%'
    }}>
      Conoce más de nosotros en nuestras redes sociales
    </Text>

    <View style={{ padding: 25, marginTop:0}}>
      <Text style={{ fontSize: 20, lineHeight: 25, textAlign: 'justify', color: 'black' }}>
        Dentro de nuestras instalaciones puede usted consultar a texto completo y de alta calidad muchas de las colecciones
        con su respectiva base de datos con el fin de ayudarle con su tarea de investigación.
      </Text>
    </View>

    <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 50 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }}>
        <SectionItem title={sections[1].title} icon={sections[1].icon} link={sections[1].link} />
        <SectionItem title={sections[2].title} icon={sections[2].icon} link={sections[2].link} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 10 }}>
        <SectionItem title={sections[3].title} icon={sections[3].icon} link={sections[3].link} />
        <SectionItem title={sections[4].title} icon={sections[4].icon} link={sections[4].link} />
      </View>
    </View>
  </View>
);

export default Piso2;
