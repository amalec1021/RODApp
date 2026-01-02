import { View, Text, StyleSheet } from "react-native";

export default NotificationsPageContent;

function NotificationsPageContent() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>
      <View style={styles.centerContent}>
        <Text style={styles.noNotificationsText}>No new notifications</Text>
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
