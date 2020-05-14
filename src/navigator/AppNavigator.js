import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Loading from "../screens/Loading";
import Home from "../screens/Home";
import { createStackNavigator } from "react-navigation-stack";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";

const HomeStack = createStackNavigator({
  HomeScreen: Home,
});

const AuthStack = createStackNavigator({
  Login,
  SignUp,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      LoadingScreen: Loading,
      Home: HomeStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: "LoadingScreen",
    }
  )
);
