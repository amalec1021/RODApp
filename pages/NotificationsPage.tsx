import { View, Text, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";

export default NotificationsPageContent;

function NotificationsPageContent() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{t("notifications.title")}</Text>
      </View>
      <View style={styles.centerContent}>
        <Text style={styles.noNotificationsText}>{t("notifications.noNewNotifications")}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "transparent",
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#999494ff",
    backgroundColor: "transparent",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noNotificationsText: {
    fontSize: 16,
    color: "#666",
  },
});
