import React from "react";
import PriceItem from "../common/PriceItem";
import globalStyles from "../../globalStyles";
import { StyleSheet, Image, View, Text } from "react-native";
import { useSelector } from "react-redux";
import { getImage } from "../../utils";

const MainInfo = () => {
  // Component displays film's general info in Detail Page

  const film = useSelector((state) => state.filmReducer.fetchDetail);

  return (
    <View style={styles.container}>
      {/* poster */}
      <Image
        source={
          film.poster_path
            ? {
                uri: getImage(film.poster_path),
              }
            : require("img/no-result.png")
        }
        style={[globalStyles.image, globalStyles.m5]}
      />

      {/* film's general info */}
      <Text style={styles.title}>{film?.title}</Text>
      <View style={[globalStyles.dpSb, globalStyles.fw]}>
        <Text style={styles.companyWrapper}>
          By{" "}
          <Text style={styles.company}>
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
  companyWrapper: {
    color: "#707070",
    alignSelf: "flex-start",
  },
  company: {
    color: "#1434C3",
    fontWeight: "500",
  },
});

export default MainInfo;
