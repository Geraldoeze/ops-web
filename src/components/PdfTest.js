import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

// Define styles for react-pdf
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "300px",
    backgroundColor: "#fff8dc",
    border: "1px solid #ccc",
    borderRadius: 8,
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
    padding: 24,
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",

    writingMode: "vertical-rl",
    textOrientation: "sideways",
    textAlign: "center",
    transform: "rotate(-180deg)",
  },
  subheader: {
    backgroundColor: "#3d7410",
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    padding: "16px",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  avatar: {
    width: 180,
    height: 180,
  },
  name: {
    fontSize: 20,
    borderBottom: "1px solid #ccc",
    borderRadius: 8,
  },
  occupation: {
    fontSize: 16,
  },
});

const PDFDocument = () => {
  return (
    <Document>
      <Page size="A4">
        <View style={styles.container}>
          <Text style={styles.header}>SIKE OPS DIVISION</Text>
          <Text style={styles.subheader}>NO ESCORT</Text>
          <View style={styles.infoContainer}>
            <View>
              <Text style={styles.name}>Joseph Malik</Text>
              <Text style={styles.occupation}>Civil Servant</Text>
            </View>
            <Image src="assets/image3.png" style={styles.avatar} />
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PDFDocument;
