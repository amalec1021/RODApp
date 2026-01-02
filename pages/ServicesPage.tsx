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
} from "react-native";

export default function ServicesPageContent() {
  const [searchQuery, setSearchQuery] = useState("");

  const services = [
    { id: "1", name: "Home building" },
    { id: "2", name: "Electricity" },
    { id: "3", name: "Plumber" },
    { id: "4", name: "Painter" },
    { id: "5", name: "Furniture and development" },
    { id: "6", name: "Cleaning" },
    { id: "7", name: "Installation and repair" },
    { id: "8", name: "Automotive" },
    { id: "9", name: "Gardening" },
    { id: "10", name: "Events organization" },
    { id: "11", name: "Transport" },
  ];

  return (
    <View style={styles.container}>
      {/* Scrollable Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <TextInput
          style={styles.searchBar}
          placeholder="Search service..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />

        {/* Popular Services Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular services</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[1, 2, 3, 4, 5].map((item) => (
              <TouchableOpacity key={item} style={styles.placeholderButton}>
                <Text>Service {item}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Services List */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>List of services</Text>
          <FlatList
            data={services}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.serviceItem}>
                <Image
                  source={require("../assets/icon.png")}
                  style={styles.serviceImage}
                />
                <Text style={styles.serviceText}>{item.name}</Text>
              </TouchableOpacity>
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
