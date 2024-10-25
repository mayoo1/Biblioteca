import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../3Diseno';

const { width, height } = Dimensions.get('window');

const MenuButton = ({ title, onPress, imageSource }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={[styles.buttonM, {height: width * 0.2, width: width * 0.95}]}>
    <Image source={imageSource} style={[styles.buttonImageM, {height: width * 0.15, width: width * 0.15}]} />
    <Text style={styles.buttonTextM}>{title}</Text>
    <Image source={require('../fotos/ico1.png')} style={{height: width * 0.1, width: width * 0.1}} />
  </TouchableOpacity>
);

const App = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.containerM}>
      <ScrollView contentContainerStyle={styles.scrollM}>
        <MenuButton title="1.5.1 Dirección General de Rentas" onPress={() => navigation.navigate('Ahp1A5d1')} imageSource={require('../fotos/Antiguo18.jpg')}/>
        <MenuButton title="1.5.2 Ferrocarriles de Jalisco" onPress={() => navigation.navigate('Ahp1A5d2')} imageSource={require('../fotos/ferrocarriles.jpg')}/>
        <MenuButton title="1.5.3 Jesús Camarena Archivos Particulares" onPress={() => navigation.navigate('Ahp1A5d3')} imageSource={require('../fotos/jesus.jpg')}/>
        <MenuButton title="1.5.4 Capitán de Fragata de la Armada Mexicana Juan José" onPress={() => navigation.navigate('Ahp1A5d4')} imageSource={require('../fotos/juanjose.jpg')}/>
      </ScrollView>
    </View>
  );
};

export default App;
