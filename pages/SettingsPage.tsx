import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

export default SettingsPageContent;

function SettingsPageContent() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>
    <View style={styles.content}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>My profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Account management</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonLogOut}>
            <Text style={styles.buttonText}>Log out</Text>
        </TouchableOpacity>
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
    content: {
    flex: 1,
  },
    button: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#999494ff",
  },
    buttonText: {
    fontSize: 16,
  },
  buttonLogOut: {
    marginTop: 30,
    padding: 16,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: "#999494ff",
    borderTopColor: "#999494ff",
  },
});
