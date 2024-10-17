import { View, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import React from 'react';

const App = () => {
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      const timer = setTimeout(() => {
        navigation.navigate('INICIO');
      }, 1000); 
      return () => clearTimeout(timer);
    }, [navigation])
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./fotos/Inicio.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default App;
