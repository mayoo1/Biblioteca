import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const App = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const screenWidth = Dimensions.get('window').width;
  const flatListRef = useRef(null);

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
    { title: 'Piso 1.1 Archivo de la Real Audiencia\n de la Nueva Galicia', color: 'darkred', bgColor: 'gainsboro', icon: require('./fotos/piso1.1.jpg'), route: 'Piso1' },
    { title: 'Piso 3 Hemeroteca Histórica', color: 'darkred', bgColor: 'gainsboro', icon: require('./fotos/Antiguo3.jpg'), route: 'Piso3' },
    { title: 'Piso 2.3 Tesoro Álvarez del Castillo', color: 'darkred', bgColor: 'gainsboro', icon: require('./fotos/Libreria.jpg'), route: 'Piso2' },
    { title: 'ACERVO CONTEMPORÁNEO', color: 'white', bgColor: '#FF5800', icon: require('./fotos/ico1.png'), route: 'Ac' },
    { title: 'Piso 2.2 Novedades', color: 'darkred', bgColor: 'gainsboro', icon: require('./fotos/Libreria5.jpg'), route: 'Piso2nove' },
    { title: 'Piso 4.1 Fondo de Jalisco', color: 'darkred', bgColor: 'gainsboro', icon: require('./fotos/Libreria2.jpg'), route: 'Piso4' },
    { title: 'Piso 5.4 Ventana de Shangai', color: 'darkred', bgColor: 'gainsboro', icon: require('./fotos/Coleccion.jpg'), route: 'Piso5' },
    { title: 'EVENTOS', color: 'white', bgColor: '#FF5800', icon: require('./fotos/ico1.png'), route: 'Evnts' },
    { title: 'GALERÍA HISTÓRICA', color: 'darkred', bgColor: 'White', icon: require('./fotos/ico1.png'), route: 'Gh' },
    { title: 'NOTICIAS', color: 'white', bgColor: '#FF5800', icon: require('./fotos/ico1.png'), route: 'Ntas' },
  ];

  const navigation = useNavigation();

  const renderButton = ({ item }) => {
    const isRightAligned =
      item.route === 'Ntas' ||
      item.route === 'Evnts' ||
      item.route === 'Ac' ||
      item.route === 'S';

    const showVerMas =
      item.route === 'Piso1' ||
      item.route === 'Piso3' ||
      item.route === 'Piso2' ||
      item.route === 'Piso2nove' ||
      item.route === 'Piso4' ||
      item.route === 'Piso5';

    const isPisoButton = item.route.startsWith('Piso');

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(item.route)}
        activeOpacity={1}
        style={[
          {
            borderColor: 'gray',
            borderWidth: 0.5,
            width: '100%',
            height: 70,
            backgroundColor: item.bgColor,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          },
          isRightAligned && { justifyContent: 'flex-end' }, 
        ]}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={item.icon} style={{ height: 40, width: 40, marginRight: 10, borderRadius: 5 }} />
          <Text style={{ color: item.color, fontSize: screenWidth < 375 ? 15 : 15, fontWeight: 'bold' }}>{item.title}</Text>
        </View>
        {showVerMas && <Text style={{ color: item.color, fontSize: screenWidth < 375 ? 10 : 10}}>VER +</Text>}
      </TouchableOpacity>
    );
  };

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / screenWidth);
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(nextIndex);

      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
    }, 3500);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <View style={{ flex: 1, borderColor: 'red', borderWidth: 0 }}>
      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        renderItem={({ item }) => (
          <Image source={item} style={{ width: screenWidth, height: 250}} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <FlatList
        data={buttons}
        renderItem={renderButton}
        keyExtractor={(item) => item.route}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default App;
