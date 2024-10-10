import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const App = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRef = useRef(null);
  const images = [
    require('./fotos/carrusel1.png'),
    require('./fotos/carrusel2.png'),
    require('./fotos/carrusel3.png'),
    require('./fotos/carrusel4.png'),
    require('./fotos/carrusel5.png'),
    require('./fotos/carrusel6.png'),
  ];

  const buttons = [
    { title: 'QUIÉNES SOMOS', color: 'darkred', bgColor: 'white', icon: require('./fotos/ico1.png'), route: 'Qs' },
    { title: 'SERVICIOS', color: 'white', bgColor: '#FF5800', icon: require('./fotos/ico1.png'), route: 'S' },
    { title: 'ACERVO HISTÓRICO', color: 'darkred', bgColor: 'white', icon: require('./fotos/ico1.png'), route: 'Ah' },
    { title: 'Piso 1.1 Archivo...', color: 'darkred', bgColor: 'gainsboro', icon: require('./fotos/piso1.1.jpg'), route: 'Piso1' },
    { title: 'Piso 3 Hemeroteca...', color: 'darkred', bgColor: 'gainsboro', icon: require('./fotos/Antiguo3.jpg'), route: 'Piso3' },
    { title: 'Piso 2.3 Tesoro...', color: 'darkred', bgColor: 'gainsboro', icon: require('./fotos/Libreria.jpg'), route: 'Piso2' },
    { title: 'ACERVO CONTEMPORÁNEO', color: 'white', bgColor: '#FF5800', icon: require('./fotos/ico1.png'), route: 'Ac' },
    { title: 'Piso 2.2 Novedades', color: 'darkred', bgColor: 'gainsboro', icon: require('./fotos/Libreria5.jpg'), route: 'Piso2nove' },
    { title: 'Piso 4.1 Fondo...', color: 'darkred', bgColor: 'gainsboro', icon: require('./fotos/Libreria2.jpg'), route: 'Piso4' },
    { title: 'Piso 5.4 Ventana...', color: 'darkred', bgColor: 'gainsboro', icon: require('./fotos/Coleccion.jpg'), route: 'Piso5' },
    { title: 'BASE DE DATOS', color: 'darkred', bgColor: 'white', icon: require('./fotos/ico1.png'), route: 'Bd' },
    { title: 'EVENTOS', color: 'white', bgColor: '#FF5800', icon: require('./fotos/ico1.png'), route: 'Evnts' },
    { title: 'GALERIA HISTORICA', color: 'darkred', bgColor: 'White', icon: require('./fotos/ico1.png'), route: 'Gh' },
    { title: 'NOTICIAS', color: 'white', bgColor: '#FF5800', icon: require('./fotos/ico1.png'), route: 'Ntas' },
  ];

  const navigation = useNavigation();
  useEffect(() => {
    imageRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(imageRef.current);
  }, []);

  const renderButton = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate(item.route)}
      activeOpacity={1}
      style={{
        borderColor: 'gray',
        borderWidth: 0.5,
        width: '100%',
        height: 70,
        backgroundColor: item.bgColor,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
      }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={item.icon} style={{ height: 30, width: 30, marginRight: 10, borderRadius: 5 }}/>
        <Text style={{ color: item.color, fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
      </View>
      <Text style={{ color: item.color, fontSize: 10 }}>VER +</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{borderColor: 'red', borderWidth:0, width:'100%', height: '100%',}}>
        <Image source={images[currentImageIndex]} style={{ width: '100%', height: 200, borderWidth: 1, borderColor: 'gray' }}/>
        <FlatList data={buttons} renderItem={renderButton} keyExtractor={(item) => item.route}/>
    </View>
  );
};

export default App;

//adb reverse tcp:8081 tcp:8081