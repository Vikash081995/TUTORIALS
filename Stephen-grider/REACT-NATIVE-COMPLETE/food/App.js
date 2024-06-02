import { createAppContainer } from "react-navigation";
// import {createStackNavigator}
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "BusinessSearch"
    }
  }
);

export default createAppContainer(navigator);
