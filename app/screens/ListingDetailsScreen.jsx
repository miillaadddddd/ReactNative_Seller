import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppText from "../components/AppText/AppText";
import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/watch.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>ساعت مچی</AppText>
        <AppText style={styles.price}>100﷼</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/person.jpeg")}
            title="میلاد حسنی"
            subTitle="۵ کالا"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});
export default ListingDetailsScreen;
