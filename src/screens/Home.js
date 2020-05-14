import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import firebase from "../Firebase";

const Home = () => {
  const signOutUser = () => {
    firebase.auth().signOut();
  };
  return (
    <View style={styles.container}>
      <Text>Hi</Text>
      <Button title="sign out" onPress={signOutUser} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
