import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default class QuienesSomABHoy extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerBanner}></View>
        <Image source={require('./fotos/Libros3.jpg')} style={styles.headerImage}/>
        <Text style={styles.presentationText}>Hoy en dia</Text>
        <View style={styles.divider}></View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.contentContainer}>
            <Text style={styles.contentText}>
            La génesis de la globalización está dando lugar a un proceso de transformación mundial marcado por cambios que trascienden fronteras. Este fenómeno no se limita solo a lo regional, sino que se caracteriza por su naturaleza relacional múltiple y por tener propiedades espacio-temporales complejas. En el ámbito bibliotecario, la comprensión intercultural e interdisciplinar se vuelve esencial para el beneficio de los usuarios. Las bibliotecas, enfrentamos el desafío de adaptarnos a un entorno globalizado en el que la información y las ideas circulan a una velocidad sin precedente. 
            {'\n'}{'\n'}El ejercicio del derecho de acceso a la información se convierte en el objetivo fundamental de la globalización. Las bibliotecas no solo debemos facilitar acceso a recursos locales sino también integrar y proporcionar entrada a fuentes internacionales. Esto implica diversificar colecciones y servicios para reflejar esta riqueza y pluralidad de perspectivas, además de desempeñar un papel importante como espacio de encuentro y diálogo intercultural, fomentando y contribuyendo al intercambio de ideas y a fortalecer los lazos sociales, promoviendo la tolerancia y el respeto en una sociedad global.
            {'\n'}{'\n'}La transformación del antiguo concepto de biblioteca hacia una perspectiva más amplia y diversificada es fundamental en el contexto actual en el que nos encontramos. Esta evolución va más allá de lo tradicional como lugar físico dedicado a libros impresos y se encamina hacia un concepto de diversificación de formatos y productos que contribuyen al enriquecimiento de estas instituciones como centros de lectura y conocimiento. 
            {'\n'}{'\n'}La diversificación de productos y formatos, físicos y/o virtuales, convierte a la Biblioteca en un componente esencial e irremplazable de la infraestructura cultural, educativa e informativa del territorio. Además de ofrecer una amplia gama de recursos, también desempeña un papel crucial en la promoción de la alfabetización digital, la educación continua y la participación en la sociedad del conocimiento. Es el espacio donde la comunidad puede acceder a información, nutrir la curiosidad intelectual y participar en la cultura y el conocimiento.
            {'\n'}{'\n'}Dicha contribución enfrenta múltiples complejidades que impone la información misma, sus medios de acceso y de disponibilidad como el crecimiento de la oferta de información y el incremento de costos afectados por limitados recursos presupuestales y aunados al auge de los diversos medios electrónicos y digitales que permiten una mayor cobertura, diseminación, acceso y transferencia de la información. 
            {'\n'}{'\n'}Es por todo esto que la BPEJ partiendo de dicha realidad plantea el desarrollo de habilidades que permitan utilizar la tecnología, tener un conocimiento permanente del comportamiento editorial e informativo, y detectar no solo la información que se requiere, sino el medio idóneo en el que ésta se encuentra disponible disponible. Se aprovecha la evolución tecnológica para modernizar operaciones, mejorar la accesibilidad a las colecciones y para optimizar la preservación del patrimonio cultural. La combinación de automatización, digitalización y difusión en línea permite adaptarse a los cambios en el entorno informativo y ofrecer servicios más eficientes y amplios a su comunidad de usuarios.
            {'\n'}{'\n'}La implementación de una plataforma donde se puede consultar desde el catálogo automatizado demuestra un compromiso con la modernización, la accesibilidad y la satisfacción del usuario. La combinación de servicios automatizados, acceso a documentos digitales y la integración de fuentes en línea de calidad nos posiciona como recurso valioso en el panorama informativo y cultural.
            {'\n'}{'\n'}Es por todo esto que nuestra biblioteca, la de todos, se concibe entonces como una institución comprometida con el resguardo, la conservación y el acceso gratuito a la información en la que se destaca su importancia como custodio de la memoria histórica, como facilitador de la educación y como contribuyente de la identidad cultural, convirtiéndose en garante de archivos históricos, colecciones bibliográficas y manuscritos de carácter único cuya importancia es fundamental para la identidad y reconstrucción histórica del Occidente y Norte mexicanos, además de contribuir a la construcción continua de la identidad documental de nuestro país con fondos contemporáneos impresos y digitales. La combinación de responsabilidades históricas y contemporáneas demuestra nuestra relevancia continua en la sociedad.
            {'\n'}{'\n'}Una ciudadanía que no tenga acceso a la información está condenada a marginarse de los beneficios que trae el participar en la sociedad de la información y del conocimiento, por ello la Biblioteca Pública del Estado de Jalisco “Juan José Arreola” gestiona los procesos de disponibilidad y de acceso a la información que pueden transformar exitosamente la vida económica, política, social y cultural de la comunidad jalisciense.</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#eeeeee',
  },
  headerBanner: {
    height: '35%',
    width: '95%',
    backgroundColor: '#352011',
    borderRadius:10,
    marginLeft: 10,
    marginTop: 10,
    borderWidth:2,
    borderColor:'#7D4B23'
  },
  headerImage: {
    height: '25%',
    width: '70%',
    marginTop: '-60%',
    borderRadius: 10,
    marginLeft: '15%',
  },
  presentationText: {
    fontWeight: 'bold',
    color: 'gray',
    fontSize:30,
    marginLeft: '5%',
    marginTop: '15%',
  },
  divider: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '90%',
    marginLeft: 20,
    marginTop: 20,
  },
  scrollView: {
    marginTop: 10,
    marginLeft: '5%',
  },
  contentContainer: {
    width: '95%',
  },
  contentText: {
    color: 'black',
    fontSize: 15,
    lineHeight: 25,
    textAlign: 'justify',
  },
});
