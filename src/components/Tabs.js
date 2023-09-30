import React from "react";
import CurrentWeather from "./src/screens/CurrentWeather";
import UpComingWeather from "./src/screens/UpComingWeather";
import City from "./src/screens/City";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
        screenOptions={{
          tabBarActiveColor: "tomato",
          tabBarInactiveTintColor: "grey",
        }}>
        <Tab.Screen
          name={"Current"}
          component={CurrentWeather}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name={"droplet"}
                size={25}
                color={focused ? "tomato" : "black"}
              />
            ),
          }}
        />
        <Tab.Screen
          name={"UpComing"}
          component={UpComingWeather}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name={"clock"}
                size={25}
                color={focused ? "tomato" : "black"}
              />
            ),
          }}
        />
        <Tab.Screen
          name={"City"}
          component={City}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name={"home"}
                size={25}
                color={focused ? "tomato" : "black"}
              />
            ),
          }}
        />
      </Tab.Navigator>
  )
}
