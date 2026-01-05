import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
    
export default InquiriesPageContent;

  type Props = {
  onAddInquiry: () => void;
};

function InquiriesPageContent({ onAddInquiry }: Props) { 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Inquiries</Text>
      </View>
      <View style={styles.centerContent}>
        <Text style={styles.inquiriesText}>No active inquiries</Text>
        <TouchableOpacity style={styles.addButton} onPress={onAddInquiry}>
          <Text style={styles.addButtonText}>+ Add new inquire</Text>
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
