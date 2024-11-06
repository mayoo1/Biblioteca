import { StyleSheet } from 'react-native';

//**************************************************************** ESTILO DE DOCUMENTOS ******************************************************************//
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#eeeeee',
    },
    imageBackground: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageView: {
      alignItems: 'center',
    },
    fullImage: {
      borderRadius: 5,
    },
    closeButton: {
      marginTop: '30%',
      backgroundColor: '#242424',
      padding: '2%',
      borderRadius: 5,
    },
    closeButtonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color:'white'
    },
    infoContainer: {
      backgroundColor: '#242424',
      borderColor:'black',
      margin: '2.5%',
      borderRadius: 5,
      borderWidth:0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    infoImage: {
      borderRadius: 5,
    },
    viewButton: {
      alignSelf: 'center',
      justifyContent: 'center',
      marginTop: '5%',

      borderRadius: 5,
    },
    viewButtonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 15,
      textAlign: 'center',
    },
    titleText: {
      fontWeight: 'bold',
      color: 'darkred',
      fontSize: 22,
      marginLeft: '5%',
      marginTop: '2%',
    },
    subtitleText: {
      fontWeight: 'bold',
      color: 'gray',
      fontSize: 16,
      marginLeft: '5%',
      marginTop: '3%',
      width: '90%'
    },
    scrollView: {
      marginTop: '2%',
    },
    separator: {
      borderWidth: 1,
      borderColor: 'gray',
      width: '90%',
      marginLeft: '5%',
      marginTop: '2%',
    },
    iconImage: {
      marginLeft: '7.5%',
      marginTop: '3%',
    },
    sectionTitle: {
      fontWeight: 'bold',
      color: 'black',
      fontSize: 15,
      marginLeft: '16%',
      marginTop: '-6%',
      borderColor:'black',
      borderWidth:0,
    },
    descriptionContainer: {
      marginLeft: '7.5%',
      borderColor:'black',
      borderWidth:0
    },
    descriptionText: {
      color: 'black',
      fontSize: 18,
      lineHeight: 25,
      textAlign: 'justify',
      marginTop: '3%',
    },
    logoImage: {
      marginLeft: '11%',
      marginTop: '4%',
    },
    // PONER DOS LOGOS JUNTOS
    logoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: '2%',
    },

    //**************************************************************** ESTILO DEL MENU *******************************************************************//
    
    containerM: {
        flex: 1,
        backgroundColor: 'gainsboro',
        alignItems: 'center',
        paddingTop: '3%',
      },
      scrollM: {
        alignItems: 'center',
        paddingHorizontal: '2%',
      },
      buttonM: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        marginVertical: '2.5%',
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: '3%',
      },
      buttonImageM: {
        borderRadius: 7,
      },
      buttonTextM: {
        flex: 1,
        color: 'darkred',
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: '3%',
        textAlign: 'left',
      },   
      
      
//**************************************************************** ESTILO DEL SERV *******************************************************************//

      boldTitle: {
        fontWeight: 'bold',
        color: 'darkred',
      },
      phoneText: {
        color: '#ce2307',
        fontWeight: 'bold',
      }, 
      mailText: {
        color: 'darkred',
        fontWeight: 'bold',
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 10,
      },
      subtitle: {
        fontSize: 14,
        color: '#888',
        marginBottom: 10,
      },
      link: {
        fontSize: 14,
        color: 'darkred',
        textDecorationLine: 'underline',
        marginBottom: 15,
      },
      

});
export default styles;