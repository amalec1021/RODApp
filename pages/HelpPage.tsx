import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { Images } from "../assets/images";
import { useTranslation } from "react-i18next";

export default HelpPageContent;

function HelpPageContent() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{t("help.title")}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Pressable
          style={styles.button}
          onPress={() => {
            console.log("Help center pressed");
          }}
        >
          <Image
            source={Images.appIcon}
            style={styles.helpIcon}
          />
          <Text style={styles.buttonText}>{t("help.helpCenter")}</Text>
          <Text style={styles.arrow}>→</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            console.log("Write to us pressed");
          }}
        >
          <Image
            source={Images.appIcon}
            style={styles.helpIcon}
          />
          <Text style={styles.buttonText}>{t("help.writeToUs")}</Text>
          <Text style={styles.arrow}>→</Text>
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
  contentContainer: {
    flex: 1,
    paddingTop: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    backgroundColor: "#ffffff7c",
    marginLeft: 16,
    marginRight: 16,
    marginTop: 5,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
  },
  arrow: {
    fontSize: 18,
    fontWeight: "bold",
    alignContent: "flex-end",
    marginLeft: "auto",
    marginRight: 16,
  },
  helpIcon: {
    width: 25,
    height: 25,
    borderRadius: 6,
    marginRight: 12,
    marginLeft: 16,
    backgroundColor: "#e0e0e0",
  },
});
