import * as React from "react";
import {
  SafeAreaView,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Button from "../components/Button";
import firebase from "../Firebase";
const screen = Dimensions.get("window");

class Login extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    email: "",
    password: "",
    errorMessage: null,
    isLoading: false,
    isSuccessful: false,
  };

  handleLogin = () => {
    const { email, password } = this.state;
    if (email.length === "" || password.length === "") {
      Alert.alert("Input your details");
      return;
    }
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        Alert.alert("Error occured", error.message);
      })
      .then((response) => {
        this.setState({ isLoading: false });
        if (response) {
          this.setState({ isSuccessful: true });
          Alert.alert("Congrats", "You've logged in successfully!");
        }
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
          <SafeAreaView style={{ marginTop: 18 }}>
            <View
              style={{
                marginHorizontal: 20,
                marginTop: 40,
                marginBottom: 10,
              }}
            >
              <Text style={styles.title}>Log in to your account</Text>
            </View>

            <View style={{ marginTop: 20 }}>
              <View style={styles.labelView}>
                <Text style={styles.labelText}>Email</Text>
                <TextInput
                  placeholder="johndoe@example.com"
                  style={styles.textInput}
                  onChangeText={(email) => this.setState({ email })}
                  value={this.state.email}
                  placeholderTextColor={"grey"}
                  enablesReturnKeyAutomatically={true}
                  keyboardAppearance={"light"}
                />
              </View>

              <View style={styles.labelView}>
                <Text style={styles.labelText}>Password</Text>
                <TextInput
                  placeholder="password"
                  style={styles.textInput}
                  onChangeText={(password) => this.setState({ password })}
                  value={this.state.password}
                  secureTextEntry
                  placeholderTextColor={"grey"}
                  keyboardAppearance={"light"}
                  enablesReturnKeyAutomatically={true}
                />
              </View>
            </View>

            <View
              style={{
                marginTop: screen.height / 16,
                marginHorizontal: 25,
              }}
            >
              <Button title="LOGIN" onPress={this.handleLogin} color="#000" />

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("SignUp")}
              >
                <View style={styles.footer}>
                  <Text
                    style={{ color: "grey", fontSize: 15, fontWeight: "500" }}
                  >
                    Don't have an account?{" "}
                    <Text style={styles.footerText}>Sign Up</Text>
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
export default Login;

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#000",
  },
  textInput: {
    padding: 18,
    marginBottom: 3,
    borderRadius: 5,
    backgroundColor: "#eee",
    color: "#000",
  },
  labelView: { marginHorizontal: 20, marginVertical: 5 },
  labelText: {
    marginBottom: 8,
    fontWeight: "500",
    color: "#AEAEB2",
    fontSize: 15,
  },
  footer: {
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#000",
  },
  forgotPasswordText: {
    marginTop: 10,
    color: "#000",
    fontWeight: "400",
    fontSize: 15,
  },
});
