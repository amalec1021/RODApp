import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { Images } from "../assets/images";
import { useTranslation } from "react-i18next";

export default SettingsPageContent;

function SettingsPageContent() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{t("settings.title")}</Text>
      </View>

      <View style={styles.content}>
        <Pressable
          style={styles.button}
          onPress={() => {
            console.log("My profile pressed");
          }}
        >
          <Image
            source={Images.appIcon}
            style={styles.settingIcon}
          />
          <Text style={styles.buttonText}>{t("settings.myProfile")}</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => {
            console.log("Account management pressed");
          }}
        >
            <Image
            source={Images.appIcon}
            style={styles.settingIcon}
          />
          <Text style={styles.buttonText}>{t("settings.accountManagement")}</Text>
        </Pressable>

        <Pressable
          style={styles.buttonLogOut}
          onPress={() => {
            console.log("Log out pressed");
          }}
        >
            <Image
            source={Images.appIcon}
            style={styles.settingIcon}
          />
          <Text style={styles.buttonText}>{t("settings.logOut")}</Text>
        </Pressable>
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
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#999494ff",
  },
  buttonText: {
    fontSize: 16,
  },
  buttonLogOut: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    padding: 16,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: "#999494ff",
    borderTopColor: "#999494ff",
  },
  settingIcon: {
    width: 40,
    height: 40,
    borderRadius: 6,
    marginRight: 12,
    backgroundColor: "#e0e0e0",
  },
});
