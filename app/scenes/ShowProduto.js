import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'react-router-native'

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        text: '',
        numeracoes: [33,34,35,36,37,38,39,40],
        numeracaoMarcada: 33
    };
  }

  renderNumeracao() {
      return this.state.numeracoes.map((num, key) => {
          const style = this.state.numeracaoMarcada === num ? styles.numeracaoMarcada : null;
          return <View style={[styles.containerNumero, style]} key={key}
                    onTouchStart={() => this.setState({numeracaoMarcada: num})}>
                    <Text style={[styles.text, style]}>{num}</Text>
                </View>
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
            <Link to="/">
                    <Text>Voltar</Text>
            </Link>
            <Text style={[styles.text, styles.title]}>
            AREZZO
            </Text>
        </View>
        <Image
            source={{
                uri: 'https://img.lojasrenner.com.br/item/542390672/medium/1.jpg',
                method: 'POST',
                headers: {
                Pragma: 'no-cache',
                },
                body: 'Your Body goes here',
            }}
            style={styles.image}
            />
        <Text style={[styles.text, styles.textBold, styles.textNome]}>Nome do sapato</Text>        
        <Text style={[styles.text, styles.textPreco]}>R$ 300,00</Text>        
        <Text style={styles.text}>
            <Text style={styles.textBold}>6 x R$50,00 </Text>
            <Text>sem juros</Text>
        </Text> 
        <View style={styles.containerNumeracao}>
            {this.renderNumeracao()}
        </View>  
        <Text style={[styles.text, styles.textLink]}>Guia de tamanhos</Text>
        <View style={styles.footer}>

        </View>
      </View>
    );
  }
}

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
        position: 'absolute',
        bottom: 0
    }
  });


