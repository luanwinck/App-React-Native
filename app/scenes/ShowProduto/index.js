import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'react-router-native'

import styles from './style'

import Numeracao from '../../component/Numeracao/Numeracao'

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        text: '',
        numeracoes: [33,34,35,36,37,38,39,40],
        numeracaoMarcada: []
    };
    
    this._selectNumeracao = this._selectNumeracao.bind(this)
  }

  _selectNumeracao(num) {
    let numeracaoMarcada = this.state.numeracaoMarcada
    if (numeracaoMarcada.includes(num)) {
        numeracaoMarcada.shift(num)
    }
    else {
        numeracaoMarcada.push(num)
    }
    this.setState({
        numeracaoMarcada
    })
  }

  renderNumeracao() {
      return this.state.numeracoes.map((num, key) => {
          const style = this.state.numeracaoMarcada.includes(num) ? styles.numeracaoMarcada : null;
          return <Numeracao key={key}
                            num={num} 
                            styleView={[styles.containerNumero, style]} 
                            styleText={[styles.text, style]} 
                            selectNumeracao={this._selectNumeracao} 
                            />
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Link to="/">
                <Text>Voltar</Text>
        </Link>
        <Text style={[styles.text, styles.title]}>
            AREZZO
        </Text>
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


