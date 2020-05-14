import React from "react";
import {
  SafeAreaView,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import Button from "../components/Button";
const screen = Dimensions.get("window");
import firebase from "../Firebase";

class SignupScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      error: "",
    };
  }

  handleSignUp = () => {
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.password === ""
    ) {
      Alert.alert("Input your details");
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((userCredentials) => {
        return userCredentials.user.updateProfile({
          displayName: this.state.name,
        });
      })
      .catch(function (error) {
        Alert.alert("Opps an error Occured", error.message);
      });
  };

  render() {
    return (
      <DismissKeyboard>
        <KeyboardAvoidingView
          style={{ flex: 1, backgroundColor: "#fff" }}
          behavior="padding"
          enabled
        >
          <SafeAreaView style={{ marginTop: 20 }}>
            <View
              style={{
                marginHorizontal: 20,
                marginTop: 40,
                marginBottom: 10,
              }}
            >
              <View style={{ marginBottom: 30 }}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.goBack();
                  }}
                >
                  <Ionicons
                    name="md-arrow-back"
                    color="#fff"
                    size={Platform.OS === "ios" ? 28 : 27}
                  />
                </TouchableOpacity>
              </View>

              <Text style={styles.title}>Create your account</Text>
            </View>
            <View style={{ marginTop: 15 }}>
              <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
                <Text style={styles.labelText}>Username</Text>
                <TextInput
                  placeholder="Barack Obama"
                  style={styles.textInput}
                  autoFocus
                  placeholderTextColor={"grey"}
                  keyboardAppearance={"dark"}
                  onChangeText={(name) => this.setState({ name })}
                  value={this.state.name}
                />
              </View>

              <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
                <Text style={styles.labelText}>Email</Text>
                <TextInput
                  placeholder="johndoe@example.com"
                  style={styles.textInput}
                  autoFocus
                  placeholderTextColor={"grey"}
                  keyboardAppearance={"dark"}
                  onChangeText={(email) => this.setState({ email })}
                  value={this.state.email}
                />
              </View>

              <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
                <Text style={styles.labelText}>Password</Text>
                <TextInput
                  placeholder="password"
                  style={styles.textInput}
                  secureTextEntry
                  placeholderTextColor={"grey"}
                  keyboardAppearance={"dark"}
                  onChangeText={(password) => this.setState({ password })}
                  value={this.state.password}
                />
              </View>

              <View
                style={{
                  marginHorizontal: 25,
                }}
              >
                <Button
                  title="SIGNUP"
                  color="#000"
                  onPress={this.handleSignUp}
                />
              </View>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Login")}
              >
                <View
                  style={{
                    marginTop: 5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{ color: "grey", fontSize: 15, fontWeight: "500" }}
                  >
                    Have an account?{" "}
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "500",
                        color: "#000",
                      }}
                    >
                      Sign in
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </DismissKeyboard>
    );
  }
}
export default SignupScreen;

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const bold = "mont-bold";
const regular = "pt-serif";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#000",
  },
  helpContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#17223b",
    height: 50,
    width: "90%",
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    shadowColor: "#17223b",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 9.51,
    elevation: 15,
  },
  helpLink: {
    marginVertical: 10,
  },
  helpLinkText: {
    fontSize: 14,
    marginBottom: 10,
    color: "grey",
    textDecorationLine: "underline",
  },
  textInput: {
    padding: 15,
    marginBottom: 3,
    borderRadius: 5,
    backgroundColor: "#eee",
    color: "#000",
  },
  labelText: {
    marginBottom: 8,
    fontWeight: "500",
    color: "#AEAEB2",
    fontWeight: "500",
    fontSize: 15,
  },
  icon: {
    marginTop: screen.height / 30,
    marginHorizontal: 18,
    backgroundColor: "#f1f3f4",
    opacity: 0.5,
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
