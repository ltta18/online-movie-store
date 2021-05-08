import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import { useSelector } from "react-redux";
import globalStyles from "../../globalStyles";
import { getImage } from "../../utils";
import PriceItem from "./PriceItem";

const MainInfo = () => {
  const film = useSelector((state) => state.filmReducer.fetchDetail);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: getImage(film?.poster_path),
        }}
        style={[globalStyles.image, globalStyles.m5]}
      />
      <Text style={styles.title}>{film?.title}</Text>
      <View style={[globalStyles.dpSb, globalStyles.fw]}>
        <Text style={styles.brandWrapper}>
          By{" "}
          <Text style={styles.brand}>
            {Object.keys(film).length > 0 && film.production_companies[0].name}
          </Text>
        </Text>
        <PriceItem price={15} cls={styles.price} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 400,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginTop: 10,
  },
  price: {
    color: "#C31414",
    fontWeight: "500",
    fontSize: 20,
    alignSelf: "flex-start",
  },
  brandWrapper: {
    color: "#707070",
    alignSelf: "flex-start",
  },
  brand: {
    color: "#1434C3",
    fontWeight: "500",
  },
});

export default MainInfo;