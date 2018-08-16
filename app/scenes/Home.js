import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Link } from 'react-router-native'

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder=" Digite aqui!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
        <Link to="/inicial">
            <Text>Tela inicial</Text>
        </Link>
      </View>
    );
  }
}


