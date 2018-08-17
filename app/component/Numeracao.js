import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Link } from "react-router-native";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={this.props.styleView}
                onTouchStart={() => this.props.selectNumeracao(this.props.num)}>
            <Text style={this.props.styleText}>{this.props.num}</Text>
        </View>
    );
  }
}
