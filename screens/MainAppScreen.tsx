import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import ServicesPage from "../pages/ServicesPage";
import NotificationsPage from "../pages/NotificationsPage";

function MainAppScreen() {
  const [actualPage, setActualPage] = useState(<ServicesPage />);

  const navItems = [
    "Services",
    "Inquiries",
    "Notifications",
    "Settings",
    "Help",
  ];

  return (
    <LinearGradient
      colors={["#b8eeffff", "#c9fd91ff"]}
      style={styles.container}
    >
      {actualPage}
      {navBarContent()}
    </LinearGradient>
  );

  function onPressNavItem(item: string) {
    switch (item) {
      case "Services":
        setActualPage(<ServicesPage />);
        break;
      case "Notifications":
        setActualPage(<NotificationsPage />);
        break;
    }
  }

  function navBarContent() {
    {
      /* Bottom Navigation Bar */
    }
    return (
      <View style={styles.navBar}>
        {navItems.map((item) => (
          <TouchableOpacity key={item} style={styles.navItem} onPress={() => onPressNavItem(item)}>
            <Image
              source={require("../assets/icon.png")}
              style={styles.navIcon}
            />
            <Text style={styles.navText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "transparent",
  },
  navBar: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "#fff",
  },
  navItem: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
  },
  navIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
    tintColor: "#666",
  },
  navText: {
    fontSize: 12,
  },
});

export default MainAppScreen;
