import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F5FCFF',
    },
    title: {
      fontSize: 42,
      padding: 10,
      marginTop: -40,
    },
    image: {
        width: 250, 
        height: 250,
        marginLeft: 50,
    },
    text: {
        textAlign: 'center',
        color: 'black'
    },
    textNome: {
        marginTop: 10,
        marginBottom: 10
    },
    textBold: {
        fontWeight: 'bold',
    },
    textPreco: {
        fontWeight: 'bold',
        fontSize: 20
    },
    textLink: {
        textDecorationLine: 'underline',
        marginTop: 20
    },
    containerNumeracao: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    containerNumero: {
        width: 28,
        height: 28,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black',
        margin: 2
    },
    numeracaoMarcada: {
        backgroundColor: 'black',
        color: 'white'
    },
    footer: {
        backgroundColor: 'black',
        height: 100,
    }
  });

  export default styles;