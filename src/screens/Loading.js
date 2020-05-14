import React, { useEffect } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import firebase from "../Firebase";

class Loading extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.props.navigation.navigate(user ? "Home" : "Auth");
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="#000" size="small" />
      </View>
    );
  }
}
export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
