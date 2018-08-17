import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  ToolbarAndroid,
  ScrollView,
  FlatList
} from "react-native";
import produtos from "../../scripts/produtosHome.json";
export default class IntialPage extends React.Component {
  constructor(props) {
    super(props);
  }

  _renderProdutosParaHome() {
    return (
      <FlatList
        data={produtos}
        keyExtractor={item => item.id}
        numColumns={2} // Número de colunas
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Image
              source={{
                uri: `${item.imagem}`,
                width: 170,
                height: 170
              }}
            />
            <Text style={styles.tituloHome}>{item.titulo}</Text>
            <Text>{item.descricao}</Text>
          </View>
        )}
      />
    );
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <ToolbarAndroid
            style={styles.toolbar}
            logo={require("../../images/logo.jpg")}
            title="AwesomeApp"
          />
          {this._renderProdutosParaHome()}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  toolbar: {
    backgroundColor: "#FFFFFF",
    height: 50,
    alignSelf: "stretch",
    paddingBottom: 30
  },
  produtos: {
    justifyContent: "center",
    alignItems: "center"
  },
  item: {
    flex: 1
  },
  tituloHome: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000000",
    textAlign: "center"
  }
});
