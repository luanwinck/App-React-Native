import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Link } from "react-router-native";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <Link to="/initialPage">
          <Text>Tela inicial</Text>
        </Link>
        <Link to="/produto">
          <Text>Tela produto</Text>
        </Link>
      </View>
    );
  }
}
