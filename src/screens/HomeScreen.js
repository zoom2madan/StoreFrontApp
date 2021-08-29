import React, { useState, useEffect } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Text, Image, Tile, Card, Avatar } from "react-native-elements";
import axios from "axios";

const truncate = (str, maxLength) => {
  return str.length > maxLength ? str.substring(0, maxLength - 3) + "..." : str;
};

const HomeScreen = () => {
  const API_URL_BASE = "https://fakestoreapi.com/products/category/";
  const [isLoading, setIsLoading] = useState(true);
  const [newReleases, setNewReleases] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(API_URL_BASE + "women's clothing")
      .then((res) => {
        setNewReleases(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <Tile
          imageSrc={require("../../assets/img/hero-banner.jpg")}
          title="Find the best products at upto 70% discount"
          contentContainerStyle={{ height: 70 }}
        />
      </View>
      <View style={styles.section}>
        <Card>
          <Card.Title>New Releases</Card.Title>
          <Card.Divider />
          {newReleases.map((product, index) => {
            return (
              <View key={index} style={styles.product}>
                <Image style={styles.image} resizeMode="cover" source={{ uri: product.image }} />
                <Text style={styles.name}>{truncate(product.title, 30)}</Text>
              </View>
            );
          })}
        </Card>
      </View>

      <View style={styles.section}>
        <Tile
          imageSrc={require("../../assets/img/flash-sale-banner.jpg")}
          contentContainerStyle={{ height: 70 }}
        ></Tile>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hero: {
    marginBottom: 30,
  },
  section: {
    marginBottom: 30,
  },
  product: {
    flexDirection: "row",
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});
export default HomeScreen;
