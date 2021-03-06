import React from "react";
import PriceItem from "./PriceItem";
import globalStyles from "globalStyles";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getImage } from "utils";

const FilmBox = ({ item, width, navigation }) => {
  // Component displays the common style for film box
  // Params: (2)
  // item: Object
  // width: Number

  return (
    <View style={[styles.shadow, { width: width, padding: 10 }]}>
      <TouchableOpacity
        onPress={() => navigation.push("Detail", { id: item.id })}
      >
        <View style={styles.itemImageContainer}>
          <Image
            source={
              item.poster_path
                ? {
                    uri: getImage(item.poster_path),
                  }
                : require("img/no-result.png")
            }
            style={[globalStyles.image, globalStyles.m5]}
          />
        </View>
      </TouchableOpacity>
      <Text numberOfLines={2} style={[globalStyles.txCt, globalStyles.p5]}>
        {item?.title}
      </Text>
      <View style={[globalStyles.dpCt, styles.priceContainer]}>
        <PriceItem price="15.00" cls={[styles.itemPrice, globalStyles.m5]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemImageContainer: {
    flexDirection: "row",
  },
  shadow: {
    shadowColor: "lightgrey",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,

    elevation: 3,
    borderColor: "transparent",
    borderWidth: 1,
  },
  priceContainer: {
    marginTop: 5,
    marginBottom: 5,
  },
  itemPrice: {
    fontWeight: "bold",
  },
});
export default FilmBox;
