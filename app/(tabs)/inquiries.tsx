/**
 * Inquiries Tab Screen
 *
 * URL: rodapp://inquiries or rodapp://inquiries/[id]
 */

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useTranslation } from "react-i18next";

export default function InquiriesPage() {
  const router = useRouter();
  const { t } = useTranslation();
  const { inquiryId } = useLocalSearchParams();

  // Handle deep link parameter (e.g., rodapp://inquiries/123)
  if (inquiryId) {
    console.log('Opened inquiry:', inquiryId);
    // TODO: Load specific inquiry data
  }

  const handleAddInquiry = () => {
    // Navigate to Services tab when adding a new inquiry
    router.push('/(tabs)/services');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{t("inquiries.title")}</Text>
      </View>
      <View style={styles.centerContent}>
        <Text style={styles.inquiriesText}>{t("inquiries.noActiveInquiries")}</Text>
        <TouchableOpacity style={styles.addButton} onPress={handleAddInquiry}>
          <Text style={styles.addButtonText}>{t("inquiries.addNewInquire")}</Text>
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
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inquiriesText: {
    fontSize: 16,
    color: "#666",
  },
  addButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderColor: "black",
    width: "95%",
    paddingLeft: 40,
    paddingRight: 40,
    alignItems: "center",
    backgroundColor: "#22c55e",
  },
  addButtonText: {
    fontSize: 16,
    color: "#fff",
  },
});
