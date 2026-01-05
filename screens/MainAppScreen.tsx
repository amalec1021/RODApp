import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import ServicesPage from "../pages/ServicesPage";
import NotificationsPage from "../pages/NotificationsPage";
import InquiriesPage from "../pages/InquiriesPage";
import SettingsPage from "../pages/SettingsPage";
import HelpPage from "../pages/HelpPage";
import { SafeAreaProvider, useSafeAreaInsets,} from "react-native-safe-area-context";

function MainAppScreenContent() {
  const [actualPage, setActualPage] = useState(<ServicesPage />);
  const insets = useSafeAreaInsets();

  const navItems = [
    "Services",
    "Inquiries",
    "Notifications",
    "Settings",
    "Help",
  ];

  const onAddInquiryPressed = () => {
    setActualPage(<ServicesPage />);
  };

  return (
    <LinearGradient
      colors={["#b8eeffff", "#c9fd91ff"]}
      style={styles.container}
    >
      <View style={{ flex: 1 }}>{actualPage}</View>
      {navBarContent()}
    </LinearGradient>
  );

  function onPressNavItem(page: string) {
    switch (page) {
      case navItems[0]:
        setActualPage(<ServicesPage />);
        break;
      case navItems[1]:
        setActualPage(<InquiriesPage onAddInquiry={onAddInquiryPressed} />);
        break;
      case navItems[2]:
        setActualPage(<NotificationsPage />);
        break;
      case navItems[3]:
        setActualPage(<SettingsPage />);
        break;
      case navItems[4]:
        setActualPage(<HelpPage />);
        break;
    }
  }

  function navBarContent() {
    {
      /* Bottom Navigation Bar */
    }
    return (
      <View style={[styles.navBar, { paddingBottom: insets.bottom }]}>
        {navItems.map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.navItem}
            onPress={() => onPressNavItem(item)}
          >
            <Image source={setNavBarIcons(item)} style={styles.navIcon} />
            <Text style={styles.navText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }

  function setNavBarIcons(navItem: string) {
    switch (navItem) {
      case navItems[0]:
        return require("../assets/images/plus.png");
      case navItems[1]:
        return require("../assets/images/question.png");
      case navItems[2]:
        return require("../assets/images/chat.png");
      case navItems[3]:
        return require("../assets/images/setting.png");
      case navItems[4]:
        return require("../assets/images/help.png");
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "transparent",
  },
  navBar: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "#ffffffc4",
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

export default function MainAppScreen() {
  return (
    <SafeAreaProvider>
      <MainAppScreenContent />
    </SafeAreaProvider>
  );
}
