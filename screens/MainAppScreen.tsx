import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import ServicesPage from "../pages/ServicesPage";
import NotificationsPage from "../pages/NotificationsPage";
import InquiriesPage from "../pages/InquiriesPage";
import SettingsPage from "../pages/SettingsPage";
import HelpPage from "../pages/HelpPage";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { NavIcons } from "../assets/images";
import { useTranslation } from "react-i18next";

function MainAppScreenContent() {
  const { t } = useTranslation();
  const [actualPage, setActualPage] = useState(<ServicesPage />);
  const insets = useSafeAreaInsets();

  const navItems = [
    { key: "services", label: t('navigation.services') },
    { key: "inquiries", label: t('navigation.inquiries') },
    { key: "notifications", label: t('navigation.notifications') },
    { key: "settings", label: t('navigation.settings') },
    { key: "help", label: t('navigation.help') },
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

  function onPressNavItem(pageKey: string) {
    switch (pageKey) {
      case "services":
        setActualPage(<ServicesPage />);
        break;
      case "inquiries":
        setActualPage(<InquiriesPage onAddInquiry={onAddInquiryPressed} />);
        break;
      case "notifications":
        setActualPage(<NotificationsPage />);
        break;
      case "settings":
        setActualPage(<SettingsPage />);
        break;
      case "help":
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
            key={item.key}
            style={styles.navItem}
            onPress={() => onPressNavItem(item.key)}
          >
            <Image source={setNavBarIcons(item.key)} style={styles.navIcon} />
            <Text style={styles.navText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }

  function setNavBarIcons(navItemKey: string) {
    return NavIcons[navItemKey as keyof typeof NavIcons];
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
