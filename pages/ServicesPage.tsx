import { useState } from "react";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { Images } from "../assets/images";
import { useTranslation } from "react-i18next";

export default function ServicesPageContent() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");

  const services = [
    { id: "1", name: t("services.homeBuilding") },
    { id: "2", name: t("services.electricity") },
    { id: "3", name: t("services.plumber") },
    { id: "4", name: t("services.painter") },
    { id: "5", name: t("services.furnitureAndDevelopment") },
    { id: "6", name: t("services.cleaning") },
    { id: "7", name: t("services.installationAndRepair") },
    { id: "8", name: t("services.automotive") },
    { id: "9", name: t("services.gardening") },
    { id: "10", name: t("services.eventsOrganization") },
    { id: "11", name: t("services.transport") },
  ];

  return (
    <View style={styles.container}>
      {/* Scrollable Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <TextInput
          style={styles.searchBar}
          placeholder={t("services.searchPlaceholder")}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />

        {/* Popular Services Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t("services.popularServices")}</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[1, 2, 3, 4, 5].map((item) => (
              <TouchableOpacity key={item} style={styles.placeholderButton}>
                <Text>{t("services.serviceItem", { number: item })}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Services List */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t("services.listOfServices")}</Text>
          <FlatList
            data={services}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <Pressable style={styles.serviceItem} onPress={() => {console.log(`Service ${item.name} pressed`)}}>
                <Image
                  source={Images.appIcon}
                  style={styles.serviceImage}
                />
                <Text style={styles.serviceText}>{item.name}</Text>
              </Pressable>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "transparent",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: "#999494ff",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 20,
    marginTop: 15,
    fontSize: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
  },
  placeholderButton: {
    width: 100,
    height: 100,
    marginRight: 12,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  serviceItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#999494ff",
  },

  serviceImage: {
    width: 40,
    height: 40,
    borderRadius: 6,
    marginRight: 12,
    backgroundColor: "#e0e0e0",
  },
  serviceText: {
    fontSize: 14,
  },
});
